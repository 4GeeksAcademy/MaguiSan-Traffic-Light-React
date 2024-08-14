import React, { useState } from "react";
const Home = () => {
	// let [number,setNumber]=useState(0)
	const [btnColor,setBtnColor] = useState("btn-danger")
	
	function ligthColor() {
		if (btnColor==="btn-danger") {
			console.log("holi");
			setBtnColor("")
		}
	}

	// function ligthColor(index) {
	// 	if (index !== btnColor.length) {
	// 		console.log("holi");
	// 	}
	// }
	console.log(btnColor);
	
	return (
		<div className="container-fluid p-3 w-50">
			{/* <div className="container bg-dark d-flex flex-column">h</div> */}
			<div className="container-fluid w-25 d-flex flex-column text-center bg-black rounded-4">
				<button type="button" className={"btn btn-danger m-1 rounded-circle"} onClick={ligthColor}></button>
				<button type="button" className={"btn btn-success m-1 rounded-circle"} onClick={ligthColor}></button>
				<button type="button" className={"btn btn-success m-1 rounded-circle"} onClick={ligthColor}></button>
				{/* {
					btnColor.map((item, index) => (
						<button key={index} type="button" className="btn btn-success m-1 rounded-circle" onClick={ligthColor}>{item}</button>
					))
				} */}
			</div>
		</div>
	);
};

export default Home;
