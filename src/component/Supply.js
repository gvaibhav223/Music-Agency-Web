import {
     Grid ,
     makeStyles,
     TextField,
     Typography,

    } from '@material-ui/core';
import React from 'react';


const useStyle=makeStyles((theme)=>({
    
    typography:{
        marginTop:'20px',
    },
    textfield:{
        marginTop:'10px',
        marginRight:'20px'
    }
}));

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


export default Supply;