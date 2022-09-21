import React from "react";
import { Typography, Box , makeStyles, Button, TextField} from "@material-ui/core";
import {BiTimeFive} from "react-icons/bi";

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
    },
    textField:{
      marginRight:"10px",
      height:"35px",
    }
    
  }));

export default function NftOfferCard(props) {
  const { type, data } = props;
    const classes = useStyles();


  return (
    <Box>
      <Box display="flex " className='bgCardcolor' mb={2} >
        <Box className="collectionSet bgGrey ">
        <img  className={classes.NftImg}
              src={data.img}
              width="100%"
             
              alt=""
            />
              
             <Box p={2} >
            <Box >
            <Typography
            variant="h6"
            className="NftHead m-b-5"
           
          >
           
            {data.name}

            </Typography>
            <Typography
            variant="h6"
            className="NftDescrtiption m-b-5"
            
          >
           
            {data.description}

            </Typography>
           
         
            </Box>
         
            <Box mb={1} mt={1} className={classes.bottomblock}>
            <Typography
            variant="h6"
            className="NftAmount m-b-5"
            
          >
           
           Bids: {data.bids}

            </Typography>
            <Typography
            variant="h6"
            className="NftTime m-b-5"
            
          >
           
            <BiTimeFive style={{fontSize:"18px", marginRight:"5px",}}/>{data.time}

            </Typography>
            </Box>
            {type === 'auction' ? (
          
               <Box className={classes.bottomblock}>
             <TextField
              type="text"
        variant="outlined"
     fullWidth
     placeholder="Enter BNB Amount" 
     className='text-white m-r-5'
        
        
      />
             <Button
                     variant="contained"
                     color="secondary"
                     
                  
                   >
                     Place
                   </Button>
               </Box>
            ) : ('')}
            {type === 'selling' ? (
          
          <Box className={classes.bottomblock}>
        <TextField
         type="text"
   variant="outlined"
fullWidth
placeholder="Enter BNB Amount" 
className='text-white m-r-5'
   
   
 />
        <Button
                variant="contained"
                color="secondary"
                
               
              >
                Reserve
              </Button>
          </Box>
       ) : ('')}
            {type === 'auctionLowBid' ? (
              <Box >
            <Typography
            variant="h6"
            className="NftHighestBid m-b-5"
            
          >
           
           You hold current highest bid

            </Typography>
           
              </Box>
            ) : ('') }
            {type === 'offer' ? (
              <Box className={classes.bottomblock}>
           
              <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                   
                  >
                    Accept
                  </Button>
            <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                   className='m-t-0'
                   
                  >
                    Reject
                  </Button>
              </Box>
            ) : ('') }
            
           
             </Box>
             </Box>
      </Box>
      

    
    </Box>
  );
}
