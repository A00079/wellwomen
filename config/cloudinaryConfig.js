const cloudinary = require("cloudinary");
cloudinary.config({
	cloud_name: "hovmc6qq5",
	api_key: "522764877535552",
	api_secret: "2JIiEo3hYpqXDELuYYVRbn8m0uE",
});

module.exports = {
	uploadCloud: (file) => {
		return new Promise((resolve) => {
			cloudinary.uploader.upload(
				file,
				(result) => {
					resolve({ url: result.secure_url, id: result.public_id });
				},
				{ resource_type: "auto" },
			);
		});
	},

	deleteCloud: (file) => {
		cloudinary.v2.uploader.destroy(file, (error, result) => {
			console.log(result, error);
		});
	},
};
