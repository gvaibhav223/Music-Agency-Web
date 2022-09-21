import React from "react";
import Slider from "react-slick";
import NftCollection from "src/component/NftCollection";
import GiftsCard from "src/component/GiftsCard";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  FormControl, InputLabel, Select, MenuItem, Link
} from "@material-ui/core";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
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
    collectionImage: "images/nft1.jpg",
    creatorName: "Collection 1",
  },
  {
    collectionImage: "images/nft2.jpg",
    creatorName: "Collection 2",
  },
  {
    collectionImage: "images/nft3.jpg",
    creatorName: "Collection 3",
  },
  {
    collectionImage: "images/nft3.jpg",
    creatorName: "Collection 4",
  },
  {
    collectionImage: "images/nft3.jpg",
    creatorName: "Collection 5",
  },
]
const useStyles = makeStyles((theme) => ({
  wallet: {
    background: "#000",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
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
   
  },
  sectionTitleHead2:{
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
  walletSet:{
    padding:"0 15px 0 0",
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

export default function UsersView() {
  
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
        <Box className="usersView">
        <figure className="figure">
      <img src="/images/userbg.jpg" className="img-responsive" alt=""/>
      </figure>
          
      <Container fixed>
      <Box className="usersPic">
        <figure>
        <img src="/images/avatar2.png" className="img-responsive" alt="" />
        </figure>
        <Box className="userDetails bgCardcolor" >
        <Typography
            variant="h4"
            className="SectionTitle m-b-5"
            
          >
           
            John Doe </Typography>
            <Box className="socialLink">
              <Link>
              <FaFacebookF style={{color:"#3b5998 "}} />
              </Link>
              <Link>
              <FaTwitter style={{color:"#0084b4 "}} />
              </Link>
              <Link>
              <FaYoutube style={{color:"#c4302b  "}} />
              </Link>
            </Box>
        </Box>
      </Box>
      </Container>
    </Box>
        {/* featured */}
        <Box mt={20} mb={2}>
         <Container fixed>
           <Grid
             container
             spacing={3}
             className="counterSection"
             style={{ display: "block" }}
           >
           <Grid item xs={12} >
                
                <Grid container spacing={3}>
              <Slider {...settings} className="width100 c">
                {walletdetails.map((data, i) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={12}
                      key={i}
                      className={classes.walletSet}
                    >
                     
                        <NftCollection data={data} index={i} />
                     
                    </Grid>
                  );
                })}
                </Slider>
              </Grid>
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
             <Box  className={classes.sectionTitleHead2}>
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
                    md={6}
                    lg={3}
                    key={i}
                    className="walletSet"
                     
                  >
                   <GiftsCard data={data}  type="" index={i} />
                     
                   
                  </Grid>
                  ):(
<Grid
                    item
                    xs={12}
                    md={6}
                    lg={3}
                    key={i}
                    className="walletSet"
                     
                  >
                   
                   <GiftsCard data={data}  type="price" index={i} />
                   
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
