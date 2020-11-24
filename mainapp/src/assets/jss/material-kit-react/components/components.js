import { container } from "../../material-kit-react.js";

const componentsStyle = theme => ({
  container,
  startbtn: {
    fontWeight: "bolder",
    textAlign: 'center',
    [theme.breakpoints.down("md")]: {
      padding: '0.8rem 1rem !impotant'
    }
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    margin: "0px 0px 0px 0px",
    fontSize: "350%",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.39rem",
    maxWidth: "500px",
    margin: "0px 0 10px 0"
  },
  main: {
    background: "#ffffff",
    position: "relative",
    zIndex: "3"
  },
  RaisedCardMain: {
    height: '350px',
    [theme.breakpoints.down("sm")]: {
      height: 'auto'
    }
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("sm")]: {
      margin: "-60px 15px 0px",
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
});

export default componentsStyle;
