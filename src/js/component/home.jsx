import React, { useEffect, useState } from "react";


import Block from "./block.jsx";

//create your first component
const Home = () => {
	const [timer, setTimer] = useState(0);
	const [running, setRunning ] =useState(true); 

	// setInterval (()=>{
	// 	setTimer(timer+1);
	// },1000);

	useEffect(()=>{
		if(running){
	    const value =	setInterval (()=>{
			setTimer(timer=>timer+1);
		},1000)
		return ()=> clearInterval(value);
	}
	},[running]);

	useEffect(()=>{

	})

	return (
		<div className="d-flex container">
  			<button className="btn">SHOW</button>
			<Block time={Math.floor(timer/10000)%10}/>
			<Block time={Math.floor(timer/1000)%10}/>
			<Block time={Math.floor(timer/100)%10}/>
			<Block time={Math.floor(timer/10)%10}/>
			<Block time={Math.floor(timer)%10}/>
			<button className="btn" onClick={()=>{
				setTimer(0);
				setRunning(false);
			}
			}>RESET</button>
			<button className="btn" onClick={()=>{
				setRunning(!running)
			}}>{running?"PAUSE": "PLAY"}</button>	

		</div>				
		)};
		export default Home;
