import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {
    Container,
    Grid
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import userIcon from "../../assets/img/signfemale.png";
import PostBlog from "./Blogs/AddBlog.js";
import EditBlog from "./Blogs/EditBlog.js";
import applogo from "../../assets/img/logo.png";
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import adminImg from "../../assets/img/drsnehal.webp";
import InfoCards from "./InfoCards.js";
import BlogCard from "./BlogCard.js";
import UserLogs from "./UserLogs.js";
import BlogLogs from './BlogLogs.js';
import SerwayData from './SerwayDetailsLogs.js';
import Blogs from '../../../src/REST/Blogs.js';
import Paper from '@material-ui/core/Paper';
import {
    LineChart, BarChart, Bar, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import CustomAreaChart from './AreaChart.js';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawerItems: {
        cursor: 'pointer'
    },
    appBar: {
        // backgroundColor: '#aa076b !important',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin: '0 auto'
    },
    margin: {
        margin: theme.spacing(1),
    }
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [dashboard, setdashboard] = React.useState(true);
    const [postBlog, setpostBlog] = React.useState(false);
    const [editBlog, seteditBlog] = React.useState(false);
    const [getBlogs, setBlog] = React.useState([]);
    const [getUserData, setgetUserData] = React.useState([]);
    const [postCount, setpostCount] = React.useState(0);
    const [userCount, setuserCount] = React.useState(0);
    const [demograph, setdemograph] = React.useState(true);
    const [BlogLogDetails, setBlogLogDetails] = React.useState([]);
    const [UserLogsDetails, setUserLogsDetails] = React.useState([]);
    const [ShowUser, setShowUser] = React.useState(false);
    const [ShowBlogs, setShowBlogs] = React.useState(false);
    const [ShowSerway, setShowSerway] = React.useState(false);
    const [SerwayDetails, setSerwayDetails] = React.useState([]);

    const [SerwayCount, setSerwayCount] = React.useState(0);

    const [serveyDetails, setserveyDetails] = React.useState([
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        }
    ])

    const [linechart, setlinechart] = React.useState([
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        }
    ])
    React.useEffect(() => {
        fetchBlogs();
        fetchUsers();
        fetchSerwayDetails();
    }, [])
    const fetchBlogs = () => {
        setOpen(!open)
        let api_url = "api/admin/getBlog/read";
        Blogs
            .getBlogList(api_url)
            .then((res) => {
                setBlog(res.data)
                if (res.data && res.data.length !== 0) {
                    setgetUserData(res.data)
                    setpostCount(res.data.length)
                }
                setOpen(false)
            })
    }
    const fetchSerwayDetails = () => {
        setOpen(!open)
        let api_url = "api/user/submitserway/read";
        Blogs
            .getBlogList(api_url)
            .then((res) => {
                if (res.data && res.data.length !== 0) {
                    setSerwayCount(res.data.length)
                    setSerwayDetails(res.data)
                }
                setOpen(false)
            })
    }
    const fetchUsers = () => {
        setOpen(!open)
        let api_url = "api/admin/getUsers/read";
        Blogs
            .getBlogList(api_url)
            .then((res) => {
                if (res.data && res.data.length !== 0) {
                    setUserLogsDetails(res.data)
                    setuserCount(res.data.length)
                }
                console.log('All Users', res)
                setOpen(false)
            })
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handelDemograph = () => {
        if (demograph) {
            setdemograph(false)
        } else {
            setdemograph(true)
        }
    }
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handelLogs = (activeLog) => {
        if (activeLog === 'userlog') {
            setShowUser(true);
            setdashboard(false);
            setShowBlogs(false);
            setShowSerway(false);
        }
        if (activeLog === 'bloglog') {
            setShowUser(false);
            setdashboard(false);
            setShowSerway(false);
            setShowBlogs(true);
        }
        if (activeLog === 'serwaylog') {
            setShowUser(false);
            setdashboard(false);
            setShowSerway(true);
            setShowBlogs(false);
        }
    }
    const handleActivePanel = (activePanel) => {
        if (activePanel === 'dashboard') {
            setdashboard(true);
            setpostBlog(false);
            seteditBlog(false);
            setShowUser(false);
            setShowBlogs(false);
            setShowSerway(false);

        }
        if (activePanel === 'postblog') {
            setdashboard(false);
            setpostBlog(true);
            seteditBlog(false);
            setShowUser(false);
            setShowBlogs(false);
            setShowSerway(false);

        }
        if (activePanel === 'editblog') {
            setdashboard(false);
            setpostBlog(false);
            seteditBlog(true);
            setShowUser(false);
            setShowBlogs(false);
            setShowSerway(false);
        }
        handleDrawerClose();
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Dashboard
          </Typography>
                    <Avatar alt="admin icon" src={userIcon} style={{ position: 'absolute', right: '40px' }} />

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <Link to='/'>
                        <img src={applogo} style={{ width: '4rem', position: 'absolute', left: '1rem' }} />
                    </Link>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {
                        open ?
                            <React.Fragment>
                                <ListItem className={classes.drawerItems}>
                                    <Avatar alt="Remy Sharp" src={adminImg} className={classes.large} />
                                </ListItem>
                                <ListItem className={classes.drawerItems} style={{ display: 'block', textAlign: 'center' }}>
                                    <h5 class="text-green-900 font-black">Welcome</h5>
                                    <h6 class="text-black-900 font-black">dr.snehal adsule</h6>
                                    <h6 class="text-blue-600 font-black">drsnehaladsule@gmail.com</h6>
                                </ListItem>
                                <Divider />
                            </React.Fragment> : ""
                    }
                    {
                        open == false ?
                            <ListItem className={classes.drawerItems}>
                                <ListItemIcon><AccountCircle /></ListItemIcon>
                            </ListItem> : ""
                    }
                    <Divider />

                    <Link to="/">
                    <ListItem className={classes.drawerItems}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    </Link>
                    <Divider />
                    <ListItem className={classes.drawerItems} onClick={() => handleActivePanel('dashboard')}>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.drawerItems} onClick={() => handleActivePanel('postblog')}>
                        <ListItemIcon><CreateIcon /></ListItemIcon>
                        <ListItemText>Create Blog</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.drawerItems} onClick={() => handleActivePanel('editblog')}>
                        <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                        <ListItemText >Manage Blog</ListItemText>
                    </ListItem>
                    {/* <Divider /> */}
                    {/* <ListItem className={classes.drawerItems}>
                        <ListItemIcon><PollIcon /></ListItemIcon>
                        <ListItemText onClick={() => handleActivePanel('editblog')}> Demographic</ListItemText>
                    </ListItem> */}
                </List>
                <Divider />
            </Drawer>
            {
                dashboard ?
                    <React.Fragment>
                        <Grid
                            style={{
                                margin: '4rem 0rem 0rem 0rem',
                                height: '100vh',
                                background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'
                            }}
                            container
                            direction="row"
                            justify="center"
                            spacing={3}>
                            <Grid item xs={4} md={4} lg={4} >
                                <InfoCards userCount={userCount} cardtitle="User Traffic" />
                            </Grid>
                            <Grid item xs={4} md={4} lg={4} >
                                <InfoCards userCount={SerwayCount} cardtitle="Started Journey" />
                            </Grid>
                            <Grid item xs={4} md={4} lg={4}>
                                <BlogCard postCount={postCount} cardtitle="Blog Posts" />
                            </Grid>
                            <Grid item xs={12} md={5} lg={5}>
                                <Paper elevation={3}>
                                    <h6 className="md:text-2xl pt-2 text-gray-900 font-black text-center" style={{fontFamily: 'Paytone One'}}>Users</h6>
                                    <h6 className="md:text-1xl text-gray-900 font-black text-center" style={{ fontFamily: 'Open Sans'}}>A detailed log of users can be viewed here.</h6>
                                    <div className="ml-24">
                                        <BarChart width={200} height={60} data={linechart}>
                                            <Bar dataKey="uv" fill="#8884d8" />
                                        </BarChart>
                                    </div>
                                    <Button onClick={() => handelLogs('userlog')} variant="contained" size="small" color="primary" className={classes.margin}>
                                        View Logs
        </Button>
                                </Paper>
                                {/* <UserLogs getBlogs={getBlogs} /> */}
                            </Grid>
                            <Grid item xs={12} md={5} lg={5}>
                                <Paper elevation={3}>
                                    <h6 className="md:text-2xl pt-2 text-gray-900 font-black text-center" style={{fontFamily: 'Paytone One'}}>Blogs</h6>
                                    <h6 className="md:text-1xl text-gray-900 font-black text-center" style={{ fontFamily: 'Open Sans'}}>A detailed log of blog can be viewed here.</h6>
                                    <div className="ml-24">
                                        <AreaChart
                                            width={200}
                                            height={60}
                                            data={linechart}
                                            margin={{
                                                top: 5, right: 0, left: 0, bottom: 5,
                                            }}
                                        >
                                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                        </AreaChart>
                                    </div>
                                    <Button onClick={() => handelLogs('bloglog')} variant="contained" size="small" color="primary" className={classes.margin}>
                                        View Logs
                                    </Button>
                                </Paper>
                                {/* <UserLogs getBlogs={getBlogs} /> */}
                            </Grid>
                            <Grid item xs={12} md={10} lg={10}>
                                <Paper elevation={3}>
                                    <h6 className="md:text-2xl pt-2 text-gray-900 font-black text-center" style={{fontFamily: 'Paytone One'}}>Survey Details</h6>
                                    <h6 className="md:text-1xl text-gray-900 font-black text-center" style={{ fontFamily: 'Open Sans'}}>A detailed log of users who started journey can be viewed here.</h6>
                                    <div className="ml-4 md:ml-56 lg:ml-56">
                                        <LineChart width={300} height={100} data={serveyDetails}>
                                            <Line type="monotone" dataKey="pv" dot={false} stroke="#8884d8" strokeWidth={2} />
                                        </LineChart>
                                    </div>
                                    <Button onClick={() => handelLogs('serwaylog')} variant="contained" size="small" color="primary" className={classes.margin}>
                                        View Logs
                                    </Button>
                                </Paper>
                                {/* <UserLogs getBlogs={getBlogs} /> */}
                            </Grid>
                        </Grid>

                    </React.Fragment>
                    : ""
            }
            {
                ShowUser ?
                    <React.Fragment>

                        <Grid
                            style={{
                                margin: '4rem 0rem 0rem 0rem',
                                height: '100vh',
                                background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'
                            }}
                            container
                            direction="row"
                            justify="center"
                            spacing={3}>
                            <Grid item xs={12} md={12} lg={12} >
                                <UserLogs UserLogsDetails={UserLogsDetails} />
                            </Grid>
                        </Grid>
                    </React.Fragment>
                    : ""
            }
            {
                ShowBlogs ?
                    <React.Fragment>

                        <Grid
                            style={{
                                margin: '4rem 0rem 0rem 0rem',
                                height: '100vh',
                                background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'
                            }}
                            container
                            direction="row"
                            justify="center"
                            spacing={3}>
                            <Grid item xs={12} md={12} lg={12} >
                                <BlogLogs getBlogs={getBlogs} />
                            </Grid>
                        </Grid>
                    </React.Fragment>
                    : ""
            }
            {
                ShowSerway ?
                    <React.Fragment>

                        <Grid
                            style={{
                                margin: '4rem 0rem 0rem 0rem',
                                height: '100vh',
                                background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'
                            }}
                            container
                            direction="row"
                            justify="center"
                            spacing={3}>
                            <Grid item xs={12} md={12} lg={12} >
                                <SerwayData SerwayDetails={SerwayDetails} />
                            </Grid>
                        </Grid>
                    </React.Fragment>
                    : ""
            }
            {
                postBlog ?
                    <PostBlog /> : ""
            }
            {
                editBlog ?
                    <Grid
                        style={{ margin: '4rem 1rem' }}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}>
                        <EditBlog />
                    </Grid>
                    : <React.Fragment></React.Fragment>

            }
        </div>
    );
}
