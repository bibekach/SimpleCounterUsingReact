import React from "react";


//create your first component
const Block = ({ time }) => {
	return (
		<div className="container">
			<div className="bg-dark text-white text-centre">
			 {time}
			</div>
		</div>
	);
};

export default Block;
