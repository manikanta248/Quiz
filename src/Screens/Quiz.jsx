import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

const Quiz = () => {
    const location = useLocation();
    const { quiz } = location.state || {};

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [feedback, setFeedback] = useState("");

    const { theme } = useContext(ThemeContext);

    const handleOptionChange = (option) => {
        setSelectedAnswer(option);
    };
    const handleStoreQuizData = async () => {
        try {
            
            let userName = localStorage.getItem("quizUserName");
    
            
            if (!userName) {
                userName = `user_${Math.floor(Math.random() * 100000)}`;
                localStorage.setItem("quizUserName", userName);
            }
    
            
            const response = await fetch("https://quizbackend-1k43.onrender.com/quiz-data/store-quiz-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: userName, 
                    score: score,   
                    topic:quiz.topic
                }),
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log("Data stored successfully:", data);
            } else {
                console.error("Error storing data:", data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    

    const handleSubmitAnswer = () => {
        if (selectedAnswer === null) {
            alert("Please select an answer before submitting.");
            return;
        }

        const isCorrect = selectedAnswer === quiz.questions[currentQuestion].answer;
        if (isCorrect) {
            setScore(score + 1);
            setFeedback("✅ Correct!");
        } else {
            setFeedback("❌ Incorrect!");
        }

        setIsAnswered(true);
    };

    const handleNextQuestion =async () => {
        if (currentQuestion + 1 < quiz.questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
            setFeedback("");
        } else {
            await handleStoreQuizData()
            setShowResults(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setScore(0);
        setShowResults(false);
        setFeedback("");
    };

    return (
        <div style={{ margin: "20px",  }}>
            {showResults ? (
                <div style={{textAlign:"center"}}>
                    <h1>Quiz Completed!</h1>
                    <h2>Your Score: {score} / {quiz.questions.length}</h2>
                    <button
                        style={{
                            cursor: "pointer",
                            background: "#2ECC71",
                            padding: "9px 15px",
                            borderRadius: "7px",
                            color: theme === "light" ? "black" : "white",
                            marginTop: "10px",
                        }}
                        onClick={restartQuiz}
                    >
                        Restart Quiz
                    </button>
                </div>
            ) : (
                <div>
                    <h1>{quiz.topic}</h1>
                    <h2 style={{width:"90vw",display:"flex",justifyContent:"center"}}>Question {currentQuestion + 1} / {quiz.questions.length}</h2>
                    <div
                        style={{
                            padding: "25px",
                            margin: "20px",
                            background: theme === "light" ? "#ECECEC" : "#181818",
                            borderRadius: "11px",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"start"
                        }}
                    >
                        <h3 style={{fontSize:"32px"}}>{quiz.questions[currentQuestion].question}</h3>
                        {quiz.questions[currentQuestion].options.map((option, index) => (
                            <label key={index} style={{ display: "block", marginBottom: "5px",fontSize:"24px" }}>
                                <input
                                    type="radio"
                                    name={`question-${currentQuestion}`}
                                    value={option}
                                    checked={selectedAnswer === option}
                                    onChange={() => handleOptionChange(option)}
                                    disabled={isAnswered}
                                />
                                {option}
                            </label>
                        ))}
                    </div>

                    {isAnswered && <h3 style={{ color: feedback.includes("✅") ? "green" : "red" }}>{feedback}</h3>}
                    {isAnswered && <h3 style={{ color: feedback.includes("❌") ? "green" : "red" }}>{feedback.includes("❌")?"Correct answer: ":""} {feedback.includes("❌")?quiz.questions[currentQuestion].answer:""}</h3>}
                    <div style={{width:"90vw",display:"flex",justifyContent:"end"}}>
                    <button
                        style={{
                            cursor: "pointer",
                            background: "#3498db",
                            padding: "9px 15px",
                            borderRadius: "7px",
                            color: theme === "light" ? "black" : "white",
                            marginTop: "10px",
                            marginRight: "10px"
                        }}
                        onClick={handleSubmitAnswer}
                        disabled={isAnswered}
                    >
                        Submit Answer
                    </button>

                    <button
                        style={{
                           
                            background: isAnswered?"#2ECC71":"gray",
                            padding: "9px 15px",
                            borderRadius: "7px",
                            color: theme === "light" ? "black" : "white",
                            marginTop: "10px",
                            cursor:isAnswered?"pointer":"not-allowed"

                        }}
                        onClick={handleNextQuestion}
                        disabled={!isAnswered}
                    >
                        {currentQuestion + 1 === quiz.questions.length ? "Finish Quiz" : "Next Question"}
                    </button>
                    </div>
                    
                </div>
            )}
        </div>
    );
};

export default Quiz;
