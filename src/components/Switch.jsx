const Switch = ({ on, off, onClick }) => {
	return (
		<div className="switch">
			<div className={`switch-on ${on ? "active" : ""}`} onClick={onClick}>
				<p>ON</p>
			</div>
			<div className={`switch-off ${off ? "active" : ""}`} onClick={onClick}>
				<p>OFF</p>
			</div>
		</div>
	);
};

export default Switch;
