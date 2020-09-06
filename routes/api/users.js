const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const sendEmail = require('../../email/email.send');
const msgs = require('../../email/email.msgs');
const templates = require('../../email/email.templates');
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
// Load Admin model
const Admin = require("../../models/Admin");


// @route POST api/users/googlesignin
// @desc Register user
// @access Public

router.post("/googlesignin", (req, res) => {

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      const payload = {
        id: user.id,
        name: user.name
      };

      // Sign token
      jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 31556926 // 1 year in seconds
        },
        (err, token) => {
          res.json({
            success: true,
            _isAdmin: false,
            token: "Bearer " + token
          });
        }
      );
    }
    if (!user) {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      // save user
      newUser
        .save()
        .then(user => {
          const payload = {
            id: user.id,
            name: user.name
          };

          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                _isAdmin: false,
                token: "Bearer " + token
              });
            }
          );
        })
        .catch(err => console.log(err));
    }
    else if (user && !user.confirmed) {
      sendEmail(user.email, templates.confirm(user._id))
        .then(() => res.json({ msg: msgs.resend }))
    }

    // The user has already confirmed this email address
    else {
      res.json({ msg: msgs.alreadyConfirmed })
    }
  });
});















// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }
    if (!user) {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              sendEmail(user.email, templates.confirm(user._id))
                .then(() => {
                  res.json({ user, 'msg': msgs.confirm })
                })
            })
            .catch(err => console.log(err));
        });
      });
    }
    else if (user && !user.confirmed) {
      sendEmail(user.email, templates.confirm(user._id))
        .then(() => res.json({ msg: msgs.resend }))
    }

    // The user has already confirmed this email address
    else {
      res.json({ msg: msgs.alreadyConfirmed })
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  const admin_email_id = req.body.email;

  //Check if it's admin
  Admin.findOne({ admin_email_id }).then((admin) => {
    console.log('admin', admin)
    if (admin) {
      if (admin.admin_email_id === email && admin.admin_password === password) {
        // Admin matched
        // Create JWT Payload
        const payload = {
          id: admin.id,
          name: admin.admin_email_id
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              _isAdmin: true,
              token: "Bearer " + token
            });
          }
        );
      }
    } else {
      // Find user by email
      User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
          return res.status(404).json({ error: "Authorization failed" });
        }
        if (user.confirmed) {
          // Check password
          bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
              // User matched
              // Create JWT Payload
              const payload = {
                id: user.id,
                name: user.name
              };

              // Sign token
              jwt.sign(
                payload,
                keys.secretOrKey,
                {
                  expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                  res.json({
                    success: true,
                    _isAdmin: false,
                    token: "Bearer " + token
                  });
                }
              );
            } else {
              return res
                .status(400)
                .json({ error: "Authorization failed" });
            }
          });
        } else {
          return res
            .status(400)
            .json({ error: "Please verify your email address." });
        }
      });
    }
  })
    .catch((err) => {
      return res.status(404).json({ error: "Something went wrong.Plz try again." });
    })
});

module.exports = router;
