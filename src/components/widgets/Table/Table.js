import React from "react";
import { TableRow } from "../TableRow/TableRow";
import Button from "../../shared/Button/Button";
import getData from "../../../api/api";
import "./Table.scss";

class Table extends React.Component {
	state = {
		data: [],
		isLoaded: false
	};
	loadDataFromApi = () => {
		getData().then(result =>
			this.setState({ data: result.data, isLoaded: true })
		);
	}
	render() {
		const { data } = this.state;
		const tableHead = (
			<thead>
				<tr className="table__row">
					<th className="table__head">id</th>
					<th className="table__head">name</th>
					<th className="table__head">first brewed</th>
					<th className="table__head">abv</th>
					<th className="table__head">ibu</th>
					<th className="table__head">ph</th>
					<th className="table__head">srm</th>
					<th className="table__head">tagline</th>
				</tr>
			</thead>
		);
		const tableBody = (
			<tbody>
				{data && data.map(item => <TableRow key={item.id} data={item} />)}
			</tbody>
		);
		return (
			<React.Fragment>
				{!this.state.isLoaded && <Button text="Загрузить данные" type="blue" onButtonClick={this.loadDataFromApi}/>}
				{this.state.isLoaded && <table className="table">
					{tableHead}
					{tableBody}
				</table>}
			</React.Fragment>
		);
	}
}

export default Table;
