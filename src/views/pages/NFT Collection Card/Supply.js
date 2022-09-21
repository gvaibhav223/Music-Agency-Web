import React from 'react' 
import './Name.css'
import './Supply.css'
import {TextField,Container,Box,Typography} from '@material-ui/core'

  export default function Name(){
  
    return(<div>
      <Box>
          <Container>
    <div>
            <div style={{float:"left"}}> 
               <div >
           <Typography variant="" component="h2" style={{marginTop:'35px',marginBottom:'6px',}}>Supply</Typography>
           <TextField variant="outlined" placeholder="1" className="width"/><br/>
           <Typography style={{marginBottom:'26px',fontSize:"13px",color:"grey",marginTop:"2px"}}>Batch supply is limited to 999 units</Typography>
           </div>
           <div>
           <Typography variant="" component="h2" style={{marginTop:'35px',marginBottom:'6px',}}>Asking Price</Typography>
           <TextField variant="outlined" placeholder="  12" className="width"/><br/>
           <Typography style={{marginBottom:'26px',fontSize:"13px",color:"grey",marginTop:"2px"}} variant="p">Input the minimum amount you accept to sell your NFT,  buyer's can increase it with any donation  amount </Typography>
           </div>
           <div>
           <Typography variant="" component="h2" style={{marginTop:'35px',marginBottom:'6px',}}>Artists royalties</Typography>

           <div style={{display:"flex",flexWrap:"wrap"}}>
           <TextField variant="outlined" placeholder=" All Sale" className="width2" style={{marginRight:"30px",marginBottom:"2px"}}/>
           <TextField variant="outlined" placeholder="  10 %" className="width2"style={{marginRight:"30px",marginBottom:"2px"}}/>
           <TextField variant="outlined" placeholder="Wallet address for roy" className="width3" style={{marginBottom:"2px"}}/><br/>    
           </div>
           </div>
           <div>
           <Typography variant="" component="h2" style={{marginTop:'35px',marginBottom:'6px',}}>Bounty Commissions</Typography>

           <div style={{display:"flex",flexWrap:"wrap"}}>
           <TextField variant="outlined" placeholder=" once o" className="width2" style={{marginRight:"30px",marginBottom:"2px"}}/>
           <TextField variant="outlined" placeholder="  2.00 %" className="width2"style={{marginRight:"30px",marginBottom:"4px"}}/>
             <br/>  
            </div>
           </div>
          </div>
 <div  style={{paddingTop:"35px",float:"right"}} >

      <div  >   
           <Typography variant="" component="h2" style={{color:"grey",marginBottom:"5px",}}>The Tulip Preview</Typography>
        </div>   
      <div >
            <img src='download.jpg'className="res" style={{objectFit:'cover',height:"180px",width:"100%",maxWidth:"380px",marginBottom:'20px'}}></img>
      </div>
      <div>
           <Typography variant='h5' component="body2" style={{marginTop:'30px',marginBottom:'20px',color:"grey"}}>
               The Tulip Garden in Netherland<br/><br/>
               Redeemable expiration date : 30 . Nov . 2022
      </Typography>
      </div>
      <div>
          <br/>
      <Typography variant="h6" component="textprimary" style={{marginTop:'35px',marginBottom:'6px',}}>
      1st  Category : Country - Netherlands
<br/>
2nd  Category : flower - tulips<br/>

Keywords : Landscape, tulips, netherlands


      </Typography>
      </div>
 </div>
 </div></Container>
          </Box>
      </div>)
}