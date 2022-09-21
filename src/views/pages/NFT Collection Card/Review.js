import React from 'react' 
import './Name.css'
import './Supply.css'
import {TextField,Container,Box,Typography} from '@material-ui/core'

export default function Name(){
  
    return(<div>
      <Box>
          <Container>
    <div>
            
 <div  style={{paddingTop:"35px",float:"left"}} >

      <div  >   
           <Typography variant="" component="h2" style={{color:"grey",marginBottom:"5px",}}>Review :The Tulip</Typography>
        </div>   
      <div >
            <img src='download.jpg'className="res" style={{objectFit:'cover',height:"180px",width:"100%",maxWidth:"380px",marginBottom:'20px'}}></img>
      </div>
      <div>
      <Typography variant="" component="h2" style={{marginBottom:"5px",}}>
          Supply of 1 Collectible
      </Typography>

           <Typography style={{marginTop:'30px',marginBottom:'80px',color:"grey",fontSize:"18px"}}>

Amount in your favor : BNB 12.000000000<br/><br/>
This Creation is ON SALE
      </Typography>
      </div>
 </div>
 <div style={{float:"right",paddingTop:"35px"}}> 
         <div  >   
           <Typography variant="" component="h2" style={{color:"grey",marginBottom:"5px",}}>Description</Typography>
        </div>   
        <div>
        <Typography style={{marginTop:'30px',marginBottom:'30px',color:"grey",fontSize:"20px"}}>

        The special fundraising for Ethiopian children.
      </Typography>
      <Typography style={{marginTop:'30px',marginBottom:'30px',color:"grey",fontSize:"22px"}}>
      Redeemable expiration date :<strong> 09 . 03 . 2022</strong>
</Typography>
        </div>
      <div>

          <table style={{width:"100%",maxWidth:"450px"}}>
          
              <tr >
              <Typography style={{marginBottom:'10px',color:"grey",fontSize:"24px"}}>
                  <th >1st Category:</th>
                  <td >Country</td>
                  <td style={{color:"black"}}>Netherlands</td>
                  </Typography>
              </tr>

              <tr>
              <Typography style={{marginBottom:'10px',color:"grey",fontSize:"24px"}}>
              <th >2nd Category:</th>
                  <td >Flower</td>
                  <td  style={{color:"black"}}>Tulip</td>
                  </Typography>
                
              </tr>
            
              <tr>
              <Typography style={{marginBottom:'10px',color:"grey",fontSize:"24px",}}>
              <th >3rd Category:</th>
                  <td >Photography</td>
                  <td  style={{color:"black"}}>Landscape</td>
                  </Typography>
                
              </tr>
             
          </table>
      </div>



 </div>
 </div>
 </Container>
          </Box>
      </div>)
}