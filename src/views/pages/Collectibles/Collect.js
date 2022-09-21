import React from "react";
import Slider from "react-slick";
import FavouritesCard from "src/component/FavouritesCard";
// import GiftsCard from "src/component/GiftsCard";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  FormControl, InputLabel, Select, MenuItem
} from "@material-ui/core";

import { BsArrowRight } from "react-icons/bs";
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

const walletdetails = [
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
    background: "#000",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing( 4),
   
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

export default function Collectibles() {
  
  const classes = useStyles();
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    className: "recomended",
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          centerMode: false,
    centerPadding: '20px',
    autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
    centerPadding: '20px',
    autoplay: false,
        },
      },
    ],
  };
  return (
    <>
      <Box className={classes.wallet}>
        {" "}
       
        {/* featured */}
        <Box mt={3} mb={2}>
         <Container fixed>
           <Grid
             container
             spacing={2}
             className="text-center"
             style={{ display: "block" }}
           >
                <Grid container >
             <Box  className={classes.sectionTitleHead}>
             <Typography
            variant="h2"
           className="text-white m-b-5"
            
          >
           
            Collectibles </Typography>
            <Button
        variant="text"
        color="primary"
        className={classes.button}
        endIcon={<BsArrowRight/>}
      >
       More
      </Button>
             </Box></Grid>
            <Grid container spacing={2}>
            <Slider {...settings} className="width100">
              {walletdetails.map((data, i) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    key={i}
                    className="walletSet"
                  >
                   <Box style={{margin:"0 7px"}}>
                      <FavouritesCard data={data}  type="card" index={i} />
                      </Box>
                  </Grid>
                );
              })}
              </Slider>
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
                <Grid container >
             <Box  className={classes.sectionTitleHead}>
             <Typography
            variant="h4"
            className="SectionTitle m-b-5"
            
          >
           
           Displaying 999 search results for NFT</Typography>
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
            </Box></Grid>
            <Grid container spacing={2}  >
            {walletdetails1.map((data, i) => {
                return (
                  data.currentBid ==="false" ? (
                  <Grid
                    item
                    xs={12}
                    sm={4}
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
                    sm={4}
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
    </>
  );







}
