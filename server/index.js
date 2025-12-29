require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.send("Server is running");
});

app.use("/api/auth", authRoutes);

app.get("/api/test",(req,res) => {
    res.json({message:"Backend API is working"});
});

const PORT = 5000;
const quizQuestions = [
    {
        id: 1,
        question:"What does HTML stands for?" ,
        options:[
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyperlinks Text Markup Language",
            "Home Tool Markup Language"
        ],
        correctAnswer:"Hyper Text Markup Language"
    },
    {
        id: 2,
        question:"Which language is used for styling web pages?" ,
        options:[
            "HTML",
            "JQuery",
            "CSS",
            "XML"
        ],
        correctAnswer:"CSS"
    },
    {
        id: 3,
        question:"Which is used for frontend development?" ,
        options:[
            "Node.js",
            "MongoDB",
            "React",
            "Express"
        ],
        correctAnswer:"React"
    },
];

app.get("/api/quiz" , (req, res) => {
    res.json(quizQuestions);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`);
});