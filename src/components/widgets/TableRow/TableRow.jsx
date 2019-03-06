import React from "react";
import PropTypes from "prop-types";
import { table__row, table__cell } from "../Table/Table.module.scss";

export const TableRow = ({ data }) => {
	const { id, name, first_brewed, abv, ibu, ph, srm, tagline } = data;
	return (
		<tr className={table__row}>
			<td className={table__cell}>{id}</td>
			<td className={table__cell}>{name}</td>
			<td className={table__cell}>{first_brewed}</td>
			<td className={table__cell}>{abv}</td>
			<td className={table__cell}>{ibu}</td>
			<td className={table__cell}>{ph}</td>
			<td className={table__cell}>{srm}</td>
			<td className={table__cell}>{tagline}</td>
		</tr>
	);
};

TableRow.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		first_brewed: PropTypes.string,
		abv: PropTypes.number,
		ibu: PropTypes.number,
		ph: PropTypes.number,
		srm: PropTypes.number,
		tagline: PropTypes.string
	})
};
