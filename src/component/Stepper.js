import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Stepper,Grid,Typography ,Step,StepLabel, Paper, Box, Card, CardActionArea, CardMedia, CardContent} from '@material-ui/core';
import {Button,TextField} from '@material-ui/core';
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
  } from "react-hook-form";
  import Supply from './Supply';
import DoneIcon from '@material-ui/icons/Done';
const useStyles = makeStyles((theme) => ({
  root: {
  marginTop:'150px',
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  typography:{
    marginTop:'7px',
    marginLeft:'7px',
    marginRight:'7px',
    width:'200px',
   
  },
  textfield:{
    width:'400px'
  },
}));

function getSteps() {
  return ['R2V4 Gift card','Name & Image','Roodomobic','Unlocked','Classification', 'supply & value','Review'];
}
const Giftcard = () => {
  const [file, setFile] = useState("");

 
    const { control } = useFormContext();
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
  const Nameimg=()=>{
    const classes=useStyles();
    const handleChange1=(e)=>{
      // setData({...data,Nftcategory:e.target.value})
    }
    return (
      <>
          <div >
    <Grid container direction='column'>
<Grid item container direction='row' style={{marginBottom:'20px',display:'flex'}} >
<Typography variant="h6" align='left' className={classes.typography}>
        NFT Category
    </Typography>
        <TextField
             className={classes.textfield}
              id="Nftcategory"
              variant="outlined"
              placeholder="category name"
               onchange={handleChange1}
             
            />
</Grid>
<Grid container  item direction='row' style={{marginBottom:'20px'}}>
<Typography align='left' variant="h6"  className={classes.typography}>
       Description
    </Typography>
            <TextField
            className={classes.textfield}
              id="description"
              variant="outlined"
              placeholder="Nft description"
             multiline
            rows={4} />
</Grid>
<Grid container  item direction='row' style={{marginBottom:'20px'}}>
<Typography align='left' variant="h6"  className={classes.typography}>
External Link
    </Typography>
            <TextField
              className={classes.textfield}
              id="externallink"
              variant="outlined"
              placeholder=" external link"
            />
</Grid>
<Grid  container item direction='row' style={{marginBottom:'20px'}}>
<Typography align='left' variant="h6"  className={classes.typography}>
       upload image
    </Typography>
            <TextField
            type='file'
           className={classes.textfield}
              id="uploadimage"
              variant="outlined"
              placeholder="upload image"
            />
</Grid>
</Grid>
    </div>
      </>
    );
  }
  const Roodomobic=()=>{
    return (
      <>
       <Grid container direction='row' spacing={8}>
      <Grid item container direction='column' lg={6}>
      <Typography style={{marginTop:'15px'}}>
Redeemable description & redeem instruction
       </Typography>
       <Typography style={{marginTop:'25px'}}>
       This gift card embed a gift for you, it's a certain amount of BNB, the Binanace crypto coin.
      </Typography>
      <Typography style={{marginTop:'25px',marginBottom:'70px'}}>
      To redeem your gift , visit our marketplace at

https://r2v4.com, select this gift card from your

NFT and clickthe redeem button, follow the instructions, its quick and easy.
      </Typography>
      </Grid>
      <Grid item container direction='column' lg={5} justify='flex'>
<Typography style={{marginTop:'15px',marginBottom:'20px'}}>
80's year Birthday
</Typography>
<img src='download.jpg' style={{objectFit:'cover',height:'60%'}}></img>
<Typography style={{marginTop:'15px'}}>
The Gift card to celebrate 80 year   birthday
</Typography>
      </Grid>
      </Grid>


      </>
    );
  }
const Unlocked=()=>{
    const { control } = useFormContext();
    return (
      <> <Grid container direction='row' spacing={8} lg={12}>
      <Grid item container direction='column' lg={6}>
      <Typography variant='h6' align='left' style={{marginTop:'15px',marginBottom:'25px'}}>
Unlockable content</Typography>
     
            <TextField
              id="unlockable"
              label="unlockable"
              variant="outlined"
              placeholder="Enter value"
              margin="normal"
              multiline
              rows={7}
            
            />
        <Typography  style={{marginTop:'0px',marginBottom:'25px'}}>
        Max. 500 characters, plain text only, no HTML formatting alloweed
        </Typography>
      </Grid>
      <Grid item container direction='column' lg={6}> 
<Typography variant='h6' style={{marginTop:'15px',marginBottom:'20px'}}>
80's year Birthday
</Typography>
<img src='download.jpg' style={{objectFit:'cover',height:'60%'}}></img>

      </Grid>
      <Grid item container direction='row' justify='flex-end'>
     <Grid item container direction='column' justify='flex-end' lg={6}>
    
     <Typography variant='h6' style={{marginTop:'0px'}}>
The Gift card to celebrate 80 year   birthday
</Typography> <Typography variant='h6'>
This gift card embed a gift for you, it's a certain amount of BNB, the Binanace crypto coin.
</Typography>
 <Typography variant='h6' style={{marginTop:'35px',marginBottom:'20px'}}>
      To redeem your gift , visit our marketplace at

https://r2v4.com, select this gift card from your

NFT and clickthe redeem button, follow the instructions, its quick and easy.
      </Typography>
     </Grid>
     </Grid>
      </Grid>


      </>
      
    
    );
}
const Classification=()=>{
    const { control } = useFormContext();
    const Fielddata=[
      {
        label:'1st Category',
      }
    ,
    {
      label:'2nd Category'
    },
    {
      label:'3rd Category',
    },
    ];
    const Fielddata2=[
      {label:'value'},
      {label:'value'},
      {label:'value'}
    ];
    return (
      <>
      <Grid container  lg={12} spacing={3} spacing={8} >
       <Grid item container direction='row'   lg={6} spacing={3} >
       <Grid container item direction='column'  lg={6}>
{
        Fielddata.map(({ label,i }) => {
          return(
        <div key={i}>
              <Typography variant='h6' align='left' style={{display:''}}>{label}</Typography>
        <Controller 
          control={control}
          name="category"
          render={({ field }) => (
            <TextField
              id="category"
              variant="outlined"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        </div>
          );
        })}
        
</Grid>
<Grid container item direction='column' lg={6}>
{
        Fielddata2.map(({ label,i }) => {
          return(
        <div key={i}>
              <Typography variant='h6' align='left'>{label}</Typography>
        <Controller 
          control={control}
          name="category"
          render={({ field }) => (
            <TextField
              id="category"
              variant="outlined"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        </div>
          );
        })}
</Grid>
  <Grid item container direction='column' lg={12}>
<div>
              <Typography variant='h6' align='left'>Keywords</Typography>
        <Controller 
          control={control}
          name="category"
          render={({ field }) => (
            <TextField
              id="category"
              variant="outlined"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
       </div>
       
</Grid>
  </Grid>
  <Grid item container direction='column'  lg={6}>

  <Typography variant='h6' style={{marginTop:'15px',marginBottom:'20px'}}>
80's year Birthday
</Typography>
<img src='download.jpg' style={{objectFit:'cover',height:'60%'}}></img>
<Typography variant='h6' style={{marginTop:'15px'}}>
The Gift card to celebrate 80 year   birthday
</Typography>

  </Grid>
  <Grid item container justify='flex-end'>
 <Grid item container justify='flex-end' lg={6}>
 <Typography variant='h6' style={{marginTop:'20px',}}>
This gift card embed a gift for you, it's a certain amount of BNB, the Binanace crypto coin.
</Typography>
 <Typography variant='h6' style={{marginTop:'20px',marginBottom:'40px'}}>
      To redeem your gift , visit our marketplace at

https://r2v4.com, select this gift card from your

NFT and clickthe redeem button, follow the instructions, its quick and easy.
      </Typography>
 </Grid>
  </Grid>

   </Grid>
       
      </>
    );
}
const Reviow=()=>{
     const { control } = useFormContext();
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
function getStepContent(step) {
 
  switch (step) {
    case 0:
      return <Giftcard/>;
    case 1:
      return <Nameimg/>;
    case 2:
      return <Roodomobic/>;
    case 3:
      return <Unlocked/>;
    case 4:
        return <Classification/>;
        case 5:
          return <Supply/>;
        case 6:
            return <Reviow/>;
    default:
      return 'Unknown step';

  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
 let [activeNext,setactiveNext]=useState({'0':0,'1':0,'2':0,'3':0,'4':0,'5':0});
  // const [data,setData]=useState({ Nftcategory: "",
  // description: "",
  // externallink: "",
  // uploadimage: "",});
  const methods = useForm({
    defaultValues: {
      Nftcategory: "",
      description: "",
      externallink: "",
      uploadimage: "",
    },
  });
  const isStepOptional = (step) => {
    return step !== 5;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
 if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => {
      setactiveNext((activeNext)=>{
        const back=prevActiveStep+1;
        console.log(back);
        return({...activeNext,[back.toString()]:back})
      });
      console.log(activeNext);
      return (prevActiveStep + 1)});

    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      setactiveNext((activeNext)=>{
        const back=prevActiveStep;
        return({...activeNext,[back.toString()]:0});
      });
      return(prevActiveStep - 1)});
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setactiveNext((activeNext)=>{return({...activeNext,'0':0,'1':0,'2':0,'3':0,'4':0,'5':0})});
    console.log(activeNext)
  };

  return (
    <div className={classes.root}>
      <div style={{width:'100%'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
            <div style={{height:'80px',width:'160px',position:'relative'}}>
            <div style={{zIndex:'1',borderRadius:'5px',backgroundColor:'#3f51b5',height:'80px',width:'80px',position:'absolute'}}>
           </div>
           <div style={{zIndex:'1',backgroundColor:'#3f51b5',height:'20px',width:'20px',position:'absolute',top:'30px',right:'70px',transform:'rotate(45deg)',}}>
           </div>
           <div style={{position:'absolute',zIndex:'2', backgroundColor:'white',borderRadius:'50px' ,height:'30px',width:'30px',top:'23px',left:"25px",textAlign:'center',}}>
{
  activeNext[index]===index ?(<DoneIcon style={{color:'#3f51b5'}}/>):(<h8 style={{textAlign:'center'}}>
            {index}
            </h8>)

}           </div>
           <Typography variant='h8' align='right' style={{zIndex:'2',position:'absolute',left:'95px',top:'25px'}}>
           {label}
         </Typography>
            </div>
           
        
            </Step>
          );
        })}
      </Stepper>
      </div>
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
           <center style={{marginBottom:'50px'}}>
           <div style={{marginTop:'20px',height:'auto',marginBottom:'50px'}} >
          <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(handleNext)}>
            <div style={{border:'1px solid black', height:'auto',padding:'20px 0px 20px 70px',width:'55%',justifyContent:'center',boxShadow:"2px 2px 4px 4px grey",borderRadius:"10px"}}>
              <center>
              {getStepContent(activeStep)}
             <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}>
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
               onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            
              </center></div>
            </form>
          </FormProvider>
        </div>
        </center> 
        )}
      </div>
      
    </div>
  );
}
