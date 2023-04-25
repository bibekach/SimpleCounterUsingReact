import React, { useEffect, useState } from "react";


import Block from "./block.jsx";

//create your first component
const Home = () => {
	const [timer, setTimer] = useState(0);
	const [running, setRunning] = useState(true);
	const [ showButton, setShowButton]= useState(true);

	// setInterval (()=>{
	// 	setTimer(timer+1);
	// },1000);

	useEffect(() => {
		if (running) {
			const value = setInterval(() => {
				setTimer(timer => timer + 1);
			}, 1000)
			return () => clearInterval(value);
		}
	}, [running]);

	useEffect(() => {

	})

	return (
		<div className="container mx-auto">
			<div className="vh-100 text-center row align-items -center justify-content-center">
				<div>
					<button className="btn btn-primary mx-auto" onClick={() => {
						
						setShowButton(!showButton);}} >{!showButton?"SHOW":"HIDE"}</button>
					<div className="text-center row row-cols-6 g-2 mt-3">
						<Block time={Math.floor(timer / 100000) % 10} />
						<Block time={Math.floor(timer / 10000) % 10} />
						<Block time={Math.floor(timer / 1000) % 10} />
						<Block time={Math.floor(timer / 100) % 10} />
						<Block time={Math.floor(timer / 10) % 10} />
						<Block time={Math.floor(timer) % 10} />
					</div>
					{showButton?<div><button className="btn btn-primary mx-auto mt-3 me-3" onClick={() => {
						setTimer(0);
						setRunning(false);
					}}>RESET</button>
					<button className="btn btn-primary mx-auto mt-3 me-3" onClick={() =>{
						setRunning(!running)
					}}>{running ? "PAUSE" : "PLAY"}</button></div>:null}
				</div>
			</div>
		</div>
	)
};
export default Home;
