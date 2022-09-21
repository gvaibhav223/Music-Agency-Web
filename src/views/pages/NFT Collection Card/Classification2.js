import React from 'react' 
import './Name.css'
import './Stepper.css'
import {Typography ,Grid,TextField,Container,} from '@material-ui/core'
export default function Class(){
    return(<div>
              <Grid item container direction='column' lg={6}> 
<Container style={{marginLeft:"50px"}}>
<Typography variant="" component="h2" style={{marginTop:'35px',marginBottom:'5px',}}>Classification</Typography>
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
   <TextField variant="outlined"  placeholder=" Country" style={{width:"250px"}}/></div>
   <div>
   <TextField variant="outlined"  placeholder="       Netherlands" style={{marginLeft:"80px",width:"250px"}}/></div>
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
   <TextField variant="outlined"  placeholder="        Flower" style={{width:"250px"}}/></div>
   <div>
   <TextField variant="outlined"  placeholder="       Tulip" style={{marginLeft:"80px",width:"250px"}}/></div>
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
   <TextField variant="outlined"  placeholder="        Photography" style={{width:"250px"}}/></div>
   <div>
   <TextField variant="outlined"  placeholder="       Landscape" style={{marginLeft:"80px",width:"250px"}}/></div>
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
   <TextField variant="outlined"  placeholder="    Landscape, tulips, netherlands, garden" style={{width:"580px"}}/></div>
   <Typography style={{marginBottom:'26px',fontSize:"13px",color:"grey",marginTop:"2px"}} variant="p">Keywords, comma separated, as : painting, abstract, blue, sky </Typography>
   </div>
</div>
<div style={{ marginLeft:"690px",marginTop:"-450px"}}>
    


<div >
<img src='download.jpg'className="res" style={{objectFit:'cover',height:"150px",width:"400px",borderRadius:"8px"}}></img>
</div>

      
</div>
</Container>
      </Grid>
      <Grid item container direction='row' justify='flex-end'>
     <Grid item container direction='column' justify='flex-end' lg={6}>
    

 <Typography variant='h5' component="body2" style={{marginTop:'30px',marginBottom:'200px',color:"grey"}}>
 The Tulip Garden in Netherland<br/><br/>
Redeemable expiration date : 30 . Nov . 2022
      </Typography>
     
     </Grid>
     </Grid>
   


    </div>)
}