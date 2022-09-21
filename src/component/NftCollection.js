import React from "react";
import { Typography, Box , makeStyles, Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    NftImg: {
    borderRadius: 5,
    boxShadow: "0 11px 24px rgb(0, 0, 0, 0.12)",
     display:"block",
     
    },
     iconCollection:{
      width: 100,
      height: 100,
      color:"#000",
    },
    btn:{
      border:'1px solid #fff',
    },
    
  }));

export default function NftCollection({ data, index }) {
    const classes = useStyles();


  return (
    <Box className="breedcolumn"  >
    <img src={data.collectionImage} alt=" " className="img-responsive" />
    <Box className="innerCollection">
   
    <Typography variant="body2" className="text-white">{data.creatorName}</Typography>
    <Button
      variant="contained"
      color="secondary"
      size="large"
      className={classes.btn}
     href="/collection"
    >
      View
    </Button>
    </Box>
    
    </Box>
  );
}
