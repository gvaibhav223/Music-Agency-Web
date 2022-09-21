import React from "react";

import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,

} from "@material-ui/core";

import Button from "@material-ui/core/Button";

import {} from "react-feather";



const useStyles = makeStyles((theme) => ({
  NftBreed: {
    background: "#000",
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(10),
   
  },
  innerCollection:{
    position:"absolute",
    width:"calc(100% - 40px)",
    bottom:"0px",
    left:"50%",
    transform:"translateX(-50%)",
    borderRadius:"20px 20px 0 0",
    padding:"20px",
    background: "#1a1919",


  },
  selectOption:{
    width:"300px",
    display: "flex",
    justifyContent: "space-around",
  
    flexDirection: "row",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    justifyContent: "space-around",
    width:"100%",
    margin:"0 10px",
    flexDirection: "row",
  },
  sectionTitleHead:{
    display:"flex",
    justifyContent:"space-between",
    alignContent:"center",
    margin: "10px 0 ",
    padding:"0 0",
    width:"100%",
    [theme.breakpoints.down("sm")]: {
      display:"block",
    },
  },
  title: {
    borderBottom: "1px solid #eaeaea",
  },
 
  iconCollection:{
    width: 100,
    height: 100,
    color:"#000",
  },
  walletSet:{
    padding:"0 15px 0 0",
  },

}));

export default function ResumeCreation() {
  
  const classes = useStyles();
  
  return (
    <>
      <Box className={classes.NftBreed}>
        {" "}
        <Box>
         <Container fixed>
            <Grid container spacing={2} className="sectionHeading">
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h2" >
                  Create your NFT
                  </Typography>
                  <Typography variant="body2" >
                  You have a NFT creation in progress  :
                  </Typography>
                 
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* featured */}
        <Box mt={2} mb={2}>
          <Container maxWidth="lg">
            <Grid container spacing={2} className="counterSection" >
              <Grid item xs={12} sm={12} md={4}>
              
                <Box className="breedcolumn">
                <img src="/images/collection4.jpg" className="img-responsive" alt="" />
                <Box className={classes.innerCollection} >
            
                <Button
                  variant="contained"
                  color="primary"
                  size="medium "
                  className='m-t-0'
                >
                 Delete
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="medium"
                 
                >
                  Proceed
                </Button>
                </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                
             </Grid>
           </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
