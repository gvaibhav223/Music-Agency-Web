import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Nameimg from './Name'
import './Stepper.css'


import Check from '@material-ui/icons/Check';
import Classification from './Classification'
import StepConnector from '@material-ui/core/StepConnector';


import {Stepper,Grid,Typography ,Step,StepLabel, Container} from '@material-ui/core';
import {Button,TextField} from '@material-ui/core';
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
  }));
  
  function getSteps() {
    return (['R2V4 Gift Card','Name & Image', 'Reedemable','Unlockable','Classification','Supply &Value', 'Review']);
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

  const Reedemable=()=>{
    return (
      <>
       <Grid container direction='row' spacing={8}>
      <Grid item container direction='column' lg={6}>
        <Container >
      <Typography style={{marginTop:'15px',fontSize:"35px"}} >
Redeemable description & redeem instruction
       </Typography>
       <Typography style={{marginTop:'25px',fontSize:"25px"}} >
       This gift card embed a gift for you, it's a certain amount of BNB, the Binanace crypto coin.
      </Typography>
      <Typography style={{marginTop:'25px',marginBottom:'70px',fontSize:"25px"}}>
      To redeem your gift , visit our marketplace at

https://r2v4.com, select this gift card from your

NFT and clickthe redeem button, follow the instructions, its quick and easy.
      </Typography></Container>
      </Grid>
      <Grid item container direction='column' lg={5} justify='flex'>
        <Container>
<Typography style={{marginTop:'25px',marginBottom:'20px',fontSize:"25px"}}>
80's year Birthday
</Typography>
<img src='download.jpg'  style={{objectFit:'cover',height:'42%', display:"flex",flexWrap:"nowrap" ,border:" 23px solid rgba(204, 203, 203, 0.945)"}}></img>
<Typography style={{marginTop:'15px',fontSize:"25px"}} >
The Gift card to celebrate 80 <br />year   birthday
</Typography></Container>
      </Grid>
      </Grid>


      </>
    );
  }
const Unlocked=()=>{
  
    return (
      <> <Grid container direction='row' spacing={8} lg={12}>
      <Grid item container direction='column' lg={6}>
      <Container style={{marginLeft:"50px"}}>
      <Typography variant='' component="h2" style={{marginTop:'15px',marginBottom:'5px',}}>
Unlockable content</Typography>
     <div className="res">
            <TextField
              id="unlockable"
             
              variant="outlined"
              placeholder=" Visit Amazon.com to spend your voucher during

              your next purchase"
              margin="normal"
              multiline
              rows={15}
              style={{width:"550px"}}
            />
            </div>
        <Typography variant="body2"  style={{marginBottom:'25px',color:"grey"}}>
        Max. 500 characters,plain text only,no HTML formatting allowed
        
        </Typography>
      
        </Container>     
      </Grid>
      <Grid item container direction='column' lg={6}> 
<Container>
<div>
<Typography variant='h5' style={{marginTop:'35px',marginBottom:'5px',color:"grey",marginLeft:"60px" }}>
Amazon Voucher Preview
</Typography>

<div >
<img src='download.jpg'className="res" style={{objectFit:'cover',height:"150px",width:"400px",borderRadius:"8px"}}></img>
</div>
<Typography variant="h6"  style={{marginBottom:'25px',color:"grey"}}>
The best online shopping experience at<br/> Amazon
        </Typography>
      
</div>
</Container>
      </Grid>
      <Grid item container direction='row' justify='flex-end'>
     <Grid item container direction='column' justify='flex-end' lg={6}>
    

 <Typography variant='' component="h2" style={{marginTop:'-100px',marginBottom:'20px',color:"grey"}}>
 URL : http://amazon.com<br/>

Use this gift voucher at amazon online shop<br/>

Redeemable : 25 %<br/>
      To redeem your gift , visit our marketplace at<br />

https://r2v4.com, select this gift card from<br/> your

NFT and clickthe redeem button, follow <br/> the instructions, its quick and easy.
      </Typography>
     
     </Grid>
     </Grid>
      </Grid>


      </>
      
    
    );
}

const Reviow=()=>{
     
    return (
      <>
       <Grid container direction='row' sm={12} spacing={6}>
<Grid item container direction='column' sm={4}>
<Typography variant='h6' style={{marginTop:'15px',marginBottom:'20px'}}>
80's year Birthday
</Typography>
<img src='download.jpg' style={{objectFit:'cover',height:'60%'}}></img>
<Typography>
  Supply of 99 Gift Cards
</Typography>
<Typography>
  Amount in your faor:BNB 0.010000000000
</Typography>
<Typography>
Royalties : All sales with 5.00 percent to
wallet address : 0x5bandjndioeo78u987
Bounty : One time with 1.25 percent
</Typography> 
<Typography style={{marginTop:'20px'}}>
This Creation is ON SALE
</Typography>
</Grid>
<Grid item container sm={8} direction='column'>
  <Typography>
    Description
  </Typography>
  <Typography>
  The Gift card to celebrate 80 year   birthday
  </Typography>
  <Typography>
  Unlockable 
  </Typography>
  <Typography>
  orem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem
  </Typography>
  <Typography>Redeemable description</Typography>
<Typography>
This gift card embed a gift for you, it's a certain amount of BNB, the Binanace crypto coin
</Typography>
<Typography>
Redeemable instructions
</Typography>
<Typography>
To redeem your gift , visit our marketplace at https://r2v4.com, select this gift card from your NFT and clickthe redeem button, follow the instructions, its quick and easy.
</Typography>
<Typography>
Redeemable expiration date : 30 . Nov . 2022
</Typography>
<Grid item container item direction='row'sm={12}>
<Grid item container item direction='column' sm={2}>
<Typography>
1st  Category : 
</Typography>
<Typography>
2nd  Category :  
</Typography>
</Grid>
<Grid container item direction='column' sm={2}>
<Typography>
Birthday  
</Typography>
<Typography>
Anniversary
</Typography>
</Grid>
<Grid container item direction='column' sm={2}>
<Typography>
80 year
</Typography>
<Typography>
80 year
</Typography>
</Grid>
</Grid>
</Grid>
       </Grid>
      </>
    );
}

const Supply=()=>{
    const classes=useStyle();
    return(

        <Grid cotainer direction='row' sm={12}>
<Grid item container direction='column'> 
<Typography align='left' variant="h6"  className={classes.typography}>
 Amount In your favor 
    </Typography>
            <TextField
              className={classes.textfield}
              id="amount"
              variant="outlined"
              placeholder="Amount"
            />

<Typography  align='left' variant="h6"  className={classes.typography}>
     On Sale
</Typography>
<TextField
    id='sale'
    variant='outlined'
    placeholder='sale'
    className={classes.textfield}
/>
<Grid item container direction='column'>
   <Typography align='left' variant="h6"  className={classes.typography}>
        Artists Royalities
    </Typography>
 
 <Grid item direction='row' container >
 <TextField className={classes.textfield}
id='artists'
variant='outlined'
style={{marginRight:'20px'}}
    />
    <TextField className={classes.textfield}
id='artists'
variant='outlined'

style={{marginRight:'20px'}}
    />
    <TextField className={classes.textfield}
id='artists'
variant='outlined'
placeholder='0x5bsjkdnjnjxndcjfcn88999......'
    />
 </Grid>
 </Grid>
<Grid item container direction='column'>
<Typography align='left' variant="h6"  className={classes.typography}>
        Bounty Commisiions
    </Typography>
<Grid item container direction='row' >
 
    <TextField className={classes.textfield}
        id='bounty'
        variant='outlined'
        
style={{marginRight:'20px',marginBottom:'20px'}}
        
    />
      <TextField className={classes.textfield}
        id='bounty'
        variant='outlined'
        
style={{marginBottom:'20px'}}
        
    />
</Grid>
  
</Grid>
</Grid>
 <Grid item container direction='column' sm={6}>

<Typography variant='h6' style={{marginTop:'15px',marginBottom:'20px'}}>
80's year Birthday
</Typography>
<img src='download.jpg' style={{objectFit:'cover',height:'60%'}}></img>
<Typography variant='h6' style={{marginTop:'15px'}}>
The Gift card to celebrate 80 year   birthday
</Typography>   
</Grid>
        </Grid>
    );
}
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
      return <Giftcard />;
    case 1:
      return <Nameimg/>;
    case 2:
      return <Reedemable/>;
    case 3:
      return <Unlocked/>;
    case 4:
        return <Classification />;
        case 5:
          return <Supply/>;
        case 6:
            return <Reviow />;
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
      <  Typography variant="" component="h1" className="Typostep" style={{marginLeft:"80px"}}> Create your NFT</Typography>
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
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
     
    );
  }
  