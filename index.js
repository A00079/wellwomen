const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const path = require('path');
const port = process.env.PORT || 5000;
const multer = require("multer");


const SubmitSerway = require('./routes/UserSerway/submitSerway.js');
const RaiseTicket = require('./routes/RaiseTicket/RaiseTicket.js');
const Contact = require('./routes/Contact/contactus.js');
const VerifyUser = require('./routes/api/verifyuser.js');
const PostBlogs = require('./routes/api/blogs.js');

const forceSsl = require('force-ssl-heroku');

// Image handler
const fileStorage = multer.diskStorage({
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});


const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "image/png" ||
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/jpeg"
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};


app.use(
	multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"),
);
app.use(forceSsl);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// Middlewares
app.use(cors());
// Routes
const users = require("./routes/api/users");
app.use('/api/user/submitserway', SubmitSerway);
app.use('/api/user/submitserway', SubmitSerway);
app.use('/api/user/contact', Contact);
app.use('/api/user/raiseticket', RaiseTicket);
app.use('/email/confirm', VerifyUser)
app.use('/api/admin/postBlog/create', PostBlogs)
app.use('/api/admin/getBlog/read', PostBlogs)
app.use('/api/admin/updateBlog', PostBlogs)
app.use('/api/admin/deleteBlog', PostBlogs)
app.use('/api/admin/getUsers', users)

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
	.connect(
		db,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log("MongoDB successfully connected"))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

if (process.env.NODE_ENV === 'production') {

	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get(/.*/, (req, res) => {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
	

	app.use('/portal', express.static(path.join(__dirname, 'portal/build')));
	app.get("/portal/*", (req, res) => {
		res.sendFile(path.join(__dirname, 'portal/build', 'index.html'));
	});
	
}

app.listen(port, () => {
	console.log(`Server Running at ${port}`);
});