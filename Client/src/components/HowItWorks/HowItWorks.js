import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HowItWorksCard from '../../components/Card/HowItWorksCard.js';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '0rem',
    [theme.breakpoints.down("sm")]: {
      marginTop: '1rem',
    }
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  container: {
    width: '50%',
    paddingBottom: '50%',
    margin: '10% auto',
    position: 'relative',
    overflow: 'hidden',
  },
  container_img: {
    position: 'absolute',
    height: '100%'
  }
}));

function getSteps() {
  return ['Choose Your Program', 'Brainstorm With Your Buddy', 'Join Our Community', 'Break Through Plateaus', 'Celebrate Your Milestones'];
}

function getStepContent(stepIndex) {
  const classes = {
    container: {
      width: '50%',
      paddingBottom: '50%',
      margin: '10% auto',
      position: 'relative',
      overflow: 'hidden',
    },
    container_img: {
      position: 'absolute',
      height: '100%'
    }
  }

  switch (stepIndex) {
    case 0:
      return <HowItWorksCard image={require("../../assets/img/hw_1.jpg")} />;
    case 1:
      return <HowItWorksCard image={require("../../assets/img/hw_2.jpg")} />;
    case 2:
      return <HowItWorksCard image={require("../../assets/img/hw_3.jpg")} />;
    case 3:
      return <HowItWorksCard image={require("../../assets/img/hw_4.jpg")} />;
    case 4:
      return <HowItWorksCard image={require("../../assets/img/hw_5.jpg")} />;
    default:
      return <HowItWorksCard image={require("../../assets/img/climb.jpg")} />;
  }
}

export default function HorizontalLabelPositionBelowStepper() {
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

  return (
    <React.Fragment>
      <h1 style={{
        fontStyle: 'normal',
        color: '#4e6073',
        fontFamily: 'Paytone One'
      }} className="sm:text-3xl mb-0 mt-8 font-extrabold md:mb-0 md:mt-16 text-3xl  md:text-4xl font-medium title-font" align="center">
        HOW  <span class="text-indigo-600" style={{color:'#D00F7F'}}> DOES IT WORK?</span>
      </h1>

      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <React.Fragment>
              <h3 style={{ fontFamily: 'Paytone One' }} class="text-3xl sm:text-5xl md:text-4xl md:mt-32 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-0 mt-16 sm:mb-10">
                KNOW <span class="text-indigo-600" style={{ color: '#D00F7F' }}> MORE</span>
              </h3>
              <div class="flex w-full mt-8  md:justify-center justify-center">
                <button style={{ backgroundColor: '#D00f7F', fontFamily: 'Open Sans', color: '#FFF' }} id="ourwork" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <Link to="/singleaboutus" className={classes.dropdownLink}>
                    GO
                  </Link>
                </button>
              </div>
            </React.Fragment>
            // <div style={{width: '50%',margin: '0 auto'}}>
            //   <Typography className={classes.instructions} style={{textAlign: 'center'}}>All steps completed</Typography>
            //   <Button onClick={handleReset} variant="contained" color="primary" style={{width: '100%',margin: '0 auto'}}>Reset</Button>
            // </div>
          ) : (
              <div>
                <h1 style={{ color: '#000' }} className="sm:text-3xl mb-0 md:mb-0 text-2xl md:text-3xl font-medium title-font text-white-600" align="center">
                  {steps[activeStep]}
                </h1>
                <div className={classes.instructions}>
                  {getStepContent(activeStep)}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    style={{ backgroundColor: '#D00f7F', fontFamily: 'Open Sans', color: '#FFF' }}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
              </Button>
                  <Button variant="contained" style={{ backgroundColor: '#D00f7F', fontFamily: 'Open Sans', color: '#FFF' }} onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    </React.Fragment>
  );
}
