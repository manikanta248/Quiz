const express = require("express");
const QuizData = require("../models/quizData"); 

const router = express.Router();



router.get("/get-quiz-data", async (req, res) => {
    try {
        const quizData = await QuizData.find();
        res.status(200).json(quizData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
