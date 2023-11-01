import { useState } from "react";
import Switch from "./Switch";

const Switches = () => {
	// Initialise tous les boutons "OFF" comme activés par défaut
	const [switch1, setSwitch1] = useState(false);
	const [switch2, setSwitch2] = useState(false);
	const [switch3, setSwitch3] = useState(false);

	const handleSwitch1Click = () => {
		// Inverse l'état lorsque le bouton est cliqué
		setSwitch1(!switch1);
	};

	const handleSwitch2Click = () => {
		setSwitch2(!switch2);
	};

	const handleSwitch3Click = () => {
		setSwitch3(!switch3);
	};

	const handleResetClick = () => {
		// Réinitialise tous les boutons en position "OFF"
		setSwitch1(false);
		setSwitch2(false);
		setSwitch3(false);
	};

	// Vérifie si tous les commutateurs sont sur ON pour activer le bouton "GO"
	const isGoActive = switch1 && switch2 && switch3;

	const handleGoClick = () => {
		// Code à exécuter lorsque le bouton "GO" est cliqué
		alert("GO button clicked!");
	};

	return (
		<>
			<div>
				<Switch on={switch1} off={!switch1} onClick={handleSwitch1Click} />
				<Switch on={switch2} off={!switch2} onClick={handleSwitch2Click} />
				<Switch on={switch3} off={!switch3} onClick={handleSwitch3Click} />
			</div>
			<button onClick={handleGoClick} className={!isGoActive ? "disabled" : ""}>
				{isGoActive ? "GO !" : "NO WAY !"}
			</button>
			<div className="reset-btn">
				<button onClick={handleResetClick}>Reset</button>
			</div>
		</>
	);
};

export default Switches;
