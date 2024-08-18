import React, { useState } from "react";
const Home = () => {
	// let [number,setNumber]=useState(0)
	const [btnColor, setBtnColor] = useState("")
	
	const lightColor=(color)=> {
		setBtnColor(color);
	}
	console.log(btnColor);
	
	return (
		<div className="container d-flex justify-content-center p-3">
			<div className="d-flex flex-column align-items-center justify-content-center bg-black rounded-4">
				<button type="button" className="btn btn-danger m-2 p-5 rounded-circle" style={{ boxShadow: btnColor === "btn-danger" ? "0px 0px 40px 15px red" : "none" }} onClick={() => { lightColor("btn-danger") }}></button>
				<button type="button" className="btn m-2 btn-warning p-5 rounded-circle" style={{ boxShadow: btnColor === "btn-warning" ? "0px 0px 40px 15px yellow" : "none" }} onClick={() => { lightColor("btn-warning") }}></button>
				<button type="button" className="btn m-2 btn-success p-5 rounded-circle" style={{ boxShadow: btnColor === "btn-success" ? "0px 0px 40px 15px green" : "none" }} onClick={() => { lightColor("btn-success") }}></button>
			</div>
		</div>
	);
};

export default Home;
