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
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "../../assets/jss/material-kit-react/components/headerStyle.js";

const useStyles = makeStyles(styles);
let DirectLinkDiv = Scroll.Link;


export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    // if (props.changeColorOnScroll) {
    //   window.addEventListener("scroll", headerColorChange);
    // }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
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
  <Link to='/'>
    <img style={{width: '10rem',
    height: '3rem'}} className={classes.title} src={logo} />
  </Link>
  return (
    <AppBar className={appBarClasses}>
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
            <Menu />
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
            <Link to='/'>
              <ListItem style={{padding: '16px 7px'}} className={classes.listItem}>
                <DirectLinkDiv
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home</DirectLinkDiv>
              </ListItem></Link>
              <Divider />
              <Link to='/singleaboutus'>
              <ListItem style={{padding: '16px 7px'}} className={classes.listItem}>
                <DirectLinkDiv
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About</DirectLinkDiv>
              </ListItem></Link>
              <Divider />
              <Link to='/YoutubeVideos'>
              <ListItem style={{padding: '16px 7px'}} className={classes.listItem}>
                <DirectLinkDiv
                  to="ourwork"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Youtube</DirectLinkDiv>
              </ListItem></Link>
              <Divider />
              <Link to='/pricing'>
              <ListItem style={{padding: '16px 7px'}} className={classes.listItem}>
                <DirectLinkDiv
                  to="ourwork"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Pricing</DirectLinkDiv>
              </ListItem></Link>

              {/* {['Home', 'About', 'Our Work', 'Pricing', 'Stats', 'Contact Us', 'Blogs','Youtube'].map((text, index) => (
                <React.Fragment  key={index}>
                  <ListItem button key={index}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText key={index} primary={text} />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))} */}
            </List>
            {/* <List style={{
              position: 'absolute',
              bottom: '0px'
            }}>
              <ListItem style={{width: '15rem'}}>
                <Button variant="contained" color="primary" style={{ width: '100%' }}>
                  <Link to="/login" className={classes.dropdownLink}>
                    SignIn
                  </Link>
                </Button>
              </ListItem>
              <ListItem style={{width: '15rem'}}>
                <Button variant="contained" color="secondary" style={{ width: '100%' }}>
                  <Link to="/signup" className={classes.dropdownLink}>
                    Sign Up
                  </Link>
                </Button>
              </ListItem>
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
