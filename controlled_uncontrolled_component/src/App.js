import './App.css';
import { useRef } from 'react';
// import User from './User';

function App() {
  const input = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input.current.value);
    input.current.value = "1000";
    input.current.style.color = "blue";
  }

  return (
    <div className="App">
      <h3>Name: </h3>
      <form onSubmit={submitHandler}>
        <h2>Form Submission</h2>
        <input type='text' placeholder='Enter number' ref={input}/>
        <button type='submit'>Submit</button>
      </form>
      {/* <User ref={input}/> */}
    </div>
  );
}

export default App;