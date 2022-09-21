import React from "react";
import { Typography, Box , makeStyles, Button, Grid} from "@material-ui/core";

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
      className="collectionBox"
     
    >
     
        <Box className="collectionSet" mb={2}  style={{backgroundColor:'#1a1919'}}>
      
        <Grid container spacing={2} >
        <Grid
                    item
                    xs={12}
                    sm={3}
                    lg={3}
               
                   
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
                    sm={9}
                    lg={9}
               
                   
                  >
             <Box className="collectiondetails">
              
              <Typography
              variant="h3"
              
              style={{ marginBottom: "5px" ,color:'#fff' }}
            >
             
              {data.name}
  
              </Typography>
              <Typography
              variant="h6"
              className="NftName"
              style={{ marginBottom: "5px" }}
            >
             
              {data.description}
  
              </Typography>
             <Box>
             <Typography
            variant="h6"
            className="NftCategory"
            style={{ marginBottom: "5px" }}
          >Category : {data.category}
          </Typography>
             </Box>
            <Button
                  variant="contained"
                  color="secondary"
                  size="medium"
                 style={{marginTop:"15px"}}
                 
                 href="/manage-collection"
                >
                  Manage
                </Button>
              </Box>
                     
              </Grid> 
             
                  </Grid>
     
      
        
            
           
          
           
             </Box>
   
      

    
    </Box>
  );
}
