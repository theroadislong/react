import React from "react";
import Checkbox from "../../shared/Checkbox/Checkbox";
import Button from '../../shared/Button/Button';

class Elements extends React.Component {
	render() {
		return (
			<React.Fragment>
                <h2>Checkbox</h2>
				<Checkbox text="custom text" />
                <h2>Buttons</h2>
                <Button/>
                <div style={{height: 20}}></div>
                <Button text="another text" type="danger"/>
                <div style={{height: 20}}></div>
                <Button type="blue"/>
                <div style={{height: 20}}></div>
                <Button text="settings" withIcon iconUrl={'settings.svg'}/>
                <div style={{height: 20}}></div>
                <Button text="I'm ready for work" withIcon iconUrl={'launch.svg'}/>
			</React.Fragment>
		);
	}
}

export default Elements;
