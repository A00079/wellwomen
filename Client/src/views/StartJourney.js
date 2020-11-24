import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Header from "../../src/components/Header/Header.js";
import Header from "../components/StartJourny/HeaderStartJourney";
// import HeaderLinks from "../../src/components/Header/HeaderLinks.js";
import HeaderLinks from "../components/StartJourny/HeaderLinkStartJourney";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import CustomButton from "../../src/components/CustomButtons/Button.js";
import ServewayForm from "../components/StartJourny/ServewayForm.js";
import AgeGroup from "../components/StartJourny/AgeGroup.js";
import { notify } from 'react-notify-toast'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Goal from "../../src/components/StartJourny/Goal.js"
import ActivityLevel from "../../src/components/StartJourny/ActivityLevel.js"
import EatHabbit from "../../src/components/StartJourny/EatHabbit.js"


const useStyles = makeStyles((theme) => ({
  appbarroot: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  dropdownLink: {
    marginLeft: '20px'
  },
  title: {
    flexGrow: 1,
  },
  cardroot: {
    maxWidth: 345,
  },
  cardcenter: {
    textAlign: '-webkit-center'
  },
  root: {
    width: '100%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  footer: {
    textAlign: 'center'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['','','','',''];
  // return ['Select your age group.', 'Select your goal.', 'Select your activity level.', 'Select your eating habbits.', 'Completed.'];
}



const HorizontalLabelPositionBelowStepper = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <AgeGroup handleNext={handleNext} />;
      case 1:
        return <Goal handleNext={handleNext} />;
      case 2:
        return <ActivityLevel handleNext={handleNext} />;
      case 3:
        return <EatHabbit handleNext={handleNext} />;
      case 4:
        return <ServewayForm />;
      default:
        return 'Unknown stepIndex';
    }
  }
  return (
    <div className={classes.root}>
      <Header
        brand="Well Woman"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Stepper activeStep={activeStep} alternativeLabel className="mt-32">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={12}>
              <div className={classes.footer}>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>All steps completed</Typography>
                  </div>
                ) : (
                    <div>
                      <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                    </div>
                  )}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
HorizontalLabelPositionBelowStepper.propTypes = {
  journeydata: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  journeydata: state.startjourney
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(HorizontalLabelPositionBelowStepper));
