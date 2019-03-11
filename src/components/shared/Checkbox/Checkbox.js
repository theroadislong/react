import React from "react";
import "./Checkbox.scss";
// import cn from 'classnames';

class Checkbox extends React.Component {
	state = {
		isChecked: false
    };
    handleInputChange = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }
	render() {
		const { text } = this.props;
		return (
			<label className="check option">
				<input
					className="check__input"
					type="checkbox"
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
				/>
				<span className="check__box" />
				{text}
			</label>
		);
	}
}

Checkbox.defaultProps = {
	text: "default text"
};

export default Checkbox;
