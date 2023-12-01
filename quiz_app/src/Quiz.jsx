import { useState } from "react";
import Questions from "./components/Question";
import Results from "./components/Results";
import { questionList } from "./data/questionList";

const Quiz = () => {
  const [marksScored, setMarksScored] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div>
      {currentQuestion === questionList.length ? (
        <Results
          totalMarks={questionList.length}
          score={marksScored}
          setCurrentQuestion={setCurrentQuestion}
        />
      ) : (
        <Questions
          currentQuest={setCurrentQuestion}
          setMarksScored={setMarksScored}
          setCurrentQuest={setCurrentQuestion}
        />
      )}
    </div>
  );
};

export default Quiz;
