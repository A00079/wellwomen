import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import logo from '../../assets/img/logo.png';
import logoBW from '../../assets/img/logo_BW.png';
//background: -webkit-linear-gradient(to right, #833ab4, #fd1d1d, #fcb045); /* Chrome 10-25, Safari 5.1-6 */
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';

import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import YouTubeIcon from '@material-ui/icons/YouTube';
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "../../assets/jss/material-kit-react/components/headerStyle.js";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import EqualizerIcon from '@material-ui/icons/Equalizer';
const useStyles = makeStyles(styles);
let DirectLinkDiv = Scroll.Link;


export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setisScrolled] = React.useState(null);
  const [isloggedIn, setisloggedIn] = React.useState(false);
  React.useEffect(() => {
    if ("authorizer" in localStorage) {
      setisloggedIn(true)
    } else {
      setisloggedIn(false)
    }

    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const onLogoutClick = () => {
    setisloggedIn(false)
    props.logoutUser();
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent =
    <Link to='/'> <img style={{
      width: '10rem',
      height: '3rem'
    }} className={classes.title} src={logo} />
    </Link>
  return (
    <AppBar style={{ opacity: '0.9' }} className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
              brandComponent
            )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu style={{ color: '#D00F7F' }} />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            <List>
              <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)' }} className={classes.listItem}>
                <Link to='/'>
                  <HomeIcon /> Home
                  </Link>
              </ListItem>
              <Divider />
              <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)' }} className={classes.listItem}>
                <DirectLinkDiv
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <InfoIcon /> About</DirectLinkDiv>
              </ListItem><Divider />

              <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)' }} className={classes.listItem}>
                <DirectLinkDiv
                  to="ourwork"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <TransferWithinAStationIcon />Transformation</DirectLinkDiv>
              </ListItem><Divider />
              <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)' }} className={classes.listItem}>
                <DirectLinkDiv
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <EmojiPeopleIcon /> Testimonials</DirectLinkDiv>
              </ListItem><Divider />
              <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)' }} className={classes.listItem}>
                <DirectLinkDiv
                  to="stats"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <EqualizerIcon /> Stats</DirectLinkDiv>
              </ListItem><Divider />
              <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)' }} className={classes.listItem}>
                <DirectLinkDiv
                  to="contactus"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <ContactMailIcon /> Contact Us</DirectLinkDiv>

              </ListItem>
              <Divider />
              {
                isloggedIn ?
                  <Link to="/dashboard">
                    <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)', textDecoration: 'none' }} className={classes.listItem}>
                      <ChromeReaderModeIcon /> Blogs
                    </ListItem>
                  </Link>
                  :
                  <Link to="/dashboard">
                    <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)', textDecoration: 'none' }} className={classes.listItem}>
                    <ChromeReaderModeIcon /> Blogs
                    </ListItem>
                  </Link>
              }

              <Divider />
              <Link to="/YoutubeVideos">
                <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)', textDecoration: 'none' }} className={classes.listItem}>
                  <YouTubeIcon /> Youtube
              </ListItem>
              </Link>
              <Divider />
            </List>
            {/* <List>
              {
                isloggedIn ?
                  <ListItem className={classes.listItem}>
                    <Button style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }} variant="contained" size="small" color="primary" onClick={() => onLogoutClick()}>
                      Logout
                    </Button>
                  </ListItem>
                  :
                  <ListItem style={{ width: '15rem', fontFamily: 'Paytone One' }}>
                    <Button variant="contained" color="primary" style={{ width: '100%', paddingRight: '20px' }}>
                      <Link to="/login" className={classes.dropdownLink}>
                        <span style={{ fontFamily: 'Paytone One' }}>Sign In</span>
                      </Link>
                    </Button>
                    <Button variant="contained" color="secondary" style={{ width: '100%' }}>
                      <Link to="/signup" className={classes.dropdownLink}>
                        <span style={{ fontFamily: 'Paytone One' }}> Sign Up</span>
                      </Link>
                    </Button>
                  </ListItem>
              }

            </List> */}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "darkpink",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
