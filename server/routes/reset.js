const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { forgotPassword, resetPassword } = require("../controllers/reset");

router.route("/").post(forgotPassword);
router.route("/update-password/:id").patch(resetPassword);

module.exports = router;