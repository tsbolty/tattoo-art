const PersonalInfo = require("../models/PersonalInfo");
const asyncHandler = require("express-async-handler");

exports.createOrUpdatePersonalInfo = asyncHandler(async (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");

	try {
		const filter = { userId: req.user.id };
		const update = req.body;
		const options = { upsert: true, new: true };

		const info = await PersonalInfo.findOneAndUpdate(filter, update, options);

		res.status(200).json(info);
	} catch (err) {
		res.status(500).json(err);
	}
});

exports.getPersonalInfo = asyncHandler(async (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");

	try {
		const info = await PersonalInfo.find({
			userId: req.user.id
		});

		res.status(200).json(info);
	} catch (err) {
		res.status(500).json(err);
	}
});

exports.getInfoById = asyncHandler(async (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");

	try {
		const info = await PersonalInfo.findOne({
			userId: req.params.id
		}).populate("userId", { profilePic: true });

		res.status(200).json(info);
	} catch (err) {
		res.status(500).json(err);
	}
});
