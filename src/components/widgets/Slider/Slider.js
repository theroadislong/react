import React from "react";
import Slick from "react-slick";
import prepareData from '../../../jshelpers/prepareData';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

class Slider extends React.Component {
	render() {
		const { data } = this.props;
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3
		};
		return (
				<div className="wrapper">
				<h1>Top 9 beers by attenuation_level</h1>
					<Slick {...settings}>
						{data &&
							prepareData(data).slice(0, 9).map(beer => (
								<div key={beer.id}>
									<img
										className="slider__img"
										src={beer.image_url}
										alt={beer.name}
									/>
								</div>
							))}
					</Slick>
				</div>
		);
	}
}

export default Slider;
