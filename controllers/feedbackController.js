// feedbackController.js

const Feedback = require("../models/Feedback");

// Create new feedback
exports.createFeedback = async (req, res) => {
  console.log("feddback req :", req.body);
  try {
    const { userId, feedbackType, feedback } = req.body;
    const newFeedback = await Feedback.create({
      userId,
      feedbackType,
      feedback,
    });
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get feedback by user ID
exports.getFeedbackByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const feedback = await Feedback.find({ userId });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
