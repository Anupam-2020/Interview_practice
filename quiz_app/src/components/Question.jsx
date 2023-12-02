import { useState } from "react";
import { questionList } from "../data/questionList";
import Options from "./Options";

let response = [null, null, null, null, null]; // keeps record of correct/incorrect response

const Questions = ({ currentQuest, setMarksScored, setCurrentQuest }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // keeps the count of current question.
  const [chooseOptions, setChooseOptions] = useState([]); // stores responses for each question in array.
  const [score, setScore] = useState(0); // update score

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);

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
    if (correctAnswer() === 1 && response[currentQuestion] === null) {
      setScore((score) => score + 1);
      response[currentQuestion] = true;
    } else {
      response[currentQuestion] = null;
    }
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);

    // console.log(score)
  };

  const onSubmitHandler = () => {
    setCurrentQuest((quest) => quest + 1);
    if (correctAnswer() === 1 && response[currentQuestion] === null) {
      setScore((score) => score + 1);
    }
    setMarksScored(score);
    console.log(score);
    console.log(response);
  };

  const onPreviousHandler = () => {
    setCurrentQuestion((quest) => quest - 1);

    if (response[currentQuestion - 1] === true) {
      setScore((score) => score - 1);
      response[currentQuestion - 1] = null;
    }

    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);
  };

  return (
    <>
      <div className="question">
        <h2 style={{ marginRight: "20px" }}>{currentQuestion + 1}.</h2>
        <h2>{questionList[currentQuestion].question}</h2>
      </div>
      <div>
        {/* {questionList[currentQuestion].options.map((option, i) => {
          return (
            <div className="options" key={i}>
              <input
                checked={true}
                onChange={(e) => inputHandler(i, e.target.innerHTML)}
                type={"checkbox"}
                name={`Quest${i}`}
              />
              <p>{option}</p>
            </div>
          );
        })} */}

        <Options
          setChooseOptions={setChooseOptions}
          option1={option1}
          option2={option2}
          option3={option3}
          option4={option4}
          currentQuestion={currentQuestion}
          questionList={questionList}
          setOption1={setOption1}
          setOption2={setOption2}
          setOption3={setOption3}
          setOption4={setOption4}
        />
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