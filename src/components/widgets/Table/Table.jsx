import React from "react";
import axios from "axios";
import { TableRow } from "../TableRow/TableRow";
import { table, table__row, table__head } from "./Table.module.scss";


class Table extends React.Component {
	state = {
		data: null
	};
	componentDidMount() {
		axios
			.get("https://api.punkapi.com/v2/beers")
				.then(result => this.setState({ data: result.data }))
				.catch(error => console.log(error));
	}
	render() {
		const { data } = this.state;
		return (
			<table className={table}>
				<thead>
					<tr className={table__row}>
						<th className={table__head}>id</th>
						<th className={table__head}>name</th>
						<th className={table__head}>first brewed</th>
						<th className={table__head}>abv</th>
						<th className={table__head}>ibu</th>
						<th className={table__head}>ph</th>
						<th className={table__head}>srm</th>
						<th className={table__head}>tagline</th>
					</tr>
				</thead>
				<tbody>
					{data && data.map(item => <TableRow key={item.id} data={item} />)}
				</tbody>
			</table>
		);
	}
}

export default Table;
