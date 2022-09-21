import React from 'react' 
import './Name.css'
import {Typography ,TextField,Container,Grid} from '@material-ui/core'

import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles, withStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
 text:{
     height:"700px",
 },
  }));
  export default function Name(){
    const classes = useStyles();
    return(<div>
<Grid container direction='row' spacing={8} lg={12}>
      <Grid item container direction='column' lg={6}>
      <Container style={{marginLeft:"50px"}}>
      <Typography variant='' component="h2" style={{marginTop:'35px',marginBottom:'5px',}}>
Unlockable content</Typography>
     <div className="res">
            <TextField
              id="unlockable"
             
              variant="outlined"
              placeholder=" No, this NFT does not include unlockable content"
              margin="normal"
              multiline
              style={{width:"550px"}}
            />
            </div>
        <Typography variant="body2"  style={{marginBottom:'25px',color:"grey"}}>      
        </Typography>
      
        </Container>     
      </Grid>
      <Grid item container direction='column' lg={6}> 
<Container>
<div>
<Typography variant='h5' style={{marginTop:'35px',marginBottom:'5px',color:"grey",}}>
The Tulip Preview
</Typography>

<div >
<img src='download.jpg'className="res" style={{objectFit:'cover',height:"250px",width:"400px"}}></img>
</div>
</div>
</Container>
      </Grid>
      <Grid item container direction='row' justify='flex-end'>
     <Grid item container direction='column' justify='flex-end' lg={6}>
    

 <Typography variant='h5' component="body2" style={{marginBottom:'10px',color:"grey",marginLeft:"50px",}}>
 The Tulip Garden in Netherland<br/><br/>
 Redeemable expiration date : 30 . Nov . 2022
      </Typography>
     </Grid>
     </Grid>
      </Grid>
      </div>)
}