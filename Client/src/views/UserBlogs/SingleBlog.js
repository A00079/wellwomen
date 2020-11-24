import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header/BlogHeader.js";
import UserHeaderLinks from "../../components/Header/UserHeaderLink.js";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
const SingleBlog = (props) => {
    useEffect(() => {
        console.log('Blog data...', props)
    }, [props])

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
            <section class="mt-2 text-gray-700 body-font" style={{
                background: '#072540',
                color: '#93c2db'
            }}>
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={props.location.state.imageurl} />
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Dr. Snehal Adsule</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
                            <div class="mb-3">
                                <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                    <span className='text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-purple'>{props.location.state.anytag}</span>
                                </a>
                            </div>
                            <div class="mb-3">
                                <span class="tracking-wider text-white bg-red-500 px-1 py-1 text-xs rounded leading-loose mx-2 font-semibold" title="">
                                    {/* <i class="fas fa-heart" aria-hidden="true"></i>  */}
                                    {CalculateDate(new Date(props.location.state.date), new Date())}
                                </span>
                            </div>
                        </div>
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                            {props.location.state.title}
                        </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{props.location.state.shortdiscription}</p>
                    </div>
                    <div class="text-center lg:w-2/3 w-full">
                        <p class="mb-10 leading-relaxed">{props.location.state.discription}</p>
                    </div>
                    <div class="text-center">
                        <Link to='/dashboard'>
                            <button style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Back</button>
                        </Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default SingleBlog;