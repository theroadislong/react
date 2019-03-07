import React from "react";
import "./Button.scss";
import cn from 'classnames';

class Button extends React.Component {
    render() {
        const { type, text, isComplete } = this.props;
        const btnClass = cn({
            'btn': true,
            [`btn--${type}`]: type,
            'btn--complete': isComplete
        });
        return (
            <button onClick={this.props.onButtonClick} className={btnClass}>{text}</button>
        )
    }
}

Button.defaultProps = {
    text: "default text"
  };

export default Button;