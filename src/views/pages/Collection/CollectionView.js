import React from "react";
import FavouritesCard from "src/component/FavouritesCard";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
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
    background: "#000",
    paddingTop: theme.spacing(10),
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

export default function CollectionView() {
  
  const classes = useStyles();
  
  return (
    <>
    
      <Box className={classes.wallet} >
        {" "}
        <Box className="usersView">
          <figure className="figure">
      <img src="/images/userbg.jpg" className="img-responsive" alt=""/>
      </figure>
      <Container fixed>
      <Box className="usersPic" >
        <figure>
        <img src="/images/avatar2.png" className="img-responsive" alt="" />
        </figure>
        <Box className="userDetails  bgCardcolor" >
        <Typography
            variant="h4"
            className="SectionTitle m-b-5"
            
          >
           
           Collection 1 </Typography>
           
        </Box>
      </Box>
      </Container>
    </Box>
        {/* featured */}
       
       
       <Box mt={20} mb={2}>
         <Container fixed>
           <Grid
             container
             spacing={2}
             className="text-center"
             style={{ display: "block" }}
           >
            <Grid container spacing={2} >
            <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12} >
  <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        href="/create-nft"
                     
                      >
                        Add New Item
                      </Button>
                  </Grid>
            {walletdetails1.map((data, i) => {
                return (
                
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={3}
                    key={i}
                    className="walletSet"
                     
                  >
                   <FavouritesCard data={data}  type="collectionpage" index={i} />
                     
                   
                  </Grid>
                 
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
