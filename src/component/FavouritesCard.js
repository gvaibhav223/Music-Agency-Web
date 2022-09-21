import React from "react";
import { Typography, Box , makeStyles, Button, LinearProgress} from "@material-ui/core";

import { BsHeartFill, BsFillEyeFill } from "react-icons/bs";
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

export default function FavouritesCard(props ) {
  const { type, data } = props;
    const classes = useStyles();


  return (
    <Box
      style={{  borderRadius: 5}}
    >
      <Box display="flex">
        <Box className="collectionSet favourites bgCardcolor" >
        <img  className={classes.NftImg}
              src={data.img}
              width="100%"
             
              alt=""
            />
            <Box className="LikesViews">
              
            <BsHeartFill className="m-r-5 icosLikes " style={{color:'red'}} />
                        <Typography variant="h5" className="NftPrice">
                          200
                        </Typography>
                        <BsFillEyeFill className="m-l-10 m-r-5 icosLikes" />
                        <Typography variant="h5" className="NftPrice">
                          40
                        </Typography>
             
          
            </Box>
             {type === 'price' ? (
            <Box className="Ticker">
            <Typography
            variant="h5"
            className="NftPrice"
            
          >
           
           Price : <span> {data.price}</span>
          </Typography>
            </Box>) : (
              <Box className="Ticker">
              <Typography
              variant="h5"
              className="NftPrice"
              
            >
             
             Current Bid
            </Typography>
              </Box>
            )}
            <Box className={classes.bottomTop}>
            <Typography
            variant="h6"
            className="NftName"
            
          >
           
            {data.name}<span>{data.nftId}</span>

            </Typography>
          
            <Typography
            variant="h6"
            className="NftName"
           
          >
           
            {data.available} / {data.total} </Typography>
          
         
            </Box>
            <LinearProgress className="linearProgress" variant="buffer" value={data.progress}  />
            <Box className={classes.bottomblock}>
              <Box className="descki">
          
              <Typography
            variant="h6"
            className="NftName"
            
          >{data.description}</Typography>
              </Box>
              {type === 'price' ? (
          <Button
                  variant="contained"
                  color="secondary"
                  size="medium"
                  href="/nft-details"
                >
                  Buy Now
                </Button>):
                (
                  <Button
                          variant="contained"
                          color="secondary"
                          size="medium"
                         href="/nft-details"
                        >
                          Place Bid
                        </Button>)}
            </Box>
             </Box>
      </Box>
      

    
    </Box>
  );
}
