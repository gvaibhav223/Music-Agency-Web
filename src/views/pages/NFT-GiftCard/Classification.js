import React from 'react' 
import './Name.css'
import './Stepper.css'
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { Box,Typography ,Grid,TextField,TextareaAutosize,Container,Card,CardMedia,CardContent,CardActionArea} from '@material-ui/core'
export default function Class(){
    return(<div>
      
              <Grid item container direction='column' lg={6}> 
<Container style={{marginLeft:"50px"}}>
<Typography variant="" component="h1">Classification</Typography>
<div style={{marginTop:"40px"}}>
    <div style={{display:"flex",flexWrap:"wrap"}}>
  <div><Typography variant="textprimary" component="h2">
       1st Category
   </Typography ></div>
   <div><Typography variant="textprimary" component="h2" style={{marginLeft:"180px"}}>
      Value
   </Typography ></div>
   </div>
   <div style={{display:"flex",flexWrap:"wrap",}}>
   <div>
   <TextField variant="outlined"  placeholder=" Voucher" style={{width:"250px"}}/></div>
   <div>
   <TextField variant="outlined"  placeholder=" 20" style={{marginLeft:"80px",width:"250px"}}/></div>
   </div>
</div>
<div style={{marginTop:"40px"}}>
    <div style={{display:"flex",flexWrap:"wrap"}}>
  <div><Typography variant="textprimary" component="h2">
       2nd Category
   </Typography ></div>
   <div><Typography variant="textprimary" component="h2" style={{marginLeft:"180px"}}>
      Value
   </Typography ></div>
   </div>
   <div style={{display:"flex",flexWrap:"wrap",}}>
   <div>
   <TextField variant="outlined"  placeholder=" Shopping" style={{width:"250px"}}/></div>
   <div>
   <TextField variant="outlined"  placeholder="Amazon" style={{marginLeft:"80px",width:"250px"}}/></div>
   </div>
</div>
<div style={{marginTop:"40px"}}>
    <div style={{display:"flex",flexWrap:"wrap"}}>
  <div><Typography variant="textprimary" component="h2">
       3rd Category
   </Typography ></div>
   <div><Typography variant="textprimary" component="h2" style={{marginLeft:"180px"}}>
      Value
   </Typography ></div>
   </div>
   <div style={{display:"flex",flexWrap:"wrap",}}>
   <div>
   <TextField variant="outlined"  placeholder=" Shopping" style={{width:"250px"}}/></div>
   <div>
   <TextField variant="outlined"  placeholder="Online" style={{marginLeft:"80px",width:"250px"}}/></div>
   </div>
</div>
<div style={{marginTop:"40px"}}>
    <div style={{display:"flex",flexWrap:"wrap"}}>
  <div><Typography variant="textprimary" component="h2">
      Keywords
   </Typography ></div>
   </div>
   <div style={{display:"flex",flexWrap:"wrap",}}>
   <div>
   <TextField variant="outlined"  placeholder=" Shopping" style={{width:"580px"}}/></div>

   </div>
</div>
<div style={{display:"flex",justifyContent:"right",flexWrap:"wrap", marginLeft:"800px",marginTop:"-600px"}}>
    
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
    

 <Typography variant='' component="h2" style={{marginTop:'-0px',marginBottom:'20px',color:"grey"}}>
 URL : http://amazon.com<br/>

Use this gift voucher at amazon online shop<br/>

Redeemable : 25 %<br/>
      To redeem your gift , visit our marketplace at<br />

https://r2v4.com, select this gift card from<br/> your

NFT and clickthe redeem button, follow <br/> the instructions, its quick and easy.<br />
Redeemable expiration date : 09 . 03 . 2022<br/><br/>Unloackable content : Visit Amazon.com to <br />spend your Voucher during your next <br/>purchase
      </Typography>
     
     </Grid>
     </Grid>
   


    </div>)
}