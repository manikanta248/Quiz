const express = require("express");
const QuizData = require("../models/quizData"); 

const router = express.Router();

router.post("/store-quiz-data", async (req, res) => {
    try {
        const quizEntry = new QuizData(req.body); 
        await quizEntry.save();
        res.status(201).json(quizEntry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



module.exports = router;
