import React, { useEffect, useState } from "react";


import Block from "./block.jsx";

//create your first component
const Home = () => {
	const [timer, setTimer] = useState(0)

	// setInterval (()=>{
	// 	setTimer(timer+1);
	// },1000);

	useEffect(()=>{
		setInterval (()=>{
			setTimer(timer=>timer+1);
		},1000)

	},[])

	return (
		<div className="d-flex container">
  			<Block time={timer}/>
		  	<Block time={timer}/>
		  	<Block time={timer}/>
		  	<Block time={timer}/>
		  	<Block time={timer}/>
			<Block time={timer}/>
		</div>
		
		
	);
};

export default Home;
