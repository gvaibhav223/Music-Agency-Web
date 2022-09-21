import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import './Stepper.css'
import Review from './Review'
import Nameimg from './Nameimg'
import Unlockable from './Unlockable'
import Classification from './Classification2'
import Supply from './Supply'
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import {Stepper,Grid,Typography ,Step,StepLabel, Container} from '@material-ui/core';
import {Button} from '@material-ui/core';
const QontoConnector = withStyles({
    alternativeLabel: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    active: {
      '& $line': {
        borderColor: '#784af4',
      },
    },
    completed: {
      '& $line': {
        borderColor: '#784af4',
      },
    },
    line: {
      borderColor: '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })(StepConnector);
  
  const useQontoStepIconStyles = makeStyles({
    root: {
      color: '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
    },
    active: {
      color: '#784af4',
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
  });
  
  function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
      </div>
    );
  }
  
  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
  };
  

  
 
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
 
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    button2:{ 
      marginTop:"50px",
      color:"white",
      marginRight:"30px",
        marginBottom:"30px",
      height:"29px",
      fontSize:"12px",
      '&:hover': {
      backgroundColor:"#0CAFFF"
      },
      width:"110px",
      backgroundColor:"#0CAFFF"
       },
  }));
  
  function getSteps() {
    return (['R2V4 Non-Collectibles','Name & Image','Unlockable','Classification','Supply &Value', 'Review']);
  }
  const Giftcard = () => {
    const [file, setFile] = useState("");
      function handleChange(e) {
        let url = URL.createObjectURL(e.target.files[0]);
        setFile(url)
        console.log(url)
    }
  
  
      return (
        <>
  
        </>
      );
    };

const useStyle=makeStyles((theme)=>({
    
    typography:{
        marginTop:'20px',
    },
    textfield:{
        marginTop:'10px',
        marginRight:'20px'
    }
}));
  function getStepContent(step) {
    switch (step) {
        case 0:
      return <Giftcard /> ;
    case 1:
      return <Nameimg/>;
    case 2:
      return  <Unlockable/> ;
    case 3:
      return <Classification />;
    case 4:
        return <Supply/>;
    case 5:
        return <Review />;    
    default:
      return 'Unknown step';
    }
  }
  
  export default function CustomizedSteppers() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(1);
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
        
      <div className={classes.root} style={{marginTop:"150px"}}>
          <div>
      <  Typography variant="" component="h1" className="Typostep" style={{marginLeft:"140px"}}> Create your NFT</Typography>
    </div>
       <div >
        <Stepper  className="Step" style={{backgroundColor:"#f5ffff"}} alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
            </Step>
          ))}
         
        </Stepper>
        </div>
        <hr className="hr" />
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>

              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <center>
              <div>
            
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button,classes. button2}>
                  Back
                </Button>
                <Button
                  variant="contained"
                 
                  onClick={handleNext}
                  className={classes.button,classes. button2}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'SUBMIT'}
                </Button>
              </div>
              </center>
            </div>
          )}
        </div>
      </div>
     
    );
  }
