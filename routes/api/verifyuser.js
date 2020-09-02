const express = require("express");
const router = express.Router();
const msgs = require('../../email/email.msgs');

// Load User model
const User = require("../../models/User");

router.get("/", (req, res) => {
    const { id } = req.params

    User.findById(id)
        .then(user => {

            // A user with that id does not exist in the DB. Perhaps some tricky 
            // user tried to go to a different url than the one provided in the 
            // confirmation email.
            if (!user) {
                res.json({ msg: msgs.couldNotFind })
            }

            // The user exists but has not been confirmed. We need to confirm this 
            // user and let them know their email address has been confirmed.
            else if (user && !user.confirmed) {
                User.findByIdAndUpdate(id, { confirmed: true })
                    .then(() => res.json({ msg: msgs.confirmed }))
                    .catch(err => console.log(err))
            }

            // The user has already confirmed this email address.
            else {
                res.json({ msg: msgs.alreadyConfirmed })
            }

        })
        .catch(err => console.log(err))
});

module.exports = router;