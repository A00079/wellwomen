import React, { Component } from 'react';
import './OurWorking.css';
import ReactCardCarousel from "react-card-carousel";
import ReactCard from "../../components/Card/ReactCard.js";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import ourwork from '../../assets/img/ourwork.png';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '300px',
        [theme.breakpoints.down("sm")]: {
            width: '210px'
        }
    },
    media: {
        height: '19rem',
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    onmobileviewhead: {
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    },
    hideonmobile: {
        display: 'block',
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    },
    hideSectionOnMobile: {
        display: 'block',
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    },
    ShowSectionOnMobile: {
        display: 'block',
        [theme.breakpoints.up("md")]: {
            display: 'none',
        }
    }
}));
const OurWorking = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <React.Fragment>
            <div>
                <h3 style={{ fontFamily: 'Paytone One' }} class="text-3xl sm:text-5xl md:text-4xl md:mt-32 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-0 mt-24 sm:mb-10">
                    TRANS <span class="text-indigo-600" style={{ color: '#D00F7F' }}> FORMATIONS</span>
                </h3>
            </div>
            <div className={classes.onmobileviewhead}>
                <h3 style={{ fontFamily: 'Paytone One' }} class="text-3xl sm:text-5xl md:text-4xl md:mt-32 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-0 mt-16 sm:mb-10">
                    TRANS <span class="text-indigo-600" style={{ color: '#D00F7F' }}> FORMATIONS</span>
                </h3>
            </div>
            <div className={classes.hideSectionOnMobile}>
                <div className="container mx-auto flex px-5 md:py-0  py-0 md:flex-row flex-col items-center bg-img-css" style={{
                    borderRadius: '8px', boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
                }}>
                    <div className={classes.hideonmobile}>
                        <div className="lg:flex-grow lg:ml-16 md:w-1/2 lg:pr-4 md:ml-16 md:mr-12  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            {/* <img className="object-cover object-center rounded" style={{ width: '55rem' }} alt="hero" src={hero} /> */}
                            <h3 style={{ fontFamily: 'Paytone One' }} class="text-2xl md:text-3xl sm:text-5xl md:mt-4 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
                                TRANS <span class="text-indigo-600" style={{ color: '#D00F7F' }}> FORMATIONS</span>
                            </h3>
                            <p className='text-1xl lg:mr-0 font-black' style={{ color: 'white' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                        </div>
                        <div class="flex w-full mt-0 mb-4  md:justify-start justify-center">
                            <button style={{ backgroundColor: '#FFF', fontFamily: 'Open Sans', color: '#D00F7F' }} id="ourwork" class="inline-flex ml-16 mt-4 text-white bg-indigo-500 border-0 font-bold py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                <a href="/startjourney" className={classes.dropdownLink}>
                                    Start losing weight <PlayArrowIcon />
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full lg:mr-32 md:ml-4 md:w-1/2 w-5/6">
                        <div style={{
                            position: "relative",
                            height: "80vh",
                            width: "100%",
                            display: "flex",
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "middle"
                        }} className="mt-4 md:mt-8">
                            <div style={{
                                width: '90%', height: '100%',
                                margin: '0px',
                                padding: '0px'
                            }}>
                                <ReactCardCarousel autoplay={true} autoplay_speed={3500}>
                                    {/* <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans1.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '10px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography style={{ fontFamily: 'Open Sans' }} className='font-black' variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'>This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card> */}


                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans2.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Sonal Medhekar</span><br /> Lost 13KGS in 18 weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans3.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Hedavi</span><br /> 6 KGS IN 8 Weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans4.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Archana</span><br /> Lost 8 KGS IN 7 Weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans5.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Sweety Mungra</span><br /> Progress In 8 Weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>


                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans6.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Simran Chandwani</span><br /> 10 Weeks Progress With PCOD.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans7.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Bhavani</span><br /> Progress In 4 Month.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>


                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans8.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Vriunda</span><br /> Lost 8.5 KGS In 8 Weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>


                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans9.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Kavya</span><br /> Lost 8 KGS In 8 Weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>


                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans10.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Joyti</span><br /> Lost 15 KGS With PCOD.</i>
                                                {/* <span className='text-pink-600 font-bold'>Joyti</span><br /> Lost 15 KGS With PCOD. */}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    {/* <ReactCard imgpath='../../assets/img/trans2.jpg' /> */}
                                    {/* <ReactCard imgpath='../../assets/img/trans3.jpg' /> */}
                                    {/* <ReactCard imgpath='../../assets/img/trans4.jpg' /> */}
                                </ ReactCardCarousel>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className={classes.ShowSectionOnMobile}>
                {/* <div className="container mx-auto flex px-5 md:py-0  py-0 md:flex-row flex-col items-center" style={{
                    borderRadius: '8px', boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
                }}> */}
                <div className="container mx-auto flex px-5 md:py-0  py-0 md:flex-row flex-col items-center" style={{
                    borderRadius: '8px', boxShadow: 'none'
                }}>
                    <div className={classes.hideonmobile}>
                        <div className="lg:flex-grow lg:ml-16 md:w-1/2 lg:pr-4 md:ml-16 md:mr-12  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            {/* <img className="object-cover object-center rounded" style={{ width: '55rem' }} alt="hero" src={hero} /> */}
                            <h3 style={{ fontFamily: 'Paytone One' }} class="text-3xl md:text-5xl sm:text-5xl md:mt-4 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
                                OUR <span class="text-indigo-600" style={{ color: '#D00F7F' }}> WORK</span>
                            </h3>
                            <p className='text-1xl lg:mr-0 font-black' style={{ color: 'white' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                        </div>
                        <div class="flex w-full mt-0 mb-4  md:justify-start justify-center">
                            <button style={{ backgroundColor: '#FFF', fontFamily: 'Open Sans', color: '#D00F7F' }} id="ourwork" class="inline-flex ml-16 mt-4 text-white bg-indigo-500 border-0 font-bold py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                <a href="/startjourney" className={classes.dropdownLink}>
                                    Start losing weight <PlayArrowIcon />
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full lg:mr-32 md:ml-4 md:w-1/2 w-5/6">
                        <div style={{
                            position: "relative",
                            height: "80vh",
                            width: "100%",
                            display: "flex",
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "middle"
                        }} className="mt-4 md:mt-8">
                            <div style={{
                                width: '90%', height: '100%',
                                margin: '0px',
                                padding: '0px'
                            }}>
                                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                                    {/* <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans2.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'>Sonal Medhekar Lost 13KGS in 18 weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card> */}

                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans2.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Sonal Medhekar</span><br /> Lost 13KGS in 18 weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans3.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Hedavi</span><br /> 6 KGS IN 8 Weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans4.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Archana</span><br /> Lost 8 KGS IN 7 Weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans5.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Sweety Mungra</span><br /> Progress In 8 Weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>


                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans6.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Simran Chandwani</span><br /> 10 Weeks Progress With PCOD.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans7.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Bhavani</span><br /> Progress In 4 Month.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>


                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans8.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Vriunda</span><br /> Lost 8.5 KGS In 8 Weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>


                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans9.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Kavya</span><br /> Lost 8 KGS In 8 Weeks.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>


                                    <Card className={classes.root} style={{
                                        position: 'relative', left: '0', border: '10px solid #fff',
                                        borderBottom: 'none'
                                    }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../../assets/img/trans10.jpg')}
                                            title="Paella dish"
                                        />
                                        <CardContent style={{
                                            border: '1px solid #fff',
                                            borderTop: 'none', borderBottom: '3px solid #fff'
                                        }}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <i className='font-black'><span className='text-pink-600 font-bold'>Joyti</span><br /> Lost 15 KGS With PCOD.</i>
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                    {/* <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0" style={{borderBottom: '1px solid #ccc'}}>
                                        <div class="bg-white rounded overflow-hidden border-indigo-600 relative">
                                            <img class="h-56 w-full object-cover object-center" src={require('../../assets/img/trans1.jpg')} alt="" />
                                            <div class="p-4 h-auto md:h-40 lg:h-48">
                                                <a href="#" class="block text-pink-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                                    Sonal Medhekar
                                                </a>
                                                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                                                    Lost 13KGS in 18 weeks.
                                                </div>
                                                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#curvicare</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0" style={{borderBottom: '1px solid #ccc'}}>
                                        <div class="bg-white rounded overflow-hidden border-indigo-600 relative">
                                            <img class="h-56 w-full object-cover object-center" src={require('../../assets/img/trans3.jpg')} alt="" />
                                            <div class="p-4 h-auto md:h-40 lg:h-48">
                                                <a href="#" class="block text-pink-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                                    Hedavi
                                                </a>
                                                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                                                    6 KGS IN 8 Weeks.
                                                </div>
                                                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#curvicare</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0" style={{borderBottom: '1px solid #ccc'}}>
                                        <div class="bg-white rounded overflow-hidden border-indigo-600 relative">
                                            <img class="h-56 w-full object-cover object-center" src={require('../../assets/img/trans4.jpg')} alt="" />
                                            <div class="p-4 h-auto md:h-40 lg:h-48">
                                                <a href="#" class="block text-pink-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                                    Archana
                                                </a>
                                                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                                                    Lost 8 KGS IN 7 Weeks.
                                                </div>
                                                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#curvicare</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0" style={{borderBottom: '1px solid #ccc'}}>
                                        <div class="bg-white rounded overflow-hidden border-indigo-600 relative">
                                            <img class="h-56 w-full object-cover object-center" src={require('../../assets/img/trans5.jpg')} alt="" />
                                            <div class="p-4 h-auto md:h-40 lg:h-48">
                                                <a href="#" class="block text-pink-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                                    Sweety Mungra
                                                </a>
                                                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                                                    Progress In 8 Weeks.
                                                </div>
                                                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#curvicare</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0" style={{borderBottom: '1px solid #ccc'}}>
                                        <div class="bg-white rounded overflow-hidden border-indigo-600 relative">
                                            <img class="h-56 w-full object-cover object-center" src={require('../../assets/img/trans6.jpg')} alt="" />
                                            <div class="p-4 h-auto md:h-40 lg:h-48">
                                                <a href="#" class="block text-pink-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                                    Simran Chandwani
                                                </a>
                                                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                                                    10 Weeks Progress With PCOD.
                                                </div>
                                                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#curvicare</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0" style={{borderBottom: '1px solid #ccc'}}>
                                        <div class="bg-white rounded overflow-hidden border-indigo-600 relative">
                                            <img class="h-56 w-full object-cover object-center" src={require('../../assets/img/trans7.jpg')} alt="" />
                                            <div class="p-4 h-auto md:h-40 lg:h-48">
                                                <a href="#" class="block text-pink-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                                    Bhavani
                                                </a>
                                                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                                                    Progress In 4 Month.
                                                </div>
                                                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#curvicare</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0" style={{borderBottom: '1px solid #ccc'}}>
                                        <div class="bg-white rounded overflow-hidden border-indigo-600 relative">
                                            <img class="h-56 w-full object-cover object-center" src={require('../../assets/img/trans8.jpg')} alt="" />
                                            <div class="p-4 h-auto md:h-40 lg:h-48">
                                                <a href="#" class="block text-pink-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                                    Vriunda
                                                </a>
                                                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                                                    Lost 8.5 KGS In 8 Weeks.
                                                </div>
                                                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#curvicare</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0" style={{borderBottom: '1px solid #ccc'}}>
                                        <div class="bg-white rounded overflow-hidden border-indigo-600 relative">
                                            <img class="h-56 w-full object-cover object-center" src={require('../../assets/img/trans9.jpg')} alt="" />
                                            <div class="p-4 h-auto md:h-40 lg:h-48">
                                                <a href="#" class="block text-pink-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                                    Kavya
                                                </a>
                                                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                                                    Lost 8 KGS In 8 Weeks.
                                                </div>
                                                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#curvicare</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0" style={{borderBottom: '1px solid #ccc'}}>
                                        <div class="bg-white rounded overflow-hidden border-indigo-600 relative">
                                            <img class="h-56 w-full object-cover object-center" src={require('../../assets/img/trans10.jpg')} alt="" />
                                            <div class="p-4 h-auto md:h-40 lg:h-48">
                                                <a href="#" class="block text-pink-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                                                    Joyti
                                                </a>
                                                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                                                    Lost 15 KGS With PCOD.
                                                </div>
                                                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#curvicare</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</a>
                                                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <ReactCard imgpath='../../assets/img/trans2.jpg' /> */}
                                    {/* <ReactCard imgpath='../../assets/img/trans3.jpg' /> */}
                                    {/* <ReactCard imgpath='../../assets/img/trans4.jpg' /> */}
                                </ ReactCardCarousel>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}


export default OurWorking;