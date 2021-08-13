const Reviews = require("../models/Reviews");
const asyncHandler = require("express-async-handler");

exports.getReviewsForAll = asyncHandler(
	asyncHandler(async (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");

		try {
			const review = await Reviews.find({}).populate("reviewerId", {
				profilePic: true,
				username: true
			});

			res.status(200).json(review);
		} catch (err) {
			res.status(500).json(err);
		}
	})
);

exports.getAllReviews = asyncHandler(async (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");

	try {
		const review = await Reviews.find({
			artistId: req.params.id
		}).populate("reviewerId", { profilePic: true, username: true });
		res.status(200).json(review);
	} catch (err) {
		res.status(500).json(err);
	}
});

exports.createReview = asyncHandler(async (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");

	try {
		const hasReview = await Reviews.find({
			artistId: req.body.artistId,
			reviewerId: req.user.id
		});

		if (!hasReview.length) {
			const review = await Reviews.create({
				reviewerId: req.user.id,
				...req.body
			});
			res.status(201).json(review);
		} else {
			res.status(400).json({ error: "Cannot create multiple reviews." });
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

exports.deleteReview = asyncHandler(async (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");

	try {
		const review = await Reviews.deleteOne({
			artistId: req.params.id,
			reviewerId: req.user.id
		});
		res.status(200).json(review);
	} catch (err) {
		res.status(500).json(err);
	}
});
