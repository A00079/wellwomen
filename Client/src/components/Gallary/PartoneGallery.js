import React from 'react';
import WorkTime from '../../assets/img/worktime.svg';
import Gallery from '../../components/Gallary/Gallery.js';
import { makeStyles } from '@material-ui/core/styles';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import YoutubeImg from '../../assets/img/youtubesection.png';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    hideonMobile: {
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    }
}));
const PartOneGallery = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.onmobileviewhead}>
                <h3 style={{ fontFamily: 'Paytone One' }} class="text-3xl sm:text-5xl md:text-4xl md:mt-32 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-0 mt-16 sm:mb-10">
                    YOU<span class="text-indigo-600" style={{ color: '#D00F7F' }}>TUBE</span>
                </h3>
            </div>
            <section class="mt-16 text-gray-700 body-font" style={{ background: '#D00F7F' }}>
                <div class="flex flex-col text-center w-full mb-0">
                    {/* <h2 class="text-xs text-white mt-8 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
                    {/* <h1 class="sm:text-3xl text-2xl mt-8 font-medium title-font mb-4 text-white" style={{ fontFamily: 'Paytone One' }}>Subscribe to our youtube & get free diet recipes</h1> */}
                    <h1 class="sm:text-3xl text-2xl mt-8 font-medium title-font mb-4 text-white" style={{ fontFamily: 'Paytone One' }}>Check out our Youtube channel & Get free diet recipes.</h1>
                    {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
                </div>
                <div class="container px-5 py-0 lg:py-8 md:py-8 mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div class="sm:w-1/2 mb-0 px-0">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" style={{ objectFit: 'contain' }} class="object-cover object-center h-full w-full" src={YoutubeImg} />
                            </div>
                            <div class="flex w-full mt-0 mb-4  md:justify-start justify-center">
                                <button style={{ backgroundColor: '#FFF', fontFamily: 'Open Sans', color: '#D00F7F' }} id="ourwork" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <a href="https://www.youtube.com/channel/UC8KBEuXc5mdz0N5roXTbyVA" className={classes.dropdownLink}>
                                        Subscribe <SubscriptionsIcon />
                                    </a>
                                </button>
                            </div>
                            {/* <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy Desi Diet.</h2>
                            <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
                        </div>

                        <div class="sm:w-1/2 mb-0 px-0 pl-0 md:pl-2 lg:pl-2 ">
                            <div className={classes.hideonMobile}>
                                <Gallery />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default PartOneGallery;