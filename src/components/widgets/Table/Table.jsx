import React from "react";
import { TableRow } from "../TableRow/TableRow";
import "./Table.scss";
import Spinner from "../../shared/Spinner/Spinner";
import getData from "../../../api/api";

class Table extends React.Component {
	state = {
		data: [],
		isLoaded: false
	};
	componentDidMount() {
		setTimeout(()=> {
			getData().then(result =>
				this.setState({ data: result.data, isLoaded: true })
			);
		}, 1000)
	}
	render() {
		const { data, isLoaded } = this.state;

		if (!isLoaded) {
			return <Spinner />;
		} else {
			return (
				<table className="table">
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
					<tbody>
						{data && data.map(item => <TableRow key={item.id} data={item} />)}
					</tbody>
				</table>
			);
		}
	}
}

export default Table;
