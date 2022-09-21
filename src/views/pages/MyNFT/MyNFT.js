import React from "react";
import Slider from "react-slick";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import MyNFTCard from "src/component/MyNFTCard";
import NftCollection from "src/component/NftCollection";
import Button from "@material-ui/core/Button";
import Page from "src/component/Page";

import {} from "react-feather";

const walletdetails = [
  {
    collectionImage: "images/nft1.jpg",
    creatorName: "Collection By Nick",
  },
  {
    collectionImage: "images/nft2.jpg",
    creatorName: "Collection By John",
  },
  {
    collectionImage: "images/nft3.jpg",
    creatorName: "Collection By Matthew",
  },
];
const colelctionDetails = [
  {
    img: "images/nft1.jpg",
    description:
      "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.",
    name: "Collection_Name",
    category: "Martin",
    selling: "true",
    offer: "true",
    auction: "true",
    reedeem: "false",
    Promote: "false",
  },
  {
    img: "images/nft1.jpg",
    description:
      "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.",
    name: "Collection_Name",
    category: "Martin",
    selling: "true",
    offer: "true",
    auction: "true",
    reedeem: "false",
    Promote: "false",
  },
  {
    img: "images/nft1.jpg",
    description:
      "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.",
    name: "Collection_Name",
    category: "Martin",
    selling: "true",
    offer: "true",
    auction: "true",
    reedeem: "false",
    Promote: "false",
  },
];

const useStyles = makeStyles((theme) => ({
  NftBreed: {
    background: "#000",
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(10),
    
  },
  innerCollection: {
    position: "absolute",
    width: "calc(100% - 40px)",
    bottom: "0px",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "20px 20px 0 0",
    padding: "20px",
    background: "rgba(34,196,254)",
    background: "#1ed760",
  },
  selectOption: {
    width: "300px",
    display: "flex",
    justifyContent: "space-around",
  },
  sectionTitleHead: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    margin: "10px 0 ",
    padding: "0 0",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  title: {
    borderBottom: "1px solid #eaeaea",
  },

  iconCollection: {
    width: 100,
    height: 100,
    color: "#000",
  },
  walletSet: {
    padding: "0 15px 0 0",
  },
  formControl: { width: "100%", margin: "0 10px" },
  btn:{
    border: "1px solid white",
  },
}));

export default function MyNFT() {
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
          centerPadding: "20px",
          autoplay: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
          autoplay: true,
        },
      },
    ],
  };
  return (
    <Page title="My Nft">
      <Box className={classes.NftBreed}>
        {" "}
        <Box>
          <Container >
            <Grid container spacing={2} className="sectionHeading">
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h2" className="text-black">
                    My NFT
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* featured */}
        <Box mt={5} mb={2}>
          <Container maxWidth="lg">
            <Grid container spacing={2} className="counterSection">
              <Grid item xs={12} sm={12} md={4}>
                <Box className="breedcolumn">
                  <Box className={classes.innerCollection}>
                    {/* <VscBrowser className={classes.iconCollection} /> */}
                    <Typography variant="body2">Create New NFT</Typography>
                    <Button variant="contained" color="secondary" size="large" className={classes.btn} >
                      Create New
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <Grid container spacing={0}>
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
        <Box mt={5} mb={5}>
          <Container maxWidth="lg">
            <Grid container>
              <Box className={classes.sectionTitleHead}>
                <Typography
                  variant="h4"
                  className="SectionTitle"
                  style={{ marginBottom: "5px" }}
                >
                  Displaying 88 NFT collections{" "}
                </Typography>
                <Box className={classes.selectOption}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      All Items
                    </InputLabel>
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
                    <InputLabel id="demo-simple-select-label1">
                      Sort By
                    </InputLabel>
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
                    sm={12}
                    lg={12}
                    key={i}
                    className="walletSet"
                  >
                    <MyNFTCard data={data} type="collection" index={i} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </Box>
    </Page>
  );
}
