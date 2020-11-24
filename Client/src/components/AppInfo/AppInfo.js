import React, { Component } from 'react';
import downloads from '../../assets/img/downloads.png';
import awards from '../../assets/img/awards.png';
import likes from '../../assets/img/likes.png';
import Recomended from '../../assets/img/Recomended.png';
import ReRender from './Rerender.js';

class AppInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                {/* <section id="stats" className="text-gray-700 body-font">
                    <div className="container px-5 py-16 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 style={{ color: '#4e6073' }} className="sm:text-3xl text-3xl md:text-5xl md:mt-16 font-medium title-font mb-4 text-gray-900">WE NEVER STOP IMPROVING</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        </div>
                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 md:w-1/1 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    
                                    <img src={downloads} className="text-indigo-500 w-12 h-12 mb-3 inline-block" />

                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/1 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    
                                    <img src={awards} className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                                    <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                                    <p className="leading-relaxed">Awards</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 md:w-1/1 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <img src={likes} className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                                    <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                                    <p className="leading-relaxed">Likes</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/1 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    
                                    <img src={Recomended} className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                                    <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                                    <p className="leading-relaxed">Recomended</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div class="py-6 md:py-8" id='stats'>
                    <h3 style={{ fontFamily: 'Paytone One' }} class="text-3xl sm:text-5xl md:mt-16 md:text-4xl  leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
                        WE <span class="text-indigo-600" style={{ color: '#D00F7F' }}> NEVER STOP IMPROVING</span>
                    </h3>
                    {/* <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">

                        <div class="mx-auto">
                            <ul class="md:grid md:grid-cols-2 lg:grid-cols-4 md:col-gap-10 md:row-gap-10">
                                <li class=" bg-gray-100 p-24  md:p-20 text-center">
                                    <div class="flex flex-col items-center">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">
                                                <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <h4 class="text-lg leading-6 font-semibold text-gray-900">2.7K</h4>
                                            <p class="mt-2 text-lg leading-6 font-semibold text-gray-900">
                                                Downloads
              </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="mt-10 md:mt-0 bg-gray-100 p-24  md:p-20 text-center">
                                    <div class="flex flex-col items-center">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">

                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <h4 class="text-lg leading-6 font-semibold text-gray-900">1.3k</h4>
                                            <p class="mt-2 text-lg leading-6 font-semibold text-gray-900">
                                                Awards
              </p>
                                        </div>
                                    </div>
                                </li>

                                <li class="mt-10 md:mt-0 bg-gray-100 p-24  md:p-20 text-center">
                                    <div class="flex flex-col items-center">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">

                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <h4 class="text-lg leading-6 font-semibold text-gray-900">74</h4>
                                            <p class="mt-2 text-lg leading-6 font-semibold text-gray-900">
                                                Likes
              </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="mt-10 md:mt-0 bg-gray-100 p-24  md:p-20 text-center">
                                    <div class="flex flex-col items-center">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <h4 class="text-lg leading-6 font-semibold text-gray-900">46</h4>
                                            <p class="mt-2 text-lg leading-6 font-semibold text-gray-900">
                                                Recomended
              </p>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div> */}
                    <section class="text-gray-700 pb-10 body-font">
                        <div class="container px-5 py-4 mx-auto">

                            <div class="flex flex-wrap -m-4 text-center">
                                <div class="p-1 lg:p-4 md:p-4 w-1/2 md:w-1/4 sm:w-1/2">
                                    <div style={{ border: '2px solid #D00F7F' }} class="px-0 lg:px-2 md:px-2 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                            <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                        </svg>
                                        <h2 class="title-font font-medium text-2xl text-gray-900" style={{ color: '#000', fontFamily: 'Open Sans' }}><ReRender countNo='14578' /></h2>
                                        <p class="leading-relaxed font-black" style={{ fontFamily: 'Open Sans', color: '#D00F7F' }}>Total Clients</p>
                                    </div>
                                </div>
                                <div class="p-1 lg:p-4 md:p-4 w-1/2 md:w-1/4 sm:w-1/2">
                                    <div style={{ border: '2px solid #D00F7F' }} class="px-0 lg:px-2 md:px-2 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-indigo-500 w-12 h-12 mb-3 inline-block">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                        </svg>
                                        <h2 class="title-font font-medium text-2xl text-gray-900" style={{ color: '#000', fontFamily: 'Open Sans' }}><ReRender countNo='113690' /></h2>
                                        <p class="leading-relaxed font-black" style={{ fontFamily: 'Open Sans', color: '#D00F7F' }}>Total Weight Loss</p>
                                    </div>
                                </div>
                                <div class="p-1 lg:p-4 md:p-4 w-1/2 md:w-1/4 sm:w-1/2">
                                    <div style={{ border: '2px solid #D00F7F' }} class="px-0 lg:px-2 md:px-2 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-indigo-500 w-12 h-12 mb-3 inline-block" >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                        </svg>
                                        <h2 class="title-font font-medium text-2xl" style={{ color: '#000', fontFamily: 'Open Sans' }}><ReRender countNo='1208' /></h2>
                                        <p class="leading-relaxed font-black" style={{ fontFamily: 'Open Sans', color: '#D00F7F' }}>Reviews</p>
                                    </div>
                                </div>
                                <div class="p-1 lg:p-4 md:p-4 w-1/2 md:w-1/4 sm:w-1/2">
                                    <div style={{ border: '2px solid #D00F7F' }} class="px-0 lg:px-2 md:px-2 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-indigo-500 w-12 h-12 mb-3 inline-block">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h2 class="title-font font-medium text-2xl" style={{ color: '#000', fontFamily: 'Open Sans' }}><ReRender countNo='51' /></h2>
                                        <p class="leading-relaxed font-black" style={{ fontFamily: 'Open Sans', color: '#D00F7F' }}>Countries reached</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </React.Fragment>
        );
    }
}

export default AppInfo;