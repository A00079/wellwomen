import React from 'react';
import WorkTime from '../../assets/img/worktime2.svg';
import Gallery from '../../components/Gallary/Gallery.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hideonMobile: {
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    }
}));
const PartTwoGallery = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-0 mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center">

                        <div class="sm:w-3/4 mb-10 px-4 pr-48">
                            <div className={classes.hideonMobile}>
                                <Gallery />
                            </div>
                        </div>
                        <div class="sm:w-1/4 mb-10 px-4">

                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src={WorkTime} />
                            </div>
                            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Get a Demo.</h2>
                            <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default PartTwoGallery;