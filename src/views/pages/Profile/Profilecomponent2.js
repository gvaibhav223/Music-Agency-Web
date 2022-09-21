import React from 'react' 
import './Profile.css'
import {Container,Typography,Card} from '@material-ui/core'
import { Paper , Button,makeStyles} from '@material-ui/core';

const cardData = [
    {
        label: "Current Bid",
        text:"AUGMENTED REALITY",
       

    },
    {
        label: "Current Bid",
        text:"AUGMENTED REALITY",
      

    },
    {
        label: "Current Bid",
        text:"AUGMENTED REALITY",
       
 
    },

  
];

const useStyles = makeStyles((theme) => ({
  
    button:{
        color:"white",
     float:"right",
        marginTop:"22px",
        height:"32px",
        fontSize:"12px",
        '&:hover': {
        backgroundColor:"#0CAFFF"
        },
        Width:"140px",
        backgroundColor:"#0CAFFF"
         },
         button2:{
            color:"white",
            height:"42px",
            width:"140px",
            fontSize:"12px",
            marginRight:"20px",
            '&:hover': {
            backgroundColor:"red"
            },

            backgroundColor:"red"
             },
         button3:{
            color:"white",
            height:"42px",
            width:"140px",
            fontSize:"12px",
            '&:hover': {
            backgroundColor:"#0CAFFF"
            },

            backgroundColor:"#0CAFFF"
             },
             button4:{
               
                height:"27px",
                width:"140px",
                fontSize:"10px",
                '&:hover': {
                backgroundColor:"white"
                },
                backgroundColor:"white"
                 },
                 button5:{
                     marginLeft:"12px",
                    color:"white",
                    height:"27px",
                    width:"140px",
                    fontSize:"10px",
                    '&:hover': {
                    backgroundColor:"#0CAFFF"
                    },
                    backgroundColor:"#0CAFFF"
                     },
                

  }));
  export default function Profile()
  { 
    const classes=useStyles();
      return(
      <div>
             <Paper style={{boxShadow:"2px 2px 4px 4px grey" ,marginBottom:"10px",paddingBottom:"25px"}}>
              < Container>
              <div>
              <Typography variant="" component="h1" style={{fontSize:"40px",paddingBottom:"10px",paddingTop:"20px"}} >
               
              Closing Sell Auction
             <span style={{float:"right",fontSize:"20px",paddingTop:"20px",paddingRight:"100px"}}>
                    More 
               </span>
               </Typography>
               
               </div>
                {
                    cardData.map(({label,text},i)=>{
                        return(
                            <span>
                        <Card className="carditem"  style={{backgroundColor:"lightgrey",}}>
                            <Button variant="contained" 
                            className={classes.button}>
                            {label}
                            </Button>          
                        </Card>
                       </span>             
                        )
                    })
                }
                  <div style={{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",width:"100%",maxWidth:"1010px"}}>
                {cardData.map(({text,text2},i)=>{
               return(
                      <span style={{fontSize:"19px"} }key={i} >
                          {text }
                     
                   </span>
                    )
                  
                })}  </div> 
               <div style={{paddingTop:"5px",display:"flex",flexWrap:"nowrap",justifyContent:"space-between",width:"100%",maxWidth:"630px"}}>
                   <span style={{fontSize:"13px",color:"red"}}>Closing in 3 Min
                   <span style={{paddingLeft:"60px",fontSize:"13px",color:"black"}}>
              <strong>  Reserve Price not met</strong>   
                   </span>
                   </span>
                   <span style={{fontSize:"13px",color:"red"}}>Closing in 3 Min     
                   </span>
                   <span style={{fontSize:"13px",color:"red"}} >
                   </span>
               </div>
              <div style={{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",width:"100%",maxWidth:"700px"}}>
                   <div style={{paddingTop:"5px"}}>
                    <Button variant="outlined" className={classes.button4} >
                    Enter BNB amount
                    </Button>
                    <Button variant="contained" className={classes.button5} style={{fontSize:"10px",width:"160px"}}>
                    Lower Reserve Price
                    </Button>
                    </div>
                   
                   
                    </div>
              </Container>
          </Paper>
      </div>
      )
  }