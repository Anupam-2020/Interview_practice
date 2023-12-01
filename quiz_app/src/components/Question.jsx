import { useState } from "react";
import { questionList } from "../data/questionList";


const Questions = ({ currentQuest, setMarksScored, setCurrentQuest }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chooseOptions, setChooseOptions] = useState([]);
  const [score, setScore] = useState(0);


  const correctAnswer = () => {
    let ans = questionList[currentQuestion].correctAns;
    if (ans.length !== chooseOptions.length) return 0;
    for (let i = 0; i < ans.length; i++) {
      if (!chooseOptions.includes(ans[i])) return 0;
    }
    return 1;
  };

  const onNextHandler = () => {
    setCurrentQuestion((quest) => quest + 1);
    currentQuest(currentQuestion);
    console.log(chooseOptions);
    setChooseOptions([]);
    if (correctAnswer() === 1) {
      setScore((score) => score + 1);
    }
  };

  const onSubmitHandler = () => {
    setCurrentQuest((quest) => quest + 1)
    if (correctAnswer() === 1) {
        setScore((score) => score + 1);
    }
    // setCurrentQuest(questionList.length)
    setMarksScored(score);
    console.log(score);
  };

  const onPreviousHandler = () => {
    setCurrentQuestion((quest) => quest - 1);
  };

  const inputHandler = (i, e) => {
    setChooseOptions((options) => [...options, i + 1]);
  };

  return (
    <>
      <div className="question">
        <h2 style={{ marginRight: "20px" }}>{currentQuestion + 1}.</h2>
        <h2>{questionList[currentQuestion].question}</h2>
      </div>
      <div>
        {questionList[currentQuestion].options.map((option, i) => {
          return (
            <div className="options" key={i}>
              <input
                onClick={(e) => inputHandler(i, e)}
                type={"checkbox"}
                name={`Quest${i}`}
              />
              <p>{option}</p>
            </div>
          );
        })}
      </div>
      <div>
        {currentQuestion > 0 ? (
          <button onClick={onPreviousHandler}>Previous</button>
        ) : null}
        {currentQuestion === questionList.length - 1 ? (
          <button onClick={onSubmitHandler}>Submit</button>
        ) : (
          <button onClick={onNextHandler}>Next</button>
        )}
      </div>
    </>
  );
};

export default Questions;
