import React from 'react'

const Options = ({setChooseOptions, option1, option2, option3, option4, currentQuestion, questionList, setOption1, setOption2, setOption3, setOption4}) => {
  return (
    <div>
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
  )
}

export default Options