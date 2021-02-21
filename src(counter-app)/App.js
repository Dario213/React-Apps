import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

const App = () => {
	const [counter, setCounter] = useState(0);
	const [color, setColor] = useState("");

	const handleIncrement = () => {
		setCounter(counter + 1);
	};

	useEffect(() => {
		document.title = `Click: ${counter}`;
		setColor(randomcolor);
	}, [counter]);

	return (
		<div>
			<button onClick={handleIncrement}>Increment</button>
			<h1 style={{ color: color }}>{counter}</h1>
		</div>
	);
};

export default App;
