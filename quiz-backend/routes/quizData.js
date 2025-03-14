const express = require("express");
const router = express.Router();


const data = [
  {
      "topic": "General Knowledge",
      "questions": [
          {
              "question": "What is the capital of France?",
              "options": ["Paris", "London", "Berlin", "Madrid"],
              "answer": "Paris"
          },
          {
              "question": "Who wrote 'Hamlet'?",
              "options": ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
              "answer": "William Shakespeare"
          },
          {
              "question": "Which planet is known as the Red Planet?",
              "options": ["Earth", "Mars", "Jupiter", "Saturn"],
              "answer": "Mars"
          },
          {
              "question": "Which ocean is the largest by surface area?",
              "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
              "answer": "Pacific Ocean"
          },
          {
              "question": "Who painted the Mona Lisa?",
              "options": ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
              "answer": "Leonardo da Vinci"
          }
      ]
  },
  {
      "topic": "Science",
      "questions": [
          {
              "question": "What is the chemical symbol for water?",
              "options": ["O2", "H2O", "CO2", "NaCl"],
              "answer": "H2O"
          },
          {
              "question": "How many bones are in the adult human body?",
              "options": ["206", "205", "210", "201"],
              "answer": "206"
          },
          {
              "question": "What gas do plants absorb from the atmosphere?",
              "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
              "answer": "Carbon Dioxide"
          },
          {
              "question": "What is the speed of light?",
              "options": ["299,792 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
              "answer": "299,792 km/s"
          },
          {
              "question": "What is the powerhouse of the cell?",
              "options": ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
              "answer": "Mitochondria"
          }
      ]
  },
  {
      "topic": "Technology",
      "questions": [
          {
              "question": "Who is the founder of Microsoft?",
              "options": ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
              "answer": "Bill Gates"
          },
          {
              "question": "What does CPU stand for?",
              "options": ["Central Processing Unit", "Computer Personal Unit", "Central Personal Unit", "Control Processing Unit"],
              "answer": "Central Processing Unit"
          },
          {
              "question": "Which programming language is used for web development?",
              "options": ["Python", "Java", "JavaScript", "C++"],
              "answer": "JavaScript"
          },
          {
              "question": "What is the latest version of HTML?",
              "options": ["HTML3", "HTML4", "HTML5", "HTML6"],
              "answer": "HTML5"
          },
          {
              "question": "What is the most popular operating system for mobile devices?",
              "options": ["Windows", "Android", "iOS", "Linux"],
              "answer": "Android"
          }
      ]
  },
  {
      "topic": "Mathematics",
      "questions": [
          {
              "question": "What is the value of Pi (π) to 2 decimal places?",
              "options": ["3.12", "3.14", "3.16", "3.18"],
              "answer": "3.14"
          },
          {
              "question": "What is 15 × 6?",
              "options": ["80", "85", "90", "95"],
              "answer": "90"
          },
          {
              "question": "What is the square root of 144?",
              "options": ["10", "11", "12", "14"],
              "answer": "12"
          },
          {
              "question": "What is 7 cubed (7³)?",
              "options": ["243", "343", "423", "523"],
              "answer": "343"
          },
          {
              "question": "What is the sum of angles in a triangle?",
              "options": ["90°", "180°", "270°", "360°"],
              "answer": "180°"
          }
      ]
  },
  {
      "topic": "History",
      "questions": [
          {
              "question": "Who was the first President of the United States?",
              "options": ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
              "answer": "George Washington"
          },
          {
              "question": "In which year did World War II end?",
              "options": ["1943", "1944", "1945", "1946"],
              "answer": "1945"
          },
          {
              "question": "Which ancient civilization built the pyramids?",
              "options": ["Romans", "Greeks", "Egyptians", "Mayans"],
              "answer": "Egyptians"
          },
          {
              "question": "Who discovered America?",
              "options": ["Marco Polo", "Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan"],
              "answer": "Christopher Columbus"
          },
          {
              "question": "Who was the first man to walk on the moon?",
              "options": ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
              "answer": "Neil Armstrong"
          }
      ]
  },
  {
      "topic": "Sports",
      "questions": [
          {
              "question": "How many players are there in a football (soccer) team?",
              "options": ["9", "10", "11", "12"],
              "answer": "11"
          },
          {
              "question": "Which country has won the most FIFA World Cups?",
              "options": ["Germany", "Argentina", "Brazil", "Italy"],
              "answer": "Brazil"
          },
          {
              "question": "In which sport would you perform a slam dunk?",
              "options": ["Tennis", "Basketball", "Baseball", "Golf"],
              "answer": "Basketball"
          },
          {
              "question": "What is the national sport of Japan?",
              "options": ["Baseball", "Sumo Wrestling", "Karate", "Judo"],
              "answer": "Sumo Wrestling"
          },
          {
              "question": "Which country hosted the 2022 FIFA World Cup?",
              "options": ["USA", "Qatar", "France", "Brazil"],
              "answer": "Qatar"
          }
      ]
  }
];

  
  


router.get("/quiz-data", (req, res) => {
  

  if (!data) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  res.json(data);
});

module.exports = router;
