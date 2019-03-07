import React, { Component } from "react";
import Header from "./routes/Header";
import Main from "./routes/Main";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Main />
			</React.Fragment>
		);
	}
}

export default App;
