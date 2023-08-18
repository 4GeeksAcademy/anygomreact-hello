import React, {useState} from "react"; 

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [rojo, setRojo] = useState ("secondary")
	const [amarillo, setAmarillo] = useState ("secondary")
	const [verde, setVerde] = useState ("secondary")

	function cambiarRojo (){
		setRojo ("danger")
		setAmarillo ("secondary")
		setVerde ("secondary")
	}
	function cambiarAmarillo (){
		setAmarillo ("warning")
		setRojo ("secondary")
		setVerde ("secondary")
	}
	function cambiarVerde (){
		setVerde ("success")
		setAmarillo ("secondary")
		setRojo ("secondary")
	}
	return (
		<div>
			<h1 className="text-center mt-5">Semáforo</h1>
		<div className="text-center d-flex flex-column" style={{marginLeft:"580px"}}>
			
			<button type="button" class={"rounded-circle btn btn-" + rojo} onClick={cambiarRojo}
			style={{width:"200px", height: "200px", marginBottom:"10px"}}
			></button>
			<button type="button" class={"rounded-circle btn btn-" + amarillo} onClick={cambiarAmarillo}
			style={{width:"200px", height: "200px", marginBottom:"10px"}}
			></button>
			<button type="button" class={"rounded-circle btn btn-" + verde} onClick={cambiarVerde}
			style={{width:"200px", height: "200px", marginBottom:"10px"}}
			></button>
		</div>
		</div>
	);
};

export default Home;
