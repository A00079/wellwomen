import React, { useState } from 'react';
import Header from "./PricingHeader.js";
import UserHeaderLinks from "./UserPricingHeader.js";
import ReactCardCarousel from "react-card-carousel";
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    priceCards: {
        padding: '0.5rem',
        backgroundColor: 'rgba(255,255,255)',
        cursor: 'pointer',
        width: '20rem',
        display: 'inline-block',
        [theme.breakpoints.down("sm")]: {
            width: '16rem',
        }
    },
}));

const Pricing = () => {
    const classes = useStyles();
    const [activePlan, setactivePlan] = useState('popular');
    const handelActivePlan = (plan) => {
        setactivePlan(plan)
    }
    return (
        <React.Fragment>
            <Header
                brand="Curvicare"
                rightLinks={<UserHeaderLinks />}
                fixed
                color="white"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
            />
            <section class="mt-8 text-gray-700 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-32">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                        <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                            <button class="py-1 px-4 focus:outline-none">Annually</button>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', marginTop: '6rem', left: '50%' }}>
                        <ReactCardCarousel disable_box_shadow={false} autoplay={true} autoplay_speed={2900}>
                            <div className={classes.priceCards} onClick={() => handelActivePlan('free')}>
                                <div
                                    className={activePlan === 'popular' ? 'h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden' : 'h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden'}
                                >
                                    <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">MOST POPULAR</span>
                                    <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                                    <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span>&#x20B9; 12,900</span>
                                        <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                    </h1>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Weight Loss Program for 25 Weeks
          </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Save 33% On 25 Weeks Of Diet Plan
          </p>
                                    <a href='https://www.instamojo.com/wellwomanclinic/'>
                                        <button
                                            style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }}
                                            className={activePlan === 'popular' ? 'flex items-center mt-auto text-white  border-0 py-2 px-4 w-full focus:outline-none rounded' : 'flex items-center mt-auto text-white  border-0 py-2 px-4 w-full focus:outline-none  rounded'}
                                        >Get Plan
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of such profitable plans.</p>
                                </div>
                            </div>
                            <div className={classes.priceCards} onClick={() => handelActivePlan('free')}>
                                <div
                                    className={activePlan === 'popular' ? 'h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden' : 'h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden'}
                                >
                                    <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">Average</span>
                                    <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                                    <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span>&#x20B9; 5,900</span>
                                        <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                    </h1>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Weight Loss Program for 8 Weeks
          </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>8 Week Weight Loss Program
          </p>
                                    <a href='https://www.instamojo.com/wellwomanclinic/'>
                                        <button
                                            style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }}
                                            className={activePlan === 'free' ? 'flex items-center mt-auto text-white  border-0 py-2 px-4 w-full focus:outline-none  rounded' : 'flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded'}
                                        >Get Plan
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of such profitable plans.</p>
                                </div>
                            </div>

                            <div className={classes.priceCards} onClick={() => handelActivePlan('free')}>
                                <div
                                    className={activePlan === 'popular' ? 'h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden' : 'h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden'}
                                >
                                    <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">Business</span>
                                    <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
                                    <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span>&#x20B9; 8,900</span>
                                        <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                    </h1>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Weight Loss Program for 16 Weeks
          </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Save 25% On 16 Weeks Of Diet Plan
          </p>
                                    <a href='https://www.instamojo.com/wellwomanclinic/'>
                                        <button
                                            style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }}
                                            className={activePlan === 'BUSINESS' ? 'flex items-center mt-auto text-white  border-0 py-2 px-4 w-full focus:outline-none  rounded' : 'flex items-center mt-auto text-white  border-0 py-2 px-4 w-full focus:outline-none  rounded'}
                                        >Get Plan
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of such profitable plans.</p>
                                </div>
                            </div>
                        </ ReactCardCarousel>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Pricing;