import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Link,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import NFTCard from "src/component/NFTCard";
import CancelIcon from "@material-ui/icons/Cancel";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiConfig } from "src/constants";
import { useWeb3React } from "@web3-react/core";

const useStyles = makeStyles((theme) => ({
  MarketPlace: {
    background: "#000",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
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
  root: {
    "& > *": {
      marginTop: theme.spacing(-6),
      float: "right",
    },
  },
}));

export default function PopularNFT() {
  //----------------declaration ---------------------
  const classes = useStyles();
  const [select, setSelect] = React.useState("");
  const [isHide, setIsHide] = React.useState(true);
  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState();
  const [data, setData] = useState([]);

  const [pages, setpages] = useState(1);
  const [numpages, setNumpages] = useState(1);
  const Orderlist = async (page) => {
    setIsLoading(true);
    try {
      await axios
        .post(apiConfig.listNewOrder, {
          data: {
            page,
          },
        })
        .then(async (res) => {
          if (res.data.response_code === 200) {
            setData(res.data.result.docs);
            setNumpages(res.data.result.pages);
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    Orderlist(pages);
  }, [pages]);

  //------------------------------------
  return (
    <>
      <Box className={classes.MarketPlace}>
        {" "}
        <Box>
          <Container maxWidth="lg">
            <Grid container spacing={2} className="sectionHeading">
              <Grid item xs={12}>
                <Box style={{ textAlign: "left" }}>
                  <Typography variant="h2" className="text-white">
                    Popular NFT
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* featured */}
        <Container maxWidth="lg">
          {isHide && (
            <Box container display="flex" justifyContent="center">
              <Grid
                className="entry-meta"
                container
                spacing={1}
                style={{ display: "flex" }}
              ></Grid>
            </Box>
          )}
        </Container>
        <Box mt={5} mb={2}>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              {isLoading ? (
                <Box display="flex" alignItems="center">
                  <h1>Loading....</h1> <ButtonCircularProgress />
                </Box>
              ) : (
                <>
                  {data &&
                    data.map((data, i) => {
                      if (data?.nftId?.isPlace === false) {
                        return;
                      }
                      return (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          key={i}
                          className="walletSet p-0"
                        >
                          <NFTCard data={data} index={i} />
                        </Grid>
                      );
                    })}
                </>
              )}
              {!isLoading && data && data.length === 0 && (
                <Typography style={{ paddingLeft: "10px" }}>
                  No Data Found
                </Typography>
              )}
            </Grid>{" "}
          </Container>
        </Box>
        <Box className={classes.root}>
          {data && data.length >= 10 && (
            <Pagination
              onChange={(e, v) => setpages(v)}
              count={parseInt(numpages)}
              color="primary"
            />
          )}
        </Box>
      </Box>
    </>
  );
}
