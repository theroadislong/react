import React from "react";
import "./Button.scss";
import cn from "classnames";

class Button extends React.Component {
	render() {
		const { type, text, withIcon, iconUrl } = this.props;
		const btnClass = cn({
			btn: true,
			[`btn--${type}`]: type,
			"btn--icon": withIcon
		});
		const iconStyles = {
			backgroundImage: `url(./assets/icons/${iconUrl})`
		};
		const button = (
			<button
				style={withIcon ? iconStyles : {}}
				onClick={this.props.onButtonClick}
				className={btnClass}
			>
				{text}
			</button>
		);
		return button;
	}
}

Button.defaultProps = {
	text: "default text"
};

export default Button;
