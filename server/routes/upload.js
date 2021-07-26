const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth')
const {
    upload,
    uploadProfilePic,
    uploadSubmissionPic,
    deleteImage
} = require("../controllers/upload")

router.route('/images').post(protect, upload)
router.route('/delete/:key').delete(protect, deleteImage)
router.route('/profile').post(protect, uploadProfilePic)
router.route('/submission').post(protect, uploadSubmissionPic)

module.exports = router;