import React, { Component } from "react";
import Header from "./routes/Header";
import Main from "./routes/Main";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
			</div>
		);
	}
}

export default App;
