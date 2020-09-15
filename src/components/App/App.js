import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import "./App.scss";
import data from "./data.json";

export default function App() {
	return (
		<div className="App">
			<Header />
			<Main
				services={data.services}
				workflow={data.workflow}
				certificates={data.certificates}
			/>
			<Footer />
		</div>
	);
}
