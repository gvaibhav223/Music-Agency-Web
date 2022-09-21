import React from "react";

import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  FormControl, InputLabel, Select, MenuItem
} from "@material-ui/core";
import NftOfferCard from "src/component/NftOfferCard";


const colelctionDetails = [
  {
    img: "images/nft1.jpg",
    name: "AUGMENTED REALITY",
    amount: "1245",
    time: "02:12",
    description: "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum .",
  },
  {
    img: "images/nft1.jpg",
    name: "AUGMENTED REALITY",
    amount: "1245",
    time: "02:12",
    description: "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum .",
  },
  {
    img: "images/nft1.jpg",
    name: "AUGMENTED REALITY",
    amount: "1245",
    time: "02:12",
    description: "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum .",
  },
  {
    img: "images/nft1.jpg",
    name: "AUGMENTED REALITY",
    amount: "1245",
    time: "02:12",
    description: "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum .",
  },
  {
    img: "images/nft1.jpg",
    name: "AUGMENTED REALITY",
    amount: "1245",
    time: "02:12",
    description: "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum .",
  },
];


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
    background: "rgba(34,196,254)",
    background: "linear-gradient(29deg, rgba(34,196,254,1) 0%, rgba(0,89,236,1) 100%, rgba(0,212,255,1) 100%)",

  },
  selectOption:{
    width:"300px",
    display: "flex",
    justifyContent: "space-around",
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
  formControl:{width:"100%",
margin:"0 10px",},
}));

export default function NftOffer() {
  
  const classes = useStyles();
  const settings = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    className: "recomended",
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
    centerPadding: '20px',
    autoplay: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
    centerPadding: '20px',
    autoplay: true,
        },
      },
    ],
  };
  return (
    <>
      <Box className={classes.NftBreed}>
        {" "}
        <Box>
         <Container >
            <Grid container spacing={2} className="sectionHeading">
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h2" >
                  NFT - Offers
                  </Typography>
                 
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* featured */}
       
        <Box mt={5} mb={5}>
        <Container maxWidth="lg">
        <Grid container >
             <Box  className={classes.sectionTitleHead}>
             <Typography
            variant="h4"
            className="SectionTitle m-b-5"
            
          >
           
           Displaying 11 search results for NFT</Typography>
           <Box className={classes.selectOption}>
           <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">All Items</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        
        >
          <MenuItem value={10}>Collection</MenuItem>
                      <MenuItem value={20}>On Sale</MenuItem>
                      <MenuItem value={40}>On Auction</MenuItem>
                      <MenuItem value={50}>with Bid</MenuItem>
                      <MenuItem value={30}>Featured</MenuItem>
        </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label1">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label1"
          id="demo-simple-select1"
         
        >
           <MenuItem value={10}>Name</MenuItem>
                      <MenuItem value={20}>Creation</MenuItem>
                      <MenuItem value={30}>Price</MenuItem>
                      <MenuItem value={30}>Date</MenuItem>
        </Select>
      </FormControl>
      </Box>
            </Box>
            
            </Grid>
        <Grid container spacing={2}>
         
              {colelctionDetails.map((data, i) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    lg={3}
                    key={i}
                    className="walletSet"
                  >
                   
                      <NftOfferCard data={data}  type="offer" index={i} />
                   
                  </Grid>
                );
              })}
              
            </Grid>
            </Container>
        </Box>
      </Box>
    </>
  );
}
