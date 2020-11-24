import { defaultFont } from "../../material-kit-react.js";

import tooltip from "../../material-kit-react/components/tooltipsStyle.js";

const headerLinksStyle = theme => ({
  list: {
    ...defaultFont,
    fontSize: "0.8rem",
    // fontWeight: "bolder",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  },
  listItem: {
    textTransform: 'uppercase',
    fontWeight: '200 !important',
    fontFamily: 'Paytone One',
    cursor: 'pointer',
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    marginLeft: "1.2rem",
    paddingLeft: "0",
    "&:hover": {
      background: '#D00F7F',
      padding: '10px',
      borderRadius: '4px',
      color: 'white !important',
      transition: 'all 0.3s ease-in-out'
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0px",

      // "&:after": {
      //   width: "calc(100% - 30px)",
      //   content: '""',
      //   display: "block",
      //   height: "1px",
      //   marginLeft: "15px",
      //   backgroundColor: "#e5e5e5"
      // }
    }
  },
  listitemdrop: {
    padding: '0px',
    margin: '-6px 0px 0px 40px',
    cursor: 'pointer',
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    marginLeft: "40px",
    paddingLeft: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "#D00F7F"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px"
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  },
  dropdownLink: {
    textTransform: 'uppercase',
    fontWeight: '200 !important',
    fontFamily: 'Paytone One !important',
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px",
      "&:hover,&:focus": {
        backgroundColor: '#D00F7F'
      },
    }
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px"
  }
});

export default headerLinksStyle;
