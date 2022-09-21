import React from "react";
import Slider from "react-slick";
import NewCollection from "src/component/NewCollection";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiConfig } from "src/constants";
import { useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";

import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {} from "react-feather";
import ProfileCard from "src/component/ProfileCard";
import NFTCard from "src/component/NFTCard";

const useStyles = makeStyles((theme) => ({
  wallet: {
    background: "#111111",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    margin: "0 10px 16px",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4),
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
  sectionTitleHead: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    margin: "10px 0 0 ",
    padding: "0 0",
    width: "100%",
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

export default function FeaturesNFT() {
  // slider / style block ---------------------------------

  const classes = useStyles();
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    className: "recomended",
    autoplay: false,
    infinite: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
        },
      },
    ],
  };

  // function block --------------------------------------

  const [walletDetails, setWalletDetails] = useState([]);

  const history = useHistory();

  const { active, account, chainId, library } = useWeb3React();

  useEffect(() => {
    axios({
      method: "post",
      url: apiConfig.listNewOrder,
    })
      .then((res) => {
        console.log("122-------------", res.data.result);
        setWalletDetails(res.data.result.docs);
      })
      .catch((err) => console.log(err));
    console.log(walletDetails);
  }, [account]);

  // Return block -----------------------------------------

  return (
    <>
      <Box className={classes.wallet}>
        {" "}
        {/* featured */}
        <Box>
          <Container>
            <Grid container spacing={2} style={{ display: "block" }}>
              <Grid container>
                <Box className={classes.sectionTitleHead}>
                  <Typography variant="h2" className="mainHeading">
                    NEW COLLECTIONS{" "}
                  </Typography>
                </Box>
                <Box className="mainDescription">
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et
                  </Typography>
                </Box>
              </Grid>
              <Grid
                container
                spacing={1}
                justify="space-between"
                style={{ width: "calc(100% + 20px)" }}
              >
                {/* <NFTCard /> */}
              </Grid>
            </Grid>
            <Box mt={8}>
              <hr />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
