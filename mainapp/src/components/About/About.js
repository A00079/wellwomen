import React, { Component } from 'react';
import { Link } from "react-router-dom";
import hero from '../../assets/img/drsnehal.webp';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <h1 id="aboutus" style={{ color: '#4e6073', textAlign: 'center', fontFamily: 'Paytone One' }} className="sm:text-3xl text-3xl mt-24  md:text-4xl md:mt-24 font-medium title-font mb-4 font-extrabold text-gray-900">ABOUT   <span class="text-indigo-600" style={{ color: '#D00F7F' }}> CURVICARE</span></h1>
                <section className="text-gray-700 body-font" style={{ background: '#D00F7F' }}>
                    <div className="container mx-auto flex px-5 md:py-16  py-4 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
                            <img className="object-cover object-center rounded" style={{ width: '55rem' }} alt="hero" src={hero} />
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            {/* <h1 className="title-font sm:text-4xl md:text-2xl text-3xl mb-4 font-medium text-white">About
                                <br className="hidden lg:inline-block" /> CurviCare
                            </h1> */}
                            <p className="mb-8 leading-relaxed text-white">For a woman, her curves mean a lot. And that is only achieved with weight loss and looking after one’s well being. That is exactly what we provide through our most convenient & healthy DESI DIET PLAN. CurviCare was founded with the mission to empower women through a sustained process of bettering their health. With a strong foothold in the industry, we set ourselves apart by the determined focus on women and their multifarious needs. At Curvicare, health is reimagined with a new holistic approach towards changing one's lifestyle by remaining connected to our traditional roots. We are specialised in Women Weight Loss & we give Desi Diet plans where we use traditional Indian food, easily available ingredients to make this journey easy & convenient. CurviCare is an endeavour of love led by leading & qualified industry professionals who have made it their life’s mission to help women achieve their goal of sustained health through weight loss and well-being. We help women lose weight, get leaner & build healthy habits that last for life. We’ve helped transform thousands of women all over the world.</p>
                            <div className="flex justify-center">
                                <Link to='/singleaboutus'>
                                    <button style={{ background: '#fff', color: '#D00F7F' }} className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default About;