import React from "react";
import { Typography, Box , makeStyles, Grid} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    NftImg: {
    borderRadius: 10,
    boxShadow: "0 11px 24px rgb(0, 0, 0, 0.12)",
     display:"block",
     minHeight: "300px",
     position:'relative',
     cursor: "pointer",
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
    },
    playbutton:{
      position:'absolute',
      bottom:5,
      right:10,
    },
    image :{

    }
    
  }));

export default function NewCollection({type,data}) {
    const classes = useStyles();


  return (
    <Box
    className='bgCardcolor'
    style={{ borderRadius: 1,margin:"5px 10px",}}
    >
      <Box>
        
      <Box className="collectionSet collectionSlide br-0">
          <Box className={classes.NftImg}>
          
            <img   
              src={data.uri}
              className={classes.image}
              alt="Image"
              width='300'
              height='400'
            />            
          </Box>
              <Box p={3} style={{padding:"25px 17px", }}>
                <Grid container direction='column' justify='center' alignItems='center' spacing={1}>
                  <Grid item>
                         <Typography variant='h5' style={{color:'#fff'}}>
                          NFT #{data.tokenId}
                         </Typography>
                  </Grid>
                  <Grid item>
                  <Typography>
                           By <span style={{color:'#1ed760'}}>{data.tokenName}</span>
                         </Typography>
                  </Grid>
                  <Grid item>
                  <Typography variant='body2'>
                  {data.description}
                         </Typography>
                  </Grid>

                </Grid>
              </Box>
          </Box>
      </Box>
      

    
    </Box>
  );
}
