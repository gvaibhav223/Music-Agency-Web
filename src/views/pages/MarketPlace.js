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
  InputBase,
  InputAdornment,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import NFTCard from "src/component/NFTCard";
import CancelIcon from "@material-ui/icons/Cancel";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiConfig } from "src/constants";
import { useWeb3React } from "@web3-react/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { BiSearchAlt2 } from "react-icons/bi";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  MarketPlace: {
    background: "#000",
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(15),
    minHeight: "45vh",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(14.8),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(14.8),
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
  field: {
    height: "40px",
    border: "1px solid #07bc0c",
    padding: "9px 10px 10px 20px",
    borderRadius: "4px",

    fontSize: "14px",
  },
  searchSection: {
    marginTop: "2rem",
    "@media(max-width:600px)": {
      marginTop: ".7rem",
    },
  },
}));

export default function MarketPlace() {
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
  const [fromData, setFromData] = useState();
  const [toData, setToData] = useState();
  const [search, setSearch] = useState();
  const [saleType, setSaleType] = useState();
  const [statusType, setStatusType] = useState();

  const Orderlist = async (page) => {
    try {
      setData([]);
      setIsLoading(true);
      const res = await axios({
        method: "POST",
        url: apiConfig.listNewOrder,
        data: {
          page: page,
          fromDate: fromData ? moment(fromData).toISOString() : null,
          toDate: toData ? moment(toData).toISOString() : null,

          search: search ? search : null,
          price: saleType ? saleType : null,
          status: statusType ? statusType : null,
        },
      });
      if (res.data.response_code === 200) {
        setData(res.data.result.docs);
        setNumpages(res.data.result.pages);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      console.log(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    Orderlist(pages);
  }, [pages]);

  useEffect(() => {
    if (search || fromData || saleType || statusType || toData || pages) {
      Orderlist();
    }
  }, [search, fromData, saleType, statusType, toData, pages]);

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
                    Explore NFT
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={3}
              style={{ marginTop: "0rem", marginBottom: "1rem" }}
            >
              <Grid item xs={12} md={3} lg={3} sm={4}>
                <Typography>Price</Typography>
                <Box style={{ marginTop: "8px" }}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel margin="dense">Min</InputLabel>
                    <Select
                      margin="dense"
                      label="Auction "
                      name="token"
                      onChange={(e) => setSaleType(e.target.value)}
                      // onChange={(e) => setCurrentValue(e.target.value)}
                      value={saleType}
                    >
                      <MenuItem value="Min" style={{ fontSize: "12px" }}>
                        Min
                      </MenuItem>
                      <MenuItem value="Max" style={{ fontSize: "12px" }}>
                        Max
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} lg={2} sm={4}>
                <Typography>Type</Typography>
                <Box style={{ marginTop: "8px" }}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel margin="dense">Latest</InputLabel>
                    <Select
                      margin="dense"
                      label="Auction "
                      name="token"
                      onChange={(e) => setStatusType(e.target.value)}
                      value={statusType}
                    >
                      <MenuItem value="latest" style={{ fontSize: "12px" }}>
                        Latest
                      </MenuItem>
                      <MenuItem value="oldest" style={{ fontSize: "12px" }}>
                        Oldest
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={12} md={3} lg={2} sm={4}>
                <Typography>From</Typography>

                <KeyboardDatePicker
                  className={classes.date}
                  style={{ width: "100%" }}
                  placeholder="DD/MM/YYYY"
                  format="DD/MM/YYYY"
                  inputVariant="outlined"
                  disableFuture
                  margin="dense"
                  name="dateOfBirth"
                  value={fromData}
                  onChange={(date) => setFromData(date)}
                />
              </Grid>

              <Grid item xs={12} md={3} lg={2} sm={4}>
                <Typography>To</Typography>
                <KeyboardDatePicker
                  className={classes.date}
                  style={{ width: "100%" }}
                  placeholder="DD/MM/YYYY"
                  format="DD/MM/YYYY"
                  inputVariant="outlined"
                  disableFuture
                  margin="dense"
                  name="dateOfBirth"
                  value={toData}
                  onChange={(date) => setToData(date)}
                />
              </Grid>
              <Grid item lg={3} md={3} sm={4} xs={12}>
                <Box className={classes.searchSection}>
                  <InputBase
                    fullWidth
                    type="text"
                    className={classes.field}
                    placeholder="Search by NFT's / name /id"
                    onChange={(e) => setSearch(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <BiSearchAlt2
                          style={{
                            fontSize: "25px",
                            cursor: "pointer",
                          }}
                        />
                      </InputAdornment>
                    }
                  />
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
        <Box mb={2}>
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
              {!isLoading && data && data.length === 0 && "No Data Found"}
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
