
import React, { Component } from "react"
import {Button, Grid} from 'semantic-ui-react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './Lesson.scss'

const Lesson = (props) => {
	
	let { title, slides, pdfURL, style} = props

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	return (
		<Grid style={{ backgroundColor: '#101010'}}>

			<Grid.Column widescreen={1} largeScreen={1} computer={1} tablet={1} mobile={1}></Grid.Column>
				
			<Grid.Column widescreen={14} largeScreen={14} computer={14} tablet={14} mobile={14}> 
				<h2 className="lessontitle">
					<br></br>
					{title}
				</h2>

				{slides && slides.length > 0 &&
					<Slider {...settings}>
						{slides.map(slide => 
							<div>
								<img src={slide} alt="boohoo" className="img-responsive"/>
								<br/>
							</div>
						)}
					</Slider>
				}

				{pdfURL && pdfURL != "null" &&
					<div class="center"> 
						<Button href={pdfURL} download className="btn-download-uno">Download resources</Button>
					</div>
				}
			</Grid.Column>
	
			<Grid.Column widescreen={1} largeScreen={1} computer={1} tablet={1} mobile={1}></Grid.Column>
		</Grid>
	)
}


export default Lesson 