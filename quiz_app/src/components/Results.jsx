const Results = ({ score, totalMarks, setCurrentQuestion }) => {
    return (
      <div>
        <div>Total Score: {totalMarks}</div>
        <div>Total Marks scored: {score}</div>
        <button onClick={() => setCurrentQuestion(0)}>Reset</button>
      </div>
    );
  };
  
  export default Results;
  