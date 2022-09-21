import React from "react";
import FavouritesCard from "src/component/FavouritesCard";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

import {} from "react-feather";

const walletdetails1 = [
  {
    img: "images/nft1.jpg",
    name: "O' Neil Snowboard ",
    nftId: "#825",
    price: "132",
    description: "What is Bubble Face? Transform yourself into a comic book hero with the help of Bubble Face",
    total: "100",
    available: "45",
    progress: "45",
    currentBid:"false",
  },
  {
    img: "images/nft1.jpg",
    name: "O' Neil  ",
    nftId: "#125",
    price: "132",
    description: "What is Bubble Face? Transform yourself.",
    total: "100",
    available: "95",
    progress: "95",
  },
  {
    img: "images/nft1.jpg",
    name: "O' Neil Snowboard ",
    nftId: "#8232",
    price: "132",
    description: "What is Bubble Face? Transform yourself into a comic book hero with the help of Bubble Face",
    total: "100",
    available: "12",
    progress: "12",
    currentBid:"false",
  },
  {
    img: "images/nft1.jpg",
    name: "O' Neil  ",
    nftId: "#125",
    price: "132",
    description: "What is Bubble Face? Transform yourself.",
    total: "100",
    available: "95",
    progress: "95",
  },
  {
    img: "images/nft1.jpg",
    name: "O' Neil Snowboard ",
    nftId: "#8232",
    price: "132",
    description: "What is Bubble Face? Transform yourself into a comic book hero with the help of Bubble Face",
    total: "100",
    available: "12",
    progress: "12",
  },
  
 
];
const useStyles = makeStyles((theme) => ({
  wallet: {
    background: '#000',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(8),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(15),
      paddingBottom: theme.spacing(8),
    },
    
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
  metamask: {
    maxWidth: "100%",
    width: "400px",
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

  },
 
  qrCoce: {
    maxWidth: "100%",
    width: "250px",
  },
 
  copyQr: {
    maxWidth: "250px",
    display: "flex",
  },
  walletDetails: {
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export default function Favourites() {
  
  const classes = useStyles();

  return (
  
      <Box className={classes.wallet}>
        <Box>
       <Container fixed>
            <Grid container spacing={2} className="sectionHeading">
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h2" >
                  My Favourites
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        
       
       <Box mt={3} mb={2}>
         <Container fixed>
           <Grid
             container
             spacing={2}
             className="text-center"
             style={{ display: "block" }}
           >
             
            <Grid container spacing={1}  >
            {walletdetails1.map((data, i) => {
                return (
                  data.currentBid ==="false" ? (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={i}
                    className="walletSet"
                     
                  >
                   <FavouritesCard data={data}  type="" index={i} />
                     
                   
                  </Grid>
                  ):(
<Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={i}
                    className="walletSet"
                     
                  >
                   
                   <FavouritesCard data={data}  type="price" index={i} />
                   
                  </Grid>
                  )
                );
              })}
             
            </Grid>
           
             
      
         </Grid>
         </Container>
       </Box>
       

      </Box>
  
  );







}
