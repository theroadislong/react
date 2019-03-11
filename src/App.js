import React, { Component } from "react";
import Header from "./routes/Header";
import Main from "./routes/Main";
import getData from "./api/api";


class App extends Component {
	state = {
		data: [],
		isLoaded: false
	};
	componentDidMount() {
		getData().then(result =>
			this.setState({ data: result.data, isLoaded: true })
		);
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				<Main data = {this.state.data}/>
			</React.Fragment>
		);
	}
}

export default App;
