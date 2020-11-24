import React, { Component } from 'react';
import { StartJourney } from "../../actions/StartYourJourney.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class ActivityLevel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handelActivity = (activity) => {
        this.props.StartJourney(activity, 'activity');
        this.props.handleNext();
    }
    render() {
        return (
            <React.Fragment>
                <h3 style={{ fontFamily: 'Paytone One' }} class="text-3xl sm:text-5xl md:mt-0 md:mb-0 md:text-3xl leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
                WHAT  <span style={{color:'#D00F7F'}}> IS  YOUR ACTIVITY LEVEL ?</span>
                </h3>
                <section class="text-gray-700 body-font">
                    <div class="container px-5 py-4 md:py-10 mx-auto">
                        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div class="p-2 sm:w-1/2 w-full cursor-pointer" onClick={() =>this.handelActivity('I go for walks everyday to the refrigerator')}>
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Sedentary lifestyle- No activity.</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full cursor-pointer" onClick={() =>this.handelActivity('I walk and/or do a bit of yoga 2-3 times a week')}>
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Light activity.</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full cursor-pointer" onClick={() =>this.handelActivity("I work out but I don't have much of a structure")}>
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Moderate activity.</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full cursor-pointer" onClick={() =>this.handelActivity("I am rockstar at my gym (or other activity)")}>
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Vigorous activity.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

ActivityLevel.propTypes = {
    journeydata: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    journeydata: state.startjourney
});

export default connect(
    mapStateToProps,
    { StartJourney }
)(withRouter(ActivityLevel));
