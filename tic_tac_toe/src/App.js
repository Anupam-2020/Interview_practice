import { useRef, useState } from "react";
import "./App.css";

let data = ["", "", "", "", "", "", "", "", ""];

function App() {

	const [count, setCount] = useState(0);
	const [lock, setLock] = useState(false);
  	const [winner, setWinner] = useState(null);
	let box1 = useRef(null);
	let box2 = useRef(null);
	let box3 = useRef(null);

	let box_array = [box1, box2, box3];

	function toggle(e, num) {
		if(lock) {
			return 0;
		}

		if(count % 2 === 0) { 
			e.target.innerHTML = "X";
			data[num] = "X";
			setCount(count => count+1)
		} else { 
			e.target.innerHTML = "O";
			data[num] = "O";
			setCount(count => count+1)
		}
    checkWin()

    console.log(data)
	}

  	const checkWin = () => {
    	if(data[0] === data[1] && data[1] === data[2] && data[2]!== "") {
      		won(data[0]);
    	} else if(data[0] === data[4] && data[4] === data[7] && data[7] !== "") {
			won(data[0]);
		}
  	}

	const won = (winner) => {
		setLock(true);
		setWinner(winner);
	}

	const reset = () => {
		setLock(false);
		data = ["", "", "", "", "", "", "", "", ""];
		console.log(data);
		setWinner(null);
		box_array.map((e) => e.current.innerHTML = "")
	}

	return (
		<div className="container">
			<h2>Tic Tac Toe Game: {winner}</h2>
			<div className="row1">
				<div className="boxes" onClick={(e) => toggle(e, 0)} ref={box1}></div>
				<div className="boxes" onClick={(e) => toggle(e, 1)} ref={box2}></div>
				<div className="boxes" onClick={(e) => toggle(e, 2)} ref={box3}></div>
			</div>
			<div className="row2">
				<div className="boxes" onClick={(e) => toggle(e, 3)}></div>
				<div className="boxes" onClick={(e) => toggle(e, 4)}></div>
				<div className="boxes" onClick={(e) => toggle(e, 5)}></div>
			</div>
			<div className="row3">
				<div className="boxes" onClick={(e) => toggle(e, 6)}></div>
				<div className="boxes" onClick={(e) => toggle(e, 7)}></div>
				<div className="boxes" onClick={(e) => toggle(e, 8)}></div>
			</div>
			<button onClick={reset}>Reset</button>
		</div>
	);
}

export default App;
