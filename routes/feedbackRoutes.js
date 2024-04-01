// feedbackRoutes.js

const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const authMiddleware = require("../middlewares/authMiddleware");
router.post("/", authMiddleware, feedbackController.createFeedback);

// Get feedback by user ID
router.get("/:userId", feedbackController.getFeedbackByUser);

module.exports = router;
