import { useState } from "react";
import { questionList } from "../data/questionList";


const Questions = ({ currentQuest, setMarksScored, setCurrentQuest }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chooseOptions, setChooseOptions] = useState([]);
  const [score, setScore] = useState(0);

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
    if (correctAnswer() === 1) {
      setScore((score) => score + 1);
    }
    setOption1(false)
    setOption2(false)
    setOption3(false)
    setOption4(false)
  };

  const onSubmitHandler = () => {
    setCurrentQuest((quest) => quest + 1)
    if (correctAnswer() === 1) {
        setScore((score) => score + 1);
    }
    setMarksScored(score);
    console.log(score);
  };

  const onPreviousHandler = () => {
    setCurrentQuestion((quest) => quest - 1);
  };

  // const inputHandler = (i, e) => {
  //   setChooseOptions((options) => [...options, i + 1]);
  // };

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


        <div className="options">
          <input type="checkbox" checked={option1} onChange={() => {
            setChooseOptions((options) => [...options, 1]);
            setOption1(!option1);
          }}/>
          <p>{questionList[currentQuestion].options[0]}</p>
        </div>
        
        <div className="options">
          <input type="checkbox" checked={option2} onChange={() => {
            setChooseOptions((options) => [...options, 2]);
            setOption2(!option2);
          }}/>
          <p>{questionList[currentQuestion].options[1]}</p>
        </div>

        <div className="options">
          <input type="checkbox" checked={option3} onChange={() => {
            setChooseOptions((options) => [...options, 3]);
            setOption3(!option3);
          }}/>
          <p>{questionList[currentQuestion].options[2]}</p>
        </div>

        <div className="options">
          <input type="checkbox" checked={option4} onChange={() => {
            setChooseOptions((options) => [...options, 4]);
            setOption4(!option4);
          }}/>
          <p>{questionList[currentQuestion].options[3]}</p>
        </div>
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