const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");


const quizRoutes = require("./routes/quizData");
const storeQuizData = require('./routes/StoreQuizData')
const getQuizData = require('./routes/getQuizData')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/quiz',quizRoutes);
app.use('/quiz-data',storeQuizData)
app.use('/get-quiz-data',getQuizData)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.error("MongoDB Connection Error ❌", err));
app.get("/", (req, res) => {
  res.send("Welcome to the Quiz API!");
});



// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
