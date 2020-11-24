import React, { useEffect } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SectionTabs from "../components/SectionTabs/SectionTabs.js";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Parallax from "../components/Parallax/Parallax.js";
import Button from "../components/CustomButtons/Button.js";
import Pricing from "../components/Pricing/Pricing.js";
import ReactSlider from "../components/Slider/ReactSlider.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardCarousel from "../components/Slider/CardSlider.js";
import Footer from "../components/Footer/Footer.js";
import AppInfo from "../components/AppInfo/AppInfo.js";
import About from "../components/About/About.js";
import Testimonial from "../components/Testimonials/Testimonials.js";
import GetInTouch from "../components/GetInTouch/getInTouch.js";
import Contact from "../components/Contact/Contact.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import HowItWorks from "../components/HowItWorks/HowItWorks.js";
import OurWorking from "../components/OurWorking/OurWorking.js";
import WorkingCards from "../components/OurWorking/OurWorkingCards.js";
import PartOneGallery from '../components/Gallary/PartoneGallery.js';
import FullGallery from '../components/Gallary/FullGallary.js';
import Clients from '../components/Testimonials/OurClients.js';
import TrialBlog from '../views/UserBlogs/TrialBlogs.js';
import Awards from '../components/Awards/Awards';
import SocialContacts from '../components/SocialContacts/SocialContacts.js';
import Aos from 'aos';
import 'aos/dist/aos.css';

// sections for this page

import styles from "../assets/jss/material-kit-react/components/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    const floatingCard = classNames('p-0');

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    })
    return (
        <div>
            <Header
                brand="Well Woman"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
            />
            <Parallax image={require("../assets/img/home1.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                {/* <h1 className="md:text-4xl text-4xl mt-48 md:mt-64 font-black" style={{ fontFamily: 'Paytone One' }}>READY TO LOSE WEIGHT, FOR LIFE? </h1> */}
                                <h1 className="md:text-4xl text-4xl mt-48 md:mt-64 font-black" style={{ fontFamily: 'Paytone One' }}></h1>
                                {/* <h3 className="md:text-1xl text-2xl font-medium" style={{ fontFamily: 'Paytone One' }}>
                                    WITH ONLY AND ONLY DESI DIET !
                                </h3> */}
                                <Button
                                    style={{ backgroundColor: '#D00f7F', fontFamily: 'Open Sans', color: '#FFF' }}
                                    className={classes.startbtn}
                                    color="danger"
                                    size="lg"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-play" />
                                    <Link to="/startjourney" className={classes.dropdownLink}>
                                        Start Your Journey
                                    </Link>
                                </Button>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <Card className={classNames(classes.RaisedCardMain)}>
                    <CardBody>
                        <ReactSlider />
                    </CardBody>
                </Card>
            </div>
            <div>
                <div data-aos="fade-up" style={{display:'none'}}>
                    <WorkingCards />
                </div>
                <div data-aos="fade-up" >
                    <OurWorking />
                </div>
                <div data-aos="fade-up" >
                    <HowItWorks />
                </div>
                <div data-aos="fade-up" >
                    <PartOneGallery />
                </div>
                <div data-aos="fade-up" >
                    <TrialBlog />
                </div>
                <div data-aos="fade-up" >
                    <AppInfo />
                </div>
                <div data-aos="fade-up" >
                    <About />
                </div>
                <div data-aos="fade-up" >
                    <Awards />
                </div>
                <div data-aos="fade-up" >
                    <Testimonial />
                </div>
                <div data-aos="fade-up" >
                    <GetInTouch />
                </div>
                <div data-aos="fade-up" >
                    <SocialContacts />
                </div>
                <div data-aos="fade-up" >
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    );
}
