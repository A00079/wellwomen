import React from 'react';
import logo from '../../src/assets/img/logo.png';
import Pricing from "../views/UserPricing.js";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <React.Fragment>
            <section class="text-gray-700 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Link to='/'><img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={logo} /></Link>
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Know More About Us</h1>
                        <p class="mb-8 leading-relaxed">For a woman, her curves mean a lot. And that is only achieved with weight loss and looking after one’s well being. That is exactly what we provide through our most convenient & healthy DESI DIET PLAN. CurviCare was founded with the mission to empower women through a sustained process of bettering their health. With a strong foothold in the industry, we set ourselves apart by the determined focus on women and their multifarious needs. At Curvicare, health is reimagined with a new holistic approach towards changing one's lifestyle by remaining connected to our traditional roots. We are specialised in Women Weight Loss & we give Desi Diet plans where we use traditional Indian food, easily available ingredients to make this journey easy & convenient.
                        CurviCare is an endeavour of love led by leading & qualified industry professionals who have made it their life’s mission to help women achieve their goal of sustained health through weight loss and well-being.
                        We help women lose weight, get leaner & build healthy habits that last for life. We’ve helped transform thousands of women all over the world.
</p>
                        <Pricing />
                        <div class="flex justify-center">
                            <button style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default AboutUs;