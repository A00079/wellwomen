import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import ReactSlider from "./TestimonialCard.js";

import testimonial from '../../assets/img/testi1.jpg';
import {
    Container,
    Grid
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    screensContainer: {
        height: '460px',
        [theme.breakpoints.down("sm")]: {
            height: '620px'
        }
    },
    screenheight: {
        height: '100%',
    }
}));
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Testimonials = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <h1 id="testimonials" style={{ color: '#4e6073', textAlign: 'center',fontFamily: 'Paytone One' }} className="sm:text-3xl mt-24 text-3xl md:text-4xl md:mt-16 font-extrabold title-font mb-4 text-gray-900">TESTI<span class="text-indigo-600" style={{color:'#D00F7F'}}>MONIALS</span></h1>
            <ReactSlider />

            {/* <AutoplaySlider
                organicArrows={false}
                className={classes.screensContainer}
                play={true}
                bullets={false}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
            >

                <div class="py-0 md:py-24 bg-white">
                    <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">



                        <div class="mt-8 md:mt-2">

                            <div class="sm:flex items-center">
                                <img style={{ margin: '0 auto' }} class=" sm:w-48 sm:h-48 w-34 h-34 md:w-48 md:h-48 rounded-full sm:ml-10" src={testimonial} alt="Avatar of Jonathan Reinink" />

                                <div class="text-left">
                                    <div class="mb-4 text-gray-500  md:ml-24">
                                        <svg height="35px" class="mb-2" fill="#5a67d8" version="1.1" id="Capa_1" xmlns="" x="0px" y="0px"
                                            viewBox="0 0 32 32" >
                                            <g>
                                                <g id="right_x5F_quote">
                                                    <g>
                                                        <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                                                        <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p class="mt-2 text-base leading-6">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                        <div class="text-sm mt-5">
                                            <a href="#" class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Jonathan Reinink</a>
                                            <p>CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoplaySlider> */}
        </React.Fragment>
    )
}

export default Testimonials;

