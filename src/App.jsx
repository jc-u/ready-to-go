import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Switches from "./components/Switches";

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<Switches />
			</div>
			<Footer />
		</>
	);
}

export default App;
