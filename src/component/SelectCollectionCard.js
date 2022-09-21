import React from "react";
import { Typography, Box , makeStyles} from "@material-ui/core";

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

export default function SelectCollectionCard(props ) {
  const { type, data } = props;
    const classes = useStyles();


  return (
    <Box
      style={{ borderRadius: 5}}
    >
      <Box display="flex">
        <Box className="collectionSet favourites lesspadding bgCardcolor" >
        <img  className={classes.NftImg}
              src={data.img}
              width="100%"
             
              alt=""
            />
             
            <Box className="Ticker">
            <Typography
            variant="h5"
            className="NftPrice m-b-5"
            style={{ fontSize:'15px' }}
          >
           
          {data.category}
          </Typography>
            </Box>
              
          
            <Box className="text-center">
            <Typography
            variant="h3"
            className="NftName m-b-5 m-t-10 maincolor"
            
          >
           
            {data.name}

            </Typography>
           
         
            </Box>
         
           
             </Box>
      </Box>
      

    
    </Box>
  );
}
