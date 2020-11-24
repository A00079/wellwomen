import React, { useEffect, useState } from 'react';
import ReadMore from './Accordian.js';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Blogs from '../../REST/Blogs.js';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import image1 from '../../assets/img/weightloss.jpg';
import image2 from '../../assets/img/w3.jpg';
import image3 from '../../assets/img/w6.jpg';
import doctor from '../../assets/img/drsnehal.webp';
import { Link } from "react-router-dom";
import Multi from './MultiSlider.js';
import Typography from '@material-ui/core/Typography';

import {
    Container,
    Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    screensContainer: {
        height: '260px',
        [theme.breakpoints.down("sm")]: {
            height: '535px'
        }
    },
    screenheight: {
        height: '100%',
    },
    hideonMobile: {
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    }
}));

const AutoplaySlider = withAutoplay(AwesomeSlider);

const UserBlog = () => {
    const classes = useStyles();

    const [useBlogs, setBloga] = useState([]);
    useEffect(() => {
        let api_url = "api/admin/getBlog/read";
        Blogs
            .getBlogList(api_url)
            .then((res) => {
                setBloga(res.data)
            })
    }, [])

    const CalculateDate = (dateFuture, dateNow) => {
        let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

        // calculate days
        const days = Math.floor(diffInMilliSeconds / 86400);
        diffInMilliSeconds -= days * 86400;
        console.log('calculated days', days);

        // calculate hours
        const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
        diffInMilliSeconds -= hours * 3600;
        console.log('calculated hours', hours);

        // calculate minutes
        const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
        diffInMilliSeconds -= minutes * 60;
        console.log('minutes', minutes);

        let difference = '';
        if (days > 0) {
            difference += (days === 1) ? `${days} day, ` : `${days} days, `;
        }

        difference += (hours === 0 || hours === 1) ? `${hours} Hrs, ` : `${hours} Hrs, `;

        difference += (minutes === 0 || hours === 1) ? `${minutes} Min` : `${minutes} Min`;

        return difference;
    }

    return (
        <React.Fragment>
            <div className="mt-16">
                <AutoplaySlider
                    organicArrows={true}
                    className={classes.screensContainer}
                    play={true}
                    bullets={false}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={4000}
                >
                    <div className='screenheight' data-src={image1} />
                    <div className='screenheight' data-src={image2} />
                    <div className='screenheight' data-src={image3} />
                </AutoplaySlider>
            </div>
            {/* <Multi /> */}
            {/* <Grid
                container
                direction="row"
                justify="center"
                spacing={3}>
                <Grid item xs={12} md={4} lg={4} ><div class="flex flex-col text-center w-full mb-20">
                    <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-0">ROOF PARTY POLAROID</h2>
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
                </div>

                    <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
                        <div class="flex-shrink-0">
                            <img src="https://i.ibb.co/vX8pYzZ/logo-only.png" alt="" class="h-12 w-12" />
                        </div>
                        <div class="ml-6 pt-1">
                            <h4 class="text-xl text-gray-900">Traversy Media</h4>
                            <p class="text-base text-gray-600">You have a new message!</p>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={12} md={8} lg={8} >
                    content
                </Grid>
            </Grid> */}
            <div class="h-screen w-full flex overflow-hidden select-none">
                {/* <nav class="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">

                </nav> */}
                <main
                    class="my-1 pt-2 pb-2 px-0 lg:px-10 md:px-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">
                    <div class="flex flex-col capitalize text-3xl ml-4 md:ml-0 lg:ml-0">
                        <span class="font-semibold">hello,</span>
                        <span>tempest!</span>
                    </div>
                    <div class="flex">
                        <div
                            class="mr-6 w-full mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-lg">

                            <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-4">

                                <div class="border-b mb-5 flex justify-between text-sm">
                                    <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
                                        <svg class="h-6 mr-3" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 455.005 455.005" style={{ enableBackground: 'new 0 0 455.005 455.005' }}>
                                            <g>
                                                <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343
          c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428
          c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423
          c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615
          c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595
          l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72
          C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196
          c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956
          c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004
          C455.004,277.119,451.78,270.719,446.158,267.615z"/>
                                                <path d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126
          c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126
          C350.916,232.303,352.298,232.676,353.664,232.676z"/>
                                                <path d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82
          c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905
          C320.941,252.21,322.318,252.58,323.68,252.58z"/>
                                                <path d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062
          c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z"/>
                                                <path d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219
          c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37
          c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464
          c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351
          c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z"/>
                                                <path d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409
          c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132
          C266.219,292.387,268.669,291.131,270.089,288.846z"/>
                                                <path d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132
          c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455
          C60.338,188.266,55.714,189.346,53.527,192.864z"/>
                                            </g>
                                        </svg>
                                        <a href="#" class="font-semibold inline-block">Cooking Blog</a>
                                    </div>
                                    <a href="#"></a>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
                                    {
                                        useBlogs.map((blog, index) => {
                                            return (
                                                <div key={index} class="rounded overflow-hidden shadow-lg flex flex-col">
                                                    <a href="#">
                                                        <img style={{ height: '250px' }} class="w-full" src={blog.imageurl} alt="Sunset in the mountains" />
                                                    </a>
                                                    <div class="px-6 py-4 mb-auto">
                                                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
                                                            <div class="mb-3">
                                                                <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                                                    <span className='text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-purple'>{blog.anytag}</span>
                                                                </a>
                                                            </div>
                                                            <div class="mb-3">
                                                                <span style={{ fontSize: '0.5rem' }} class="tracking-wider text-white bg-red-500 px-1 py-1 text-xs rounded leading-loose mx-2 font-semibold" title="">
                                                                    {/* <i class="fas fa-heart" aria-hidden="true"></i>  */}
                                                                    {CalculateDate(new Date(blog.date), new Date())}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{blog.title}
                                                        </a>
                                                        <p style={{ width: '320px', wordBreak: 'break-all', overflow: 'hidden', textOverflow: 'ellipsis' }} class="text-gray-500 mb-4 text-sm">
                                                            {blog.shortdiscription}
                                                        </p>
                                                        <a href="#" class="text-xs font-black text-indigo-600 transition duration-500 ease-in-out">
                                                            {blog.youtubelink}
                                                        </a>
                                                    </div>
                                                    <div class="flex items-center px-6 pb-2">
                                                        <a href="#"><img class="w-12 h-12 rounded-full mr-2" src={doctor} alt="Avatar of Jonathan Reinink" /></a>
                                                        <div class="text-sm">
                                                            <a href="#" class="text-gray-900 font-medium leading-none hover:text-indigo-600">Dr. Snehal Adsule</a>
                                                            <p class="text-gray-600">{new Date(blog.date).toDateString()}</p>
                                                        </div>
                                                    </div>
                                                    <a href="#" style={{ textAlign: 'end' }} class="pb-2 pr-4 text-xs text-indigo-600 transition font-black duration-500 ease-in-out">
                                                        <Link to={{
                                                            pathname: "/blog/" + blog._id,
                                                            state: blog
                                                        }}>
                                                            View Blog
                                                        </Link>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>






                            {/* <h3
                                class="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize dark:text-gray-300">
                                <span>nearby jobs</span>
                                <button class="ml-2">
                                    <svg class="h-5 w-5 fill-current" viewBox="0 0 256 512">
                                        <path
                                            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"></path>
                                    </svg>
                                </button>
                            </h3>

                            <div>

                                <ul class="pt-1 pb-2 px-3 overflow-y-auto">

                                    <li class="mt-4">

                                        <div class="rounded overflow-hidden shadow-lg flex flex-col">
                                            <a href="#">
                                                <img class="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                                            </a>
                                            <div class="px-6 py-4 mb-auto">
                                                <div class="mb-3">
                                                    <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                                        Cooking
</a>, <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                                        Recipe
</a>

                                                </div>
                                                <a href="#" class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest Salad Recipe ever</a>
                                                <p class="text-gray-500 text-sm">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
                                            </div>
                                            <div class="flex items-center px-6 pb-4">
                                                <a href="#"><img class="w-12 h-12 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
                                                <div class="text-sm">
                                                    <a href="#" class="text-gray-900 font-medium leading-none hover:text-indigo-600">Jonathan Reinink</a>
                                                    <p class="text-gray-600">Aug 18</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mt-4">

                                        <div class="rounded overflow-hidden shadow-lg flex flex-col">
                                            <a href="#">
                                                <img class="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                                            </a>
                                            <div class="px-6 py-4 mb-auto">
                                                <div class="mb-3">
                                                    <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                                        Cooking
</a>, <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                                        Recipe
</a>

                                                </div>
                                                <a href="#" class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest Salad Recipe ever</a>
                                                <p class="text-gray-500 text-sm">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
                                            </div>
                                            <div class="flex items-center px-6 pb-4">
                                                <a href="#"><img class="w-12 h-12 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
                                                <div class="text-sm">
                                                    <a href="#" class="text-gray-900 font-medium leading-none hover:text-indigo-600">Jonathan Reinink</a>
                                                    <p class="text-gray-600">Aug 18</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
                        </div>

                        {/* <div
                            class="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-lg">

                            <h3
                                class="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize dark:text-gray-300">
                                <span>nearby jobs</span>
                                <button class="ml-2">
                                    <svg class="h-5 w-5 fill-current" viewBox="0 0 256 512">
                                        <path
                                            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"></path>
                                    </svg>
                                </button>
                            </h3>

                            <div>

                                <ul class="pt-1 pb-2 px-3 overflow-y-auto">

                                    <li class="mt-4">

                                        <div class="rounded overflow-hidden shadow-lg flex flex-col">
                                            <a href="#">
                                                <img class="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                                            </a>
                                            <div class="px-6 py-4 mb-auto">
                                                <div class="mb-3">
                                                    <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                                        Cooking
</a>, <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                                        Recipe
</a>

                                                </div>
                                                <a href="#" class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest Salad Recipe ever</a>
                                                <p class="text-gray-500 text-sm">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>
                                            </div>
                                            <div class="flex items-center px-6 pb-4">
                                                <a href="#"><img class="w-12 h-12 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
                                                <div class="text-sm">
                                                    <a href="#" class="text-gray-900 font-medium leading-none hover:text-indigo-600">Jonathan Reinink</a>
                                                    <p class="text-gray-600">Aug 18</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mt-4">

                                        <div class="rounded overflow-hidden shadow-lg flex flex-col">
                                            <a href="#">
                                                <img class="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                                            </a>
                                            <div class="px-6 py-4 mb-auto">
                                                <div class="mb-3">
                                                    <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                                        Cooking
</a>, <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                                        Recipe
</a>

                                                </div>
                                                <a href="#" class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest Salad Recipe ever</a>
                                                <p class="text-gray-500 text-sm">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>
                                            </div>
                                            <div class="flex items-center px-6 pb-4">
                                                <a href="#"><img class="w-12 h-12 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
                                                <div class="text-sm">
                                                    <a href="#" class="text-gray-900 font-medium leading-none hover:text-indigo-600">Jonathan Reinink</a>
                                                    <p class="text-gray-600">Aug 18</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </main>
                <aside className={classes.hideonMobile}>
                    <div className='class="w-1/4 my-1 mr-1 px-6 py-4 flex flex-col bg-gray-200 dark:bg-black
		dark:text-gray-400 rounded-r-lg overflow-y-auto"'>


                        <div class="flex items-center justify-between">

                            <div class="flex flex-col text-center w-full mb-10">
                                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Dr.Snehal Adsule</h2>
                                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Recommended Blogs</h1>
                            </div>
                        </div>
                        <span class="mt-0 text-gray-600">Blogs For Desi Diets</span>
                        <span class="mt-1 text-1xl font-semibold">
                            <Link to='/pricing'>
                                <button style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Pricing
                        </button>
                            </Link>
                        </span>

                        {/* <button
                        class="mt-8 flex items-center py-4 px-3 text-white rounded-lg
			bg-green-400 shadow focus:outline-none">

                        <svg class="h-5 w-5 fill-current mr-2 ml-3" viewBox="0 0 24 24">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>

                        <span>Bill your Students</span>

                    </button> */}

                        <div class="mt-6 flex items-center">
                            <span>View Blogs</span>
                            <button class="ml-2 focus:outline-none">
                                <svg class="h-5 w-5 fill-current" viewBox="0 0 256 512">
                                    <path
                                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
						0l-22.6-22.6c-9.4-9.4-9.4-24.6
						0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3
						103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1
						34z"></path>
                                </svg>
                            </button>
                        </div>
                        {
                            useBlogs.map((blog, index) => {
                                return (
                                    <a key={index}
                                        href="/"
                                        class="mt-2 p-4 flex justify-between bg-gray-300 rounded-lg
			font-semibold capitalize">

                                        <div class="flex">

                                            <img
                                                class="h-10 w-10 rounded-full object-cover"
                                                src={blog.imageurl}
                                                alt="accelerator profile" />
                                            <div class="flex flex-col ml-4">

                                                <span class="text-xs">{blog.title}</span>
                                                <span class="text-sm text-gray-600">
                                                    <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                                        <span className='text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-purple'>{blog.anytag}</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <span className='text-sm text-blue-500'>
                                            <Link to={{
                                                pathname: "/blog/" + blog._id,
                                                state: blog
                                            }}>
                                                view
                                        </Link>
                                        </span>
                                    </a>
                                )
                            })
                        }

                        {/* <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                        <div class="w-2 bg-gray-800"></div>
                        <div class="flex items-center px-2 py-3">
                            <img class="w-12 h-12 object-cover rounded-full" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <div class="mx-3">
                                <span className='font-semibold capitalize'>accelerator</span>
                                <p class="text-sm text-gray-600">Sara was replied</p>
                            </div>
                        </div>
                    </div> */}

                        {/* <div class="mt-4 flex justify-center capitalize text-blue-600">
                        <a href="expenses-dashboard/">see all</a>
                    </div> */}
                    </div>
                </aside>

            </div>






            {/* {
                useBlogs.map((item,index) => {
                    return (
                        <div key={index} class="max-w-full px-6 my-4 md:ml-0 py-6 bg-white rounded-lg">
                            <div class="flex justify-between items-center">
                                <span class="font-light text-gray-600">{item.date}</span>
                                <a class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">{item.anytag}</a>
                            </div>
                            <div class="mt-2">
                                <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">{item.shortdiscription}</a>
                                <p class="mt-2 text-gray-600">{item.discription}</p>
                            </div>
                            <div class="flex justify-between items-center mt-4">
                                <a class="text-blue-600 hover:underline" href="#">{item.youtubelink}</a>
                                <div>
                                    <a class="flex items-center" href="#">
                                        <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar" />
                                        <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
                                    </a>
                                </div>
                            </div>
                            <ReadMore disscription={item.discription} />
                        </div>
                    )
                })
            } */}
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                    @Team Pratham
      </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>

        </React.Fragment>
    );
}

export default UserBlog;