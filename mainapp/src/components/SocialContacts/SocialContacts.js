import React from 'react';
import FB from '../../assets/img/facebook.png';
import YT from '../../assets/img/youtube.png';
import TW from '../../assets/img/twitter.png';
import IG from '../../assets/img/instagram.png';
import ReRender from '../AppInfo/Rerender.js';

const SocialContacts = () => {
    return (
        <React.Fragment>
            <section class="text-gray-700 body-font mb-20">
                <div class="container px-5 py-0 mx-auto">
                    <div class="flex flex-col text-center w-full mb-16">
                        <h3 style={{ fontFamily: 'Paytone One' }} class="text-3xl sm:text-5xl md:text-4xl md:mt-32 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-0 mt-16 sm:mb-10">
                            SOCIAL <span class="text-indigo-600" style={{ color: '#D00F7F' }}> CONTACT</span>
                        </h3>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Contact us using any of the below social networks you use .</p>
                    </div>
                    <div class="flex flex-wrap ml-0 lg:ml-32 md:ml-32">
                        <div class="p-2 lg:w-1/3 md:w-1/3 w-1/3">
                            <a href='https://www.youtube.com/channel/UC8KBEuXc5mdz0N5roXTbyVA' target='_blank'>
                                <div class="h-full  items-center p-4 rounded-lg">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={FB} />
                                    <h2 class="title-font font-bold text-1xl lg:text-3xl md:text-3xl mt-4 text-pink-700" style={{ fontFamily: 'Open Sans' }}><ReRender countNo='2500' /></h2>
                                    <h2 class="title-font font-bold text-1xl lg:text-3xl md:text-3xl text-gray-900" style={{ color: '#000', fontFamily: 'Open Sans' }}>Fans</h2>
                                    <div class="flex-grow">
                                        {/* <h2 class="text-gray-900 title-font font-medium">FACEBOOK</h2> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/3 w-1/3" >
                            <a href='https://www.instagram.com/drsnehal_adsule/' target='_blank'>
                                <div class="h-full  items-center p-4 rounded-lg">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={IG} />
                                    <h2 class="title-font font-bold text-1xl lg:text-3xl md:text-3xl mt-4 text-pink-700" style={{ fontFamily: 'Open Sans' }}><ReRender countNo='322000' /></h2>
                                    <h2 class="title-font font-bold text-1xl lg:text-3xl md:text-3xl text-gray-900" style={{ color: '#000', fontFamily: 'Open Sans' }}>Followers</h2>
                                    <div class="flex-grow">
                                        {/* <h2 class="text-gray-900 title-font font-medium">TWITTER</h2> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/3 w-1/3">
                            <a href='https://www.youtube.com/channel/UC8KBEuXc5mdz0N5roXTbyVA' target='_blank'>
                                <div class="h-full  items-center p-4 rounded-lg">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={YT} />
                                    <h2 class="title-font font-bold text-1xl lg:text-3xl md:text-3xl mt-4 text-pink-700" style={{ fontFamily: 'Open Sans' }}><ReRender countNo='30000' /></h2>
                                    <h2 class="title-font font-bold text-1xl lg:text-3xl md:text-3xl text-gray-900" style={{ color: '#000', fontFamily: 'Open Sans' }}>Subscribers</h2>
                                    <div class="flex-grow">
                                        {/* <h2 class="text-gray-900 title-font font-medium">INSTAGRAM</h2> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>
            </section>
        </React.Fragment>
    );
}

export default SocialContacts;