/*eslint-disable*/
import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// import Button from "../CustomButtons/Button.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import { logoutUser } from "../../actions/authActions";
import * as Scroll from 'react-scroll';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import HomeIcon from '@material-ui/icons/Home';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import InfoIcon from '@material-ui/icons/Info';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
const useStyles = makeStyles(styles);
let DirectLinkDiv = Scroll.Link;

const HeaderLinks = (props) => {
    const classes = useStyles();
    const [handeldropdown, sethandeldropdown] = useState(null)

    useEffect(() => {
        console.log('props', props)
        if ("authorizer" in localStorage) {
            sethandeldropdown(true)
        } else {
            sethandeldropdown(false)
        }
    }, [props])
    const onLogoutClick = () => {
        props.logoutUser();
    };
    return (
        <List className={classes.list}>
            <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)' }} className={classes.listItem}>
                <Link to='/'>
                <HomeIcon /> Home
                </Link>
            </ListItem>
            <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)' }} className={classes.listItem}>
                <Link to="/dashboard"><ChromeReaderModeIcon /> Blogs</Link>
            </ListItem>
            <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)' }} className={classes.listItem}>
                <Link to="/pricing"><MonetizationOnIcon /> Pricing</Link>
            </ListItem>
            <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)' }} className={classes.listItem}>
                <Link to="/singleaboutus"><InfoIcon /> About us</Link>
            </ListItem>
            <ListItem style={{ padding: '16px 7px',color: 'rgb(208, 15, 127)' }} className={classes.listItem}>
                <Link to="/YoutubeVideos"><YouTubeIcon /> Youtube</Link>
            </ListItem>
            {/* <ListItem className={classes.listitemdrop}>
                <ListItem className={classes.listItem}>
                    <Button style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }} variant="contained" size="small" color="primary" onClick={() => onLogoutClick()}>
                        Logout
                    </Button>
                </ListItem>
            </ListItem> */}
        </List>
    );
}

HeaderLinks.propTypes = {
    is_admin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    is_admin: state.is_admin
});

export default connect(
    mapStateToProps, { logoutUser }
)(HeaderLinks);