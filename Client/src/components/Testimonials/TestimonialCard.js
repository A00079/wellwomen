import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import image1 from '../../assets/img/testi1.jpg';
import image2 from '../../assets/img/bg2.jpg';
import image3 from '../../assets/img/bg3.jpg';
import '../Slider/reactslider.css';

const useStyles = makeStyles((theme) => ({
	screensContainer: {
		height: '460px',
		[theme.breakpoints.down("sm")]: {
			height: '535px'
		}
	},
	screenheight: {
		height: '100%',
	}
}));
const AutoplaySlider = withAutoplay(AwesomeSlider);

const SimpleSlider = () => {
	const classes = useStyles();
	return (
		<AutoplaySlider
			organicArrows={true}
			className={classes.screensContainer}
			play={true}
			bullets={false}
			cancelOnInteraction={false} // should stop playing on user interaction
			interval={4000}
		>
			<section class="text-gray-700 body-font" >
				<div class="container mx-auto flex px-0 py-4 md:mt-0 mt-0 md:flex-row flex-col items-center">
					<div class="lg:max-w-lg lg:w-full md:w-1/2 w-6/6 mb-6 md:mb-0" style={{margin: '0 auto'}}>
						<img class="object-cover md:pl-8 object-center rounded" alt="hero" src={image1} style={{margin: '0 auto',
    width: '25rem'}} />
					</div>
				</div>
			</section>
            <section class="text-gray-700 body-font" >
				<div class="container mx-auto flex px-0 py-4 md:mt-8 mt-0 md:flex-row flex-col items-center">
					<div class="lg:max-w-lg lg:w-full md:w-1/2 w-6/6 mb-6 md:mb-0" style={{margin: '0 auto'}}>
						<img class="object-cover md:pl-8 object-center rounded" alt="hero" src={image1} style={{margin: '0 auto',
    width: '25rem'}} />
					</div>
				</div>
			</section>
            {/* <section class="text-gray-700 body-font" >
				<div class="container mx-auto flex px-0 py-4 md:mt-8 mt-0 md:flex-row flex-col items-center">
					<div class="lg:max-w-lg lg:w-full md:w-1/2 w-6/6 mb-6 md:mb-0" style={{margin: '0 auto'}}>
						<img class="object-cover object-center rounded" alt="hero" src={image1} style={{margin: '0 auto',
    width: '25rem'}} />
					</div>
				</div>
			</section> */}
			{/* <div className='screenheight' data-src={image1} /> */}
			{/* <div className='screenheight' data-src={image2} /> */}
			{/* <div className='screenheight' data-src={image3} /> */}
		</AutoplaySlider>
	)
}

export default SimpleSlider;

