import React, { Component } from 'react';
import 'react-awesome-slider/dist/styles.css';
import {  withStyles,makeStyles } from '@material-ui/core/styles';
import ReactCardCarousel from "react-card-carousel";
import feedback from '../../assets/img/feedback.png';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './cardslider.css';

const useStyles = makeStyles((theme) => ({
	screensContainer: {
    borderBottomLeftRadius: '50% 20%',
    borderBottomRightRadius: '50% 20%',
		background: '#F9AE08 !important',
    height: '500px',
		[theme.breakpoints.down("sm")]: {
      height: '650px',
		}
	}
}));
const AutoplaySlider = withAutoplay(AwesomeSlider);
const CardCarousel = () => {
	const classes = useStyles();

    return (
      <React.Fragment>
        <div className="mt-24 md:mt-40">
          <h1 style={{background :'#F9AE08',color:'#ffffff'}} className="sm:text-3xl mb-0 md:mb-0 text-4xl md:text-6xl font-medium title-font text-white-600" align="center">OUR WORK</h1>
          <div>
            <AutoplaySlider
              organicArrows={true}
              className={classes.screensContainer}
              play={true}
              bullets={false}
              cancelOnInteraction={false} // should stop playing on user interaction
              interval={3000}
            >

              <div className='screenheight'>

                <div className="max-w-md md:max-w-5xl">
                  <div className="bg-white mx-8 shadow-xl rounded-lg overflow-hidden md:flex md:px-0">
                    <div className="bg-cover bg-bottom h-56 md:h-auto md:w-56" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)' }}>
                    </div>
                    <div>
                      <div className="p-4 md:p-5">
                        <p className="font-bold text-xl md:text-2xl">Happy lives</p>
                        <p className="text-gray-700 md:text-lg">While losing weight is tough for anyone, there are several factors that can make it extra challenging for women. </p>
                      </div>
                      <div className="p-4 md:p-5 bg-gray-100">
                        <div className="sm:flex sm:justify-between sm:items-center">
                          <div>
                            <div className="text-lg text-gray-700"><span className="text-gray-900 font-bold"><img src={feedback} style={{
                              display: 'inline-block',
                              width: '24px'
                            }} /></span>Feed Backs*</div>
                            <div className="flex items-center">
                              <div className="flex inline-flex -mx-px">
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                              </div>
                              <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">99% reviews</div>
                            </div>
                          </div>
                          <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">Start Your Journey</button>
                        </div>
                        <div className="mt-3 sm:pt-2 pb-8 md:pb-2  text-gray-600 text-sm md:text-base">“Health is a state of complete harmony of the body, mind and spirit."</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className='screenheight'>

                <div className="max-w-md md:max-w-5xl">
                  <div className="bg-white mx-8 shadow-xl rounded-lg overflow-hidden md:flex md:px-0">
                    <div className="bg-cover bg-bottom h-56 md:h-auto md:w-56" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)' }}>
                    </div>
                    <div>
                      <div className="p-4 md:p-5">
                        <p className="font-bold text-xl md:text-2xl">Happy lives</p>
                        <p className="text-gray-700 md:text-lg">While losing weight is tough for anyone, there are several factors that can make it extra challenging for women. </p>
                      </div>
                      <div className="p-4 md:p-5 bg-gray-100">
                        <div className="sm:flex sm:justify-between sm:items-center">
                          <div>
                            <div className="text-lg text-gray-700"><span className="text-gray-900 font-bold"><img src={feedback} style={{
                              display: 'inline-block',
                              width: '24px'
                            }} /></span>Feed Backs*</div>
                            <div className="flex items-center">
                              <div className="flex inline-flex -mx-px">
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                              </div>
                              <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">99% reviews</div>
                            </div>
                          </div>
                          <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">Start Your Journey</button>
                        </div>
                        <div className="mt-3 sm:pt-2 pb-8 md:pb-2  text-gray-600 text-sm md:text-base">“Health is a state of complete harmony of the body, mind and spirit."</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='screenheight'>

                <div className="max-w-md md:max-w-5xl">
                  <div className="bg-white mx-8 shadow-xl rounded-lg overflow-hidden md:flex md:px-0">
                    <div className="bg-cover bg-bottom h-56 md:h-auto md:w-56" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)' }}>
                    </div>
                    <div>
                      <div className="p-4 md:p-5">
                        <p className="font-bold text-xl md:text-2xl">Happy lives</p>
                        <p className="text-gray-700 md:text-lg">While losing weight is tough for anyone, there are several factors that can make it extra challenging for women. </p>
                      </div>
                      <div className="p-4 md:p-5 bg-gray-100">
                        <div className="sm:flex sm:justify-between sm:items-center">
                          <div>
                            <div className="text-lg text-gray-700"><span className="text-gray-900 font-bold"><img src={feedback} style={{
                              display: 'inline-block',
                              width: '24px'
                            }} /></span>Feed Backs*</div>
                            <div className="flex items-center">
                              <div className="flex inline-flex -mx-px">
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="" viewBox="0 0 14 14">
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                              </div>
                              <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">99% reviews</div>
                            </div>
                          </div>
                          <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">Start Your Journey</button>
                        </div>
                        <div className="mt-3 sm:pt-2 pb-8 md:pb-2  text-gray-600 text-sm md:text-base">“Health is a state of complete harmony of the body, mind and spirit."</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AutoplaySlider>
          </div>
        </div>
      </React.Fragment>
    );
}

export default CardCarousel;
