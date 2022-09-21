import React from "react";
import Slider from "react-slick";
import NFTCard from "src/component/NFTCard";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,

} from "@material-ui/core";
import {} from "react-feather";
const walletdetails = [
  {
    img: "images/img1.png",
    songname:'Doja Cat-Planet',
    singername:'Junkyard Army',
    bid:'0.2',
    days:'5 days left',
    likes:'0',
  },
  {
    img: "images/img2.png",
    songname:'Doja Cat-Planet',
    singername:'Junkyard Army',
    bid:'0.2',
    days:'5 days left',
    likes:'0',
  },
  {
    img: "images/img3.png",
    songname:'Doja Cat-Planet',
    singername:'Junkyard Army',
    bid:'0.2',
    days:'5 days left',
    likes:'0',
  },
  {
    img: "images/img4.png",
    songname:'Doja Cat-Planet',
    singername:'Junkyard Army',
    bid:'0.2',
    days:'5 days left',
    likes:'0',
  },
  {
    img: "images/img5.png",
    songname:'Doja Cat-Planet',
    singername:'Junkyard Army',
    bid:'0.2',
    days:'5 days left',
    likes:'0',
  },
  
 
];
const useStyles = makeStyles((theme) => ({
  wallet: {
    background: "#111111",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    margin:'0 10px 16px',
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(4),
    },
  },
  metamask: {
    maxWidth: "100%",
    width: "400px",
  },

  qrCoce: {
    maxWidth: "100%",
    width: "250px",
  },
  sectionTitleHead:{
    display:"flex",
    justifyContent:"space-between",
    alignContent:"center",
    margin: "10px 0 ",
    padding:"0 0",
    width:"100%",
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

export default function BestSeller() {
  
  const classes = useStyles();
  const settings = {
    dots: true,
    slidesToShow: 4,
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
    autoplay: false,
        },
      },
      {
        breakpoint: 450,
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
        <Box >
         <Container >
           <Grid
             container
             spacing={2}
            
             style={{ display: "block" }}
           >
                <Grid container >
             <Box  className={classes.sectionTitleHead}>
             <Typography
            variant="h2"
           
            className="mainHeading"
          >
           BEST SELLER
            </Typography>
            
             </Box>
             <Box className='mainDescription'>
                            <Typography variant='caption' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            </Typography>
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
                   
                      <NFTCard data={data}  type="card" index={i} />
                   
                  </Grid>
                );
              })}
                </Slider>
            </Grid>
           
             
           </Grid>
         </Container>
       </Box>
       
       
      </Box>
    </>
  );
}
