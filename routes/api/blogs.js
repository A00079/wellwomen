const express = require("express");
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;

// Load Blogs model
const Blogs = require("../../models/Blogs");

// @route POST api/admin/blogs
// @desc Post admin blogs
// @access Public

router.post("/", (req, res) => {

    const newBlogPost = new Blogs({
        title: req.body.Title,
        shortdiscription: req.body.ShortDiscription,
        youtubelink: req.body.Youtubelink,
        anytag: req.body.AnyTags,
        discription: req.body.Discription,
        date: req.body.Date

    });
    // save post
    newBlogPost
        .save()
        .then(() => {
            res.json({
                success: 'Post Created',
            });
        })
        .catch(err => console.log(err));
});

router.get("/", (req, res) => {

    Blogs.find({})
        .then(blog => {
            res.json({
                data: blog,
            });
        })
        .catch(err => console.log(err));
});

router.post("/modify", (req, res) => {
    const id = ObjectId(req.body.id)
    console.log('ID', id)
    console.log('ID', req.body)

    Blogs.findOneAndUpdate({ _id: id }, {
        $set: {
            title: req.body.Title,
            shortdiscription: req.body.ShortDiscription,
            youtubelink: req.body.Youtubelink,
            anytag: req.body.AnyTags,
            discription: req.body.Discription,
            date: req.body.Date
        }
    },
        { new: true })
        .then((docs) => {
            res.json({ msg: 'Post Updated...' })
        }).catch((err) => {
            res.json({ msg: 'Error Post Updating...' })
        })
});

router.delete("/delete", (req, res) => {
    const id = ObjectId(req.body.id)

    Blogs.findOneAndRemove({ _id: id })
        .then((docs) => {
            if (docs) {
                res.json({ msg: 'Post Deleted...' })
            } else {
                res.json({ msg: 'Error Deleting Post...' })
            }
        }).catch((err) => {
            res.json({ msg: 'Error Deleting Post...' })
        })
});
module.exports = router;