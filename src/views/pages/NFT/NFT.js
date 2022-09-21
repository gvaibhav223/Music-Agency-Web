import React from "react";
import GiftsCard from "src/component/GiftsCard";
import GiftsCard1 from "src/component/GiftsCard1";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { useState, useEffect } from "react";
import axios from "axios";
import { apiConfig } from "src/constants/index";

import ButtonCircularProgress from "src/component/ButtonCircularProgress";

const useStyles = makeStyles((theme) => ({
  wallet: {
    background: "#000",
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(10),
    minHeight: "570px",
  },
  sectionTitleHead: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    margin: "10px 0 ",
    // padding: "0",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  metamask: {
    maxWidth: "100%",
    width: "400px",
  },
  selectOption: {
    width: "300px",
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

export default function NFT() {
  const classes = useStyles();
  //declaration blocks
  const [walletDetails, setWalletDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [soldNft, setSoldNft] = useState([]);
  const [isLoadingMyNFT, setIsLoadingMYNFT] = useState(false);

  // function blocks
  const soldNFTHandler = async () => {
    setIsLoadingMYNFT(true);
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.mySoldNfts,
        headers: {
          token: sessionStorage.getItem("token"),
        },
      });
      if (res.data.response_code === 200) {
        setSoldNft(res.data.result.docs);
        setIsLoadingMYNFT(false);
      }
      setIsLoadingMYNFT(false);
    } catch (error) {
      console.log(error);
      setIsLoadingMYNFT(false);
    }
  };
  const myNFTHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.withoutOrderList,
        headers: {
          token: window.sessionStorage.getItem("token"),
        },
      });
      if (res.data.response_code === 200) {
        setWalletDetails(res.data.result.docs);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    soldNFTHandler();
    myNFTHandler();
  }, []);

  return (
    <>
      <Box className={classes.wallet}>
        {" "}
        <Box mt={3} mb={2}>
          <Container fixed>
            <Grid container spacing={2} style={{ display: "block" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} className="walletSet">
                  <Box textAlign="start " mb={3}>
                    <Typography variant="h4" className="SectionTitle m-b-5">
                      My Nft
                    </Typography>
                  </Box>
                </Grid>
                <Grid container spacing={2}>
                  {walletDetails &&
                    walletDetails.map((data, i) => {
                      return data.currentBid === "false" ? (
                        <Grid
                          item
                          xs={12}
                          md={4}
                          lg={3}
                          sm={6}
                          key={i}
                          className="walletSet"
                        >
                          <GiftsCard data={data} type="" index={i} />
                        </Grid>
                      ) : (
                        <Grid
                          item
                          xs={12}
                          md={4}
                          lg={3}
                          sm={6}
                          key={i}
                          className="walletSet"
                        >
                          <GiftsCard data={data} type="mynft" index={i} />
                        </Grid>
                      );
                    })}

                  {isLoading && (
                    <Box display="flex" alignItems="center">
                      <Typography>Loading...</Typography>
                      <ButtonCircularProgress />
                    </Box>
                  )}
                  {!isLoading &&
                    walletDetails &&
                    walletDetails.length === 0 && (
                      <Typography style={{ marginLeft: "10px" }}>
                        No data found!
                      </Typography>
                    )}
                </Grid>
              </Grid>
              <Grid container>
                <Box pt={3} className={classes.sectionTitleHead}>
                  <Typography variant="h4" className="SectionTitle m-b-5">
                    My Sold NFT's
                  </Typography>
                </Box>
              </Grid>
              <Grid container spacing={2}>
                {soldNft &&
                  soldNft.map((data, i) => {
                    return data.currentBid === "false" ? (
                      <Grid
                        item
                        xs={12}
                        md={4}
                        lg={3}
                        key={i}
                        className="walletSet"
                      >
                        <GiftsCard data={data} type="sold" index={i} />
                      </Grid>
                    ) : (
                      <Grid
                        item
                        xs={12}
                        md={4}
                        sm={6}
                        lg={3}
                        key={i}
                        className="walletSet"
                      >
                        <GiftsCard data={data} type="sold" index={i} />
                      </Grid>
                    );
                  })}

                {isLoadingMyNFT && (
                  <Box display="flex" alignItems="center">
                    <Typography>Loading...</Typography>
                    <ButtonCircularProgress />
                  </Box>
                )}
                {!isLoadingMyNFT && soldNft && soldNft.length === 0 && (
                  <Typography style={{ marginLeft: "10px" }}>
                    No data found!
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
