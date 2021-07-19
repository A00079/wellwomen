const cloudinary = require("cloudinary");
cloudinary.config({
	cloud_name: "dasnh0kul",
	api_key: "935823349474977",
	api_secret: "TKtglETiaDbQ-Nf8V3yiOligUA0",
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
