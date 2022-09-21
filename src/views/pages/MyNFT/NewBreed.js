import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography, makeStyles, Link
} from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';


import {} from "react-feather";

const useStyles = makeStyles((theme) => ({
  NewBreed: {
    background: "#000",
      paddingTop: theme.spacing(18),
      paddingBottom: theme.spacing(10),
      [theme.breakpoints.up("sm")]: {
       
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
       
      },
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(21),
        paddingBottom: theme.spacing(18),
      
      },
    },
    BreedSpace:{
      background: "#ecf0f3",
      height: "400px",
      borderRadius:"15px",
      textAlign:"center",
      display:"flex",
      justifyContent:"center",
      alignItems:"Center",
    },
    NftImg: {
      borderRadius: 5,
      boxShadow: "-12px -12px 20px 0px #fff, 12px 12px 20px 0px #d1d9e6",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        maxWidth:"85%",
       
      },
      largeIcon: {
        width: 18,
        height: 18,
        marginRight: "8px",
      },
}));


export default function NewBreed() {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.NewBreed}
      
      > <Box>
        <Container fixed>
          <Grid container spacing={2} className="sectionHeading">
            <Grid item xs={12} >
              <Box className={classes.BreedSpace}>
              <img src="https://source.unsplash.com/user/erondu/400x250" className={classes.NftImg}  alt=" "/>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* featured */}
      <Box mt={5} mb={2}>
        <Container fixed>
          <Grid container spacing={2} className="BreedDetails">
            <Grid item xs={12} sm={6} md={6}>
           <Box>
           <Typography gutterBottom variant="h3" style={{color:"#fff"}}>
           NFT #38909
             </Typography>
             <Box className="entry-meta">
                    <Typography variant="body1">  <FavoriteBorderIcon className={classes.largeIcon} /> 123 </Typography>
                    <Typography variant="body1">  <PlaylistAddIcon className={classes.largeIcon} /> Not in any collection </Typography>
                    
                    </Box>
           </Box>
           </Grid>
            <Grid item xs={12} sm={6} md={6} className="" display="flex" justifyContent="flex-end">
            <Box className="Nftowner">
              <Link className="Nftowner-imageLink" href="#">
                <Box className="Nftowner-image"><img src="https://source.unsplash.com/user/erondu/60x60" alt="Profile" className="borderRadius50" /></Box>
                </Link>
                <Typography variant="body1" className="Nftowner-details"> 
             
                <Link className="Nftowner-name " href="#">You</Link> <Typography variant="body1" component="span" >Owner</Typography>
                </Typography>
              </Box>
               </Grid>
               <Grid item xs={12} sm={12} md={12} className="text-white">
               <Typography gutterBottom variant="h3">
                     BIO
             </Typography>
             <Typography gutterBottom variant="body1" className="text-white" >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
             </Typography>
                 </Grid>
           
          
           </Grid>
        </Container>
      </Box></Box>
    </>
  );
}
