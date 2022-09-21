import React from 'react' 
import './CREATENFT.css'
import {AppBar,Toolbar,Typography} from '@material-ui/core'

import {  makeStyles} from '@material-ui/core'


const headersData = [
    {
      label: "My Collection",
      
    },
    {
      label: "My NFT",
    
    },
    {
      label: "My Auction",
    
    },
    {
      label: "My Redeem",
     
    },
    {
      label: "My Wallet",
     
    },
    {
        label: "Review",
       
      },
      {
        label: "My Favourites",
       
      },
  ];
  
  const useStyles = makeStyles((theme) => ({
    header: {
    
        backgroundColor:"#0CAFFF",
    },
}));
export default function Appbar()

{
    const classes=useStyles();
    return(
    <div>
     
        < AppBar position="relative" className={classes.header} >
        <Toolbar >
        <center>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        
        { 
        headersData.map(({label},i) => {
      return (
         
        <Typography key={i} style={{paddingLeft:"100px"}} >
          {label}
          </Typography>
        
      )
    })
  }
  
</div>
</center>
      
        </Toolbar>
        </AppBar>
    </div>)
}