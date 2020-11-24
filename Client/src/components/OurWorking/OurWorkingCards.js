import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import trans1 from '../../assets/img/trans1.jpg';
import trans2 from '../../assets/img/trans2.jpg';
import trans3 from '../../assets/img/trans3.jpg';
import trans4 from '../../assets/img/trans4.jpg';
import trans5 from '../../assets/img/trans5.jpg';
import trans6 from '../../assets/img/trans6.jpg';
import UserPreview from './Preview.js';

import {
    Container,
    Grid
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function WorkingCards() {
    const classes = useStyles();
    const theme = useTheme();
    const [showModal, setShowModal] = useState(false);
    const [useimage, setUseImage] = useState('');

    const handleClickOpen = (imageName) => {
        console.log('clicked...')
        setUseImage(imageName)
        setShowModal(true);
    };
    return (
        <React.Fragment>
            {
                showModal ? <UserPreview showModal={showModal} image={useimage} /> : ""
            }
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" style={{fontFamily: 'Paytone One'}}>Our Work</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ fontFamily: 'Open Sans'}}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                        <p class="lg:w-2/3 mx-auto mt-4 leading-relaxed text-base" style={{ fontFamily: 'Open Sans'}}>Click on the card to view image.</p>
                    </div>
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer" onClick={() => handleClickOpen('trans1.jpg')}>
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg" style={{background:'linear-gradient(to right, #8a2387, #e94057, #f27121)'}}>
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={trans1} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-500 title-font font-medium" style={{fontFamily: 'Paytone One'}}>Holden Caulfield</h2>
                                    <p class="text-gray-500" style={{fontFamily: 'Paytone One'}}>UI Designer</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer" onClick={() => handleClickOpen('trans2.jpg')}>
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={trans2} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium" style={{fontFamily: 'Paytone One'}}>Henry Letham</h2>
                                    <p class="text-gray-500" style={{fontFamily: 'Paytone One'}}>CTO</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer" onClick={() => handleClickOpen('trans3.jpg')}>
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg" style={{background:'linear-gradient(to right, #8a2387, #e94057, #f27121)'}}>
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={trans3} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-500 title-font font-medium" style={{fontFamily: 'Paytone One'}}>Oskar Blinde</h2>
                                    <p class="text-gray-500" style={{fontFamily: 'Paytone One'}}>Founder</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer" onClick={() => handleClickOpen('trans4.jpg')}>
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={trans4} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium" style={{fontFamily: 'Paytone One'}}>John Doe</h2>
                                    <p class="text-gray-500" style={{fontFamily: 'Paytone One'}}>DevOps</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer" onClick={() => handleClickOpen('trans5.jpg')}>
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg" style={{background:'linear-gradient(to right, #8a2387, #e94057, #f27121)'}}>
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={trans5} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-500 title-font font-medium" style={{fontFamily: 'Paytone One'}}>Martin Eden</h2>
                                    <p class="text-gray-500" style={{fontFamily: 'Paytone One'}}>Software Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer" onClick={() => handleClickOpen('trans6.jpg')}>
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={trans6} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium" style={{fontFamily: 'Paytone One'}}>Boris Kitua</h2>
                                    <p class="text-gray-500" style={{fontFamily: 'Paytone One'}}>UX Researcher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>

    );
}
