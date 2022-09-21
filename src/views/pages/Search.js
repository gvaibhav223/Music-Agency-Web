import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Link,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { apiConfig } from "src/constants/index";
import { useLocation } from "react-router";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import NFTCard from "src/component/NFTCard";

const useStyles = makeStyles((theme) => ({
  MarketPlace: {
    // background: "#fff",
    minHeight: "calc(100vh - 544px)",
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(8),
    },
  },
  filtermenu: {
    display: "flex",
    justifyContent: "center",
    width: 120,
    height: 40,
    borderWidth: 3,
    backgroundColor: "grey",
    borderRadius: 30,
    alignItems: "center",
  },
  colorblack: {
    color: "#000",
  },
}));

export default function Search() {
  const classes = useStyles();
  const [listAllCreatedNft, setlistAllCreatedNft] = React.useState([]);
  const [listAllCreatedNft1, setlistAllCreatedNft1] = React.useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const placeorderlistapi = async (id) => {
    try {
      setlistAllCreatedNft([]);
      setIsLoading(true);
      axios
        .request({
          method: "POST",
          url: apiConfig.listAllCreatedNft,
          data: {
            search: id,
          },
          headers: {
            token: window.sessionStorage.getItem("token"),
          },
        })
        .then(async (res) => {
          if (res.data.response_code === 200) {
            const filterData = res.data.result.docs.filter((data, i) => {
              return data.saleType === "ONSALE";
            });
            console.log("filterData---", filterData);
            setlistAllCreatedNft(filterData);
            console.log("data123", res.data.result);
            setlistAllCreatedNft1(true);
            setIsLoading(false);
          } else {
            setlistAllCreatedNft1(false);
            setIsLoading(false);
          }
        });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location.search.substring(1, location.search.length)) {
      const id = location.search.substring(1, location.search.length);
      placeorderlistapi(id);
      // handleClickOpen(id)
    }
  }, [location]);

  return (
    <>
      <Box className={classes.MarketPlace}>
        <Container maxWidth="lg">
          {" "}
          <Box>
            <Grid container spacing={0} className="sectionHeading">
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h2" style={{ color: "green" }}>
                    NFTs
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* featured */}
          <Box mt={2} mb={2}>
            <Grid container spacing={0}>
              {isLoading ? (
                <Box display="flex" alignItems="center">
                  <h4>Loading....</h4> <ButtonCircularProgress />
                </Box>
              ) : (
                listAllCreatedNft?.map((data, i) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      md={3}
                      key={i}
                      className="walletSet p-0"
                    >
                      <NFTCard data={data} index={i} />
                    </Grid>
                  );
                })
              )}
              {!isLoading &&
                listAllCreatedNft &&
                listAllCreatedNft.length === 0 && (
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box textAlign="center">
                      <h1
                        style={{
                          textAlign: "center",

                          alignItems: "center",
                          fontSize: "20px",
                        }}
                      >
                        No items found for this search
                      </h1>
                    </Box>
                    <Box>
                      <Link href="/marketplace">
                        <Box pt={2}>
                          <Button variant="contained" color="secondary">
                            Back to all items
                          </Button>
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                )}
            </Grid>{" "}
          </Box>
        </Container>
      </Box>
    </>
  );
}
