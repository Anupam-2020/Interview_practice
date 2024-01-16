import { useState } from "react";

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <HOCRed component={Counter}/>
      <HOCGREEN component={Counter}/>
    </div>
  );
}

function HOCRed(props) {
  return (
    <div style={{background: 'red'}}>
      <props.component />
    </div>
  )
}

const HOCGREEN = (props) => {
  return (
    <div style={{background: '#879a7c'}}>
      <props.component />
    </div>
  )
}

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div
    style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default App;
