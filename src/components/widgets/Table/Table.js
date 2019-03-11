import React from "react";
import { TableRow } from "../TableRow/TableRow";
import Button from "../../shared/Button/Button";
import "./Table.scss";

class Table extends React.Component {
	state = {
		tableShow: false
	};
	handleClick = () => {
		this.setState({
			tableShow: !this.state.tableShow
		});
	};
	render() {
		const data = this.props.data;
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
		const button = (
			<Button
				text={this.state.tableShow ? "Hide table" : "Show table"}
				type="blue"
				onButtonClick={this.handleClick}
			/>
		);
		return (
			<React.Fragment>
				{this.state.tableShow}
				{button}
				{this.state.tableShow && (
					<table className="table">
						{tableHead}
						{tableBody}
					</table>
				)}
			</React.Fragment>
		);
	}
}

export default Table;
