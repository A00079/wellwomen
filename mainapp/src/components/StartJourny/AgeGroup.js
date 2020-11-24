import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StartJourney } from "../../actions/StartYourJourney.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import women20 from '../../assets/img/women20.png';
import women30 from '../../assets/img/women30.png';
import women40 from '../../assets/img/women40.png';
import women50 from '../../assets/img/women50.png';

const useStyles = makeStyles((theme) => ({
    appbarroot: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    dropdownLink: {
        marginLeft: '20px'
    },
    title: {
        flexGrow: 1,
    },
    cardroot: {
        maxWidth: 345,
    },
    cardcenter: {
        textAlign: '-webkit-center',
        '&:hover': {
            background: "rebeccapurple",
            transition: '1s'
        },
    },
    root: {
        width: '100%'
    },
    footer: {
        textAlign: 'center'
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const AgeGroup = (props) => {
    const classes = useStyles();

    const handelAge = (age) => {
        props.StartJourney(age, 'age');
        props.handleNext();
        console.log('Age', props)
    }

    return (
        <React.Fragment>
            <div class="py-2 bg-white">
                <h3  style={{ fontFamily: 'Paytone One' }} class="text-3xl sm:text-5xl md:mt-0 md:mb-16 md:text-3xl leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
                    WHAT'S <span style={{color:'#D00F7F'}}>  YOUR AGE GROUP?</span>
                </h3>
                {/* <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">

                    <div class="mx-auto">
                        <ul class="md:grid md:grid-cols-2 lg:grid-cols-4 md:col-gap-10 md:row-gap-10">
                            <li class=" bg-gray-100 p-24  md:p-16 text-center cursor-pointer" onClick={() => handelAge(20)}>
                                <div class="flex flex-col items-center">
                                    <div class="flex-shrink-0">
                                        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">
                                            <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <h4 class="text-lg leading-6 font-semibold text-gray-900">20</h4>
                                        <p class="mt-2 text-lg leading-6 font-semibold text-gray-900">
                                            Downloads
              </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10 md:mt-0 bg-gray-100 p-24  md:p-16 text-center cursor-pointer" onClick={() => handelAge(30)}>
                                <div class="flex flex-col items-center">
                                    <div class="flex-shrink-0">
                                        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">

                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <h4 class="text-lg leading-6 font-semibold text-gray-900">30</h4>
                                        <p class="mt-2 text-lg leading-6 font-semibold text-gray-900">
                                            Awards
              </p>
                                    </div>
                                </div>
                            </li>

                            <li class="mt-10 md:mt-0 bg-gray-100 p-24  md:p-16 text-center cursor-pointer" onClick={() => handelAge(40)}>
                                <div class="flex flex-col items-center">
                                    <div class="flex-shrink-0">
                                        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">

                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <h4 class="text-lg leading-6 font-semibold text-gray-900">40</h4>
                                        <p class="mt-2 text-lg leading-6 font-semibold text-gray-900">
                                            Likes
              </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10 md:mt-0 bg-gray-100 p-24  md:p-16 text-center cursor-pointer" onClick={() => handelAge(50)}>
                                <div class="flex flex-col items-center">
                                    <div class="flex-shrink-0">
                                        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">
                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <h4 class="text-lg leading-6 font-semibold text-gray-900">50</h4>
                                        <p class="mt-2 text-lg leading-6 font-semibold text-gray-900">
                                            Recomended
              </p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div> */}

                <section class="text-gray-700 body-font">
                    <div class="container px-5 py-0 mx-auto">

                        <div class="flex flex-wrap -m-4 text-center">
                            <div class="p-4 md:w-1/4 sm:w-1/2 w-1/2 cursor-pointer" onClick={() => handelAge(20)}>
                                <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                    <img  style={{height: '100px',width: '100px',objectFit: 'contain',margin: '0 auto'}}  src={women20} />
                                    {/* <svg class="h-6 w-6" viewBox="0 0 20 20" class="text-indigo-500 w-12 h-12 mb-3 inline-block" fill="currentColor">
                                                <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd" />
                                            </svg> */}
                                    <h2 class="title-font font-medium text-3xl text-gray-900">20</h2>
                                    {/* <p class="leading-relaxed">Downloads</p> */}
                                </div>
                            </div>
                            <div class="p-4 md:w-1/4 sm:w-1/2 w-1/2 cursor-pointer" onClick={() => handelAge(30)}>
                                <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                    {/* <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-indigo-500 w-12 h-12 mb-3 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                    </svg> */}
                                    <img  style={{height: '100px',width: '100px',objectFit: 'contain',margin: '0 auto'}}  src={women30} />

                                    <h2 class="title-font font-medium text-3xl text-gray-900">30</h2>
                                    {/* <p class="leading-relaxed">Awards</p> */}
                                </div>
                            </div>
                            <div class="p-4 md:w-1/4 sm:w-1/2 w-1/2 cursor-pointer" onClick={() => handelAge(40)}>
                                <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                    {/* <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-indigo-500 w-12 h-12 mb-3 inline-block" >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg> */}
                                    <img  style={{height: '100px',width: '100px',objectFit: 'contain',margin: '0 auto'}}  src={women40} />

                                    <h2 class="title-font font-medium text-3xl text-gray-900">40</h2>
                                    {/* <p class="leading-relaxed">Likes</p> */}
                                </div>
                            </div>
                            <div class="p-4 md:w-1/4 sm:w-1/2 w-1/2 cursor-pointer" onClick={() => handelAge(50)}>
                                <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                    {/* <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-indigo-500 w-12 h-12 mb-3 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg> */}
                                    <img  style={{height: '100px',width: '100px',objectFit: 'contain',margin: '0 auto'}}  src={women50} />
                                    <h2 class="title-font font-medium text-3xl text-gray-900">50</h2>
                                    {/* <p class="leading-relaxed">Recomended</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}

AgeGroup.propTypes = {
    journeydata: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    journeydata: state.startjourney
});

export default connect(
    mapStateToProps,
    { StartJourney }
)(withRouter(AgeGroup));