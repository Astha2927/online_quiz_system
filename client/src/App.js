import "./App.css";
import { useEffect , useState } from "react";

function App() {
  const [questions , setQuestions]=useState([]);
  const [currentIndex , setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  useEffect(()=> {
    fetch("http://localhost:5000/api/quiz")
    .then((res) => res.json())
    .then((data)=> {
      setQuestions(data);
    })
    .catch((error)=>{
      console.error("Error fetching quiz:",error);
    });
   }, []);

   return(
  <div className="app-container">
    <div className="heading-card">
    <h1 className="main-heading">Online Quiz Platform</h1>
    </div>
    <div className="quiz-card">

    {questions.length === 0 && <p>Loading questions...</p>}

    {questions.length > 0 && currentIndex < questions.length ? (
  <div className="question-card">
    <h3>{questions[currentIndex].question}</h3>

    {questions[currentIndex].options.map((option, index) => (
      <div key={index} className="option-item">
        <input
          type="radio"
          name="option"
          value={option}
          checked={selectedOption === option}
          onChange={() => setSelectedOption(option)}
        />
        {option}
      
    </div>
    
    ))}

    <button className="next-btn"
      onClick={() => {
        if (selectedOption === questions[currentIndex].correctAnswer) {
          setScore(prevScore => prevScore + 1);
        }
        setSelectedOption("");
        setCurrentIndex(currentIndex + 1);
      }}
      disabled={!selectedOption}
    >
      Next
    </button>
  </div>
) : (
  <div className="result-card">
    <h2>Quiz Completed!</h2>
    <h2>Your Score: {score} / {questions.length}</h2>

    <button
    onClick={()=> {
      setCurrentIndex(0);
      setScore(0);
      setSelectedOption("");
    }}
    >
      Restart Quiz
    </button>
  </div>
  )} 
</div>
</div>
   );
  }

  export default App;
