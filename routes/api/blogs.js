const express = require("express");
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;
const path = require('path');

// Load Blogs model
const Blogs = require("../../models/Blogs");
const { uploadCloud, deleteCloud } = require("../../config/cloudinaryConfig");
const e = require("express");


// Find Image delete and Update
// var imageUrlName = results[0].image;
// var splitArry = imageUrlName.split("/");
// var final = splitArry[splitArry.length - 1];
// var public_id = path.parse(final).name;
// deleteCloud(public_id);

// @route POST api/admin/blogs
// @desc Post admin blogs
// @access Public

router.post("/", (req, res) => {

    if (!req.file) {
        return res.status(422).json({
            message: "No image provided",
        });
    }

    var imageUrl = req.file.path;

    var imageName;
    uploadCloud(imageUrl).then((imgRes) => {
        imageName = imgRes.url;

        const newBlogPost = new Blogs({
            title: req.body.Title,
            shortdiscription: req.body.ShortDiscription,
            youtubelink: req.body.Youtubelink,
            anytag: req.body.AnyTags,
            discription: req.body.Discription,
            date: req.body.Date,
            imageurl: imageName,
            image: imageName

        })
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

    const id = ObjectId(req.body.id);
    var imageUrl = null;
    if (!('file' in req)) {
        console.log('No file in req!');
    } else if (('path' in req.file)) {
        imageUrl = req.file.path;
    }

    console.log('ID', id)
    console.log('imageUrl', imageUrl)

    // Search by ObjectId
    Blogs.findById(id, function (err, doc) {
        if (err) {
            res.json({ msg: 'Error fetching Post...' })
        } else {

            if (!!imageUrl) {

                console.log('New Image---------------------------------------->')
                console.log('New Image doc.imageurl---------------------------------------->', doc.imageurl)

                var imageUrlName = doc.imageurl;
                var splitArry = imageUrlName.split("/");
                var final = splitArry[splitArry.length - 1];
                var public_id = path.parse(final).name;
                deleteCloud(public_id);


                var imageName;
                uploadCloud(imageUrl).then((imgRes) => {
                    imageName = imgRes.url;

                    Blogs.findOneAndUpdate({ _id: id }, {
                        $set: {
                            title: req.body.Title,
                            shortdiscription: req.body.ShortDiscription,
                            youtubelink: req.body.Youtubelink,
                            anytag: req.body.AnyTags,
                            discription: req.body.Discription,
                            image: imageName,
                            imageurl: imageName,
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

            } else {


                console.log('Old Image---------------------------------------->')

                Blogs.findOneAndUpdate({ _id: id }, {
                    $set: {
                        title: req.body.Title,
                        shortdiscription: req.body.ShortDiscription,
                        youtubelink: req.body.Youtubelink,
                        anytag: req.body.AnyTags,
                        discription: req.body.Discription,
                        imageurl: req.body.imageUrl,
                        image: req.body.image,
                        date: req.body.Date
                    }
                },
                    { new: true })
                    .then((docs) => {
                        res.json({ msg: 'Post Updated...' })
                    }).catch((err) => {
                        res.json({ msg: 'Error Post Updating...' })
                    })
            }
        }
    });
});

router.delete("/delete", (req, res) => {
    const id = ObjectId(req.body.id)

    Blogs.findOneAndRemove({ _id: id })
        .then((docs) => {
            if (docs) {
                var imageUrlName = docs.imageurl;
                var splitArry = imageUrlName.split("/");
                var final = splitArry[splitArry.length - 1];
                var public_id = path.parse(final).name;
                deleteCloud(public_id);
                res.json({ msg: 'Post Deleted...' })
            } else {
                res.json({ msg: 'Error Deleting Post...' })
            }
        }).catch((err) => {
            res.json({ msg: 'Error Deleting Post...' })
        })
});
module.exports = router;