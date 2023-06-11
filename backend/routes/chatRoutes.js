const express = require("express");
const { accessChat, fetchChats } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);

module.exports = router;