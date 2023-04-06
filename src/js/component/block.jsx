import React from "react";


//create your first component
 const Block = ({time}) => {
	return (
		    <div className="bg-dark text-white text-centre">
                {time}
            </div>
	);
};

export default Block;
