const express = require("express");
const router = express.Router();

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
module.exports = router;