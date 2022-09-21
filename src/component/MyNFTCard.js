import React from "react";
import { Typography, Box , makeStyles, Button,  Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    NftImg: {
    borderRadius: 10,
    boxShadow: "0 11px 24px rgb(0, 0, 0, 0.12)",
     display:"block",
     miHeight: "300px",
     
    },
    bottomblock:{
      display:"flex",
      justifyContent:"space-between",
      alignContent:"center",
    },
    bottomTop:{
      display:"flex",
      justifyContent:"space-between",
      alignContent:"center",
      margin: "10px 0 0",
    }
    
  }));

export default function MyCollection(props ) {
  const { type, data } = props;
    const classes = useStyles();


  return (
    <Box
      style={{  borderRadius: 5}}
      className="collectionBox horizontal"
    >
     
        <Box className="collectionSet bgCardcolor"  mb={2}>
      
        <Grid container spacing={2} >
        <Grid
                    item
                    xs={12}
                    sm={3}
                    lg={2}
               
                   
                  >
                    <figure>
                   <img  className={classes.NftImg}
              src={data.img}
              width="100%"
             
              alt=""
            /></figure> </Grid>
              <Grid
                    item
                    xs={12}
                    sm={3}
                    lg={4}
               
                   
                  >
            
              
              <Typography
              variant="h6"
              className="NftHead m-b-5"
              
            >
             
              {data.name}
  
              </Typography>
              <Typography
              variant="h6"
              className="NftName m-b-5"
              
            >
             
              {data.description}
  
              </Typography>
             <Box>
            
             </Box>
            <Button
                  variant="contained"
                  color="secondary"
                  size="medium"
                 className="m-t-15"
                 
                 href="/manage-nft"
                >
                  Manage
                </Button>
             
                     
              </Grid> 
              <Grid
                    item
                    xs={6}
                    sm={3}
                    lg={3}
               
                  
                  >
                     
                     
             <Typography
              variant="h6"
              className="NftHead m-b-5"
              
            >
             
             Total Supply:  100

              </Typography>
              
              <Box className="availability">
             
             <Typography
              variant="h6"
              className= {data.selling === "true" ? ("success m-b-5") : ("fail m-b-5")} 
              
            >
             
             Selling
  
              </Typography>
              
             <Typography
              variant="h6"
              className= {data.offer === "true" ? ("success m-b-5") : ("fail m-b-5")}
              
            >
             
             Offer
  
              </Typography>
              
             <Typography
              variant="h6"
              className= {data.auction === "true" ? ("success m-b-5") : ("fail m-b-5")}
              
            >
             
             Auction
  
              </Typography>
              
             
              </Box>
              
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sm={3}
                    lg={3}
               
                   
                  >
                   
                   
             <Typography
              variant="h6"
              className="NftHead m-b-5"
              
            >
             
             Available:  23

              </Typography>
              <Box className="availability">
              
                
             <Typography
              variant="h6"
              className= {data.reedeem === "true" ? ("success m-b-5") : ("fail m-b-5")}
             
            >
             
             Reedeem
  
              </Typography>
              
              
             <Typography
              variant="h6"
              className= {data.promote === "true" ? ("success m-b-5") : ("fail m-b-5")}
             
            >
             
             Promote
  
              </Typography>
              
             
           
             
            
              
              </Box>
                  </Grid>
            
                  </Grid>
     
      
        
            
           
          
           
             </Box>
   
      

    
    </Box>
  );
}
