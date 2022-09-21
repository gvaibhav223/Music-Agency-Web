import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography, makeStyles
} from "@material-ui/core";


import {} from "react-feather";

const useStyles = makeStyles((theme) => ({
  AboutUs: {
    background: "#000",
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
     
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(8),
     
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(8),
    
    },
  },
  
}));


export default function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.AboutUs}
      
      > <Box>
        <Container maxWidth="lg">
          <Grid container spacing={2} className="sectionHeading">
            <Grid item xs={12} >
              <Box style={{textAlign:"left"}}>
                <Typography variant="h2" className="text-white">
               ABOUT US
                 
                </Typography>
                <Typography variant="body2">
                  Competitive swap environment to unlock the potential of
                  decentralized.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* featured */}
      <Box mt={5} mb={2}>
        <Container fixed>
          <Grid container spacing={2} className="counterSection">
            <Grid item xs={12}  md={4}>
            <img src="images/about.png" className="img-responsive aboutImg"  alt=" "/>
           </Grid>
            <Grid item xs={12} md={8} className="aboutText">
             <Typography gutterBottom variant="h4">
             Explicit Rarity
             </Typography>
              <Typography variant="body2" >
              To give general guidance on the hierarchy for the digital collectible art piece, the creators provide a set of explicit characteristics with differing degrees of rarity, e.g. men are much more common than robots. Unlike other collectibles, there is a second layer of scarcity imposed on top of the explicit traits via the implicit traits and the market for names.
              </Typography>
             <Typography gutterBottom variant="h4">
             Implicit Rarity
             </Typography>
              <Typography variant="body2" >
              Crypto Crafts* are not a simple collectible, though, they are art. And art is not systematic. It is enigmatic. As the foremost blend of intelligently designed collectible items and artistic creation, many Hashmask traits or attributes are not explicitly accounted for. It encourages the consumer or rather the collective consumer to project his or her interpretation of value into the artwork. On top of that, the NCTs pass on the decision power over the rarest of all traits, a unique name, to the consumer, thus, eradicating the invisible line separating the creator and the consumer of the artwork.
              </Typography>
            
             </Grid>
             <Grid item xs={12} sm={12} md={12} className="aboutText">
             <Typography gutterBottom variant="h4">
             Example of Implicit Rarity
             </Typography>
              <Typography variant="body2" >
              On the highest level, there are 14 different types of masks. 12.5% of all characters wear an animal mask and only 5.9% wear a pixel mask. At first sight, pixel masks may seem more exclusive, but upon further inspection, you realize that there are only 13 Hashmasks that feature a unicorn mask, which is much more exclusive than the rarest of all pixel masks. Other examples of implicit traits with varying degrees of rarity are backgrounds, shirts, hairstyle and colors, and many more.
              </Typography>
             </Grid>
           
          
           </Grid>
        </Container>
      </Box></Box>
    </>
  );
}
