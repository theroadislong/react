import React from "react";
import './Select.scss'
import CustomSelect from "react-select";

class Select extends React.Component {
	state = {
		selectedOption: null
	};
	handleChange = selectedOption => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	};
	render() {
		const { selectedOption } = this.state;
        const { data } = this.props;

        let options = []
            data.forEach(item => {
                options.push({
                    value: item.name,
                    label: item.name
                });
            })

		return (
			<div className="select__wrapper">
				<CustomSelect
					value={selectedOption}
					onChange={this.handleChange}
					options={options}
				/>
                <p>Selected Option: {selectedOption && selectedOption.value}</p>
			</div>
		);
	}
}

export default Select;
