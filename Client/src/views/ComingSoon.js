import React from 'react';
import logo from '../assets/img/logo.png';

const ComingSoon = () => {
    return (
        <React.Fragment>
            <section class="text-gray-700 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl font-black lg:text-5xl text-3xl mb-1 font-medium text-gray-900">Coming Soon
                        </h1>
                        <h1 class="title-font sm:text-4xl font-black lg:text-2xl text-3xl mb-4 font-medium text-gray-900">Get Ready... Something Really Cool Is Coming Soon
                            <br class="hidden lg:inline-block" />
                        </h1>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={logo} />
                    </div>
                </div>
            </section>
        </React.Fragment>);
}

export default ComingSoon;