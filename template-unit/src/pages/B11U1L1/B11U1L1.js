
import React, { Component } from "react";
import {Button, Grid} from 'semantic-ui-react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './B11U1L1.scss';

export default class B11U1L1 extends Component {

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<Grid style={{ backgroundColor: '#101010'}}>
				<Grid.Column widescreen={1} largeScreen={1} computer={1}  tablet={1} mobile={1} > </Grid.Column>
				
				<Grid.Column widescreen={14} largeScreen={14} computer={14}  tablet={14} mobile={14} > 
					<>
						<h2 className="lesson1title"><br></br>Lesson 1</h2>
					
						<Slider {...settings}>

						</Slider>
					</>
				
					<div class="center"> 
						<Button href='' download className="btn-download-uno">Download resources</Button>
					</div>
				</Grid.Column>

				<Grid.Column widescreen={1} largeScreen={1} computer={1} tablet={1} mobile={1} ></Grid.Column>
			</Grid>
		);
	}
}