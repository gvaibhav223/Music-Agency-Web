import React, { useEffect, useState, useContext } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  Accordion,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AlarmIcon from "@material-ui/icons/Alarm";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { } from "react-feather";
import moment from "moment";
import {
  NftTokenAddress as NFTAddress,
  MarketPlaceAddress,
  marketplaceether,
} from "src/constants/index";

import { NFTTokenABI } from "src/ABI/NFTTokenABI.js";

// import Apiconfig from "../../../config/APIConfig";
import { apiConfig } from "src/constants";

import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { UserContext } from "src/context/User";
import { useWeb3React } from "@web3-react/core";
import { marketPlaceABI } from "src/ABI/MarketPlaceABI";
import { ethers } from "ethers";

import { getContract, calculateTimeLeft, sortAddress } from "src/utils/index";

import { Audiotrack } from "@material-ui/icons";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import Accordian from "./Accordian";
import MyActivityCard from "./MyActivityCard";

import CopyToClipboard from "react-copy-to-clipboard";
import { DateTimePicker } from "@material-ui/pickers";
import CircularProgress from "@material-ui/core/CircularProgress";

import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import History from "./History";
import { AuthContext } from "src/context/Auth";

const accessToken = window.localStorage.getItem("creatturAccessToken");
const useStyles = makeStyles((theme) => ({
  welcomBox: {
    boxShadow: " 0 0 10px rgb(165 165 165 / 20%)",
    borderBottom: "3px solid rgb(37, 45, 71)",
    backgroundColor: "#fff",

    // borderRadius:"10px",
    padding: "20px",
    paddingBottom: "20px",
    "& label": {
      fontSize: "16px",
      fontStyle: "italic",
      color: " #909090",
    },
    "& h5": {
      fontWeight: " 600",
      margin: "10px 0",
    },
  },
  butm: {
    display: "flex",
    justifyContent: "center",
    // "&:hover": {
    //   backgroundColor: "red",
    // },
  },
  butm1: {
    backgroundColor: "#252d47",
    borderRadius: "5px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "red",
      border: "0px",
    },
  },
  butm2: {
    backgroundColor: "#252d47",
    borderRadius: "5px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "red",
      border: "0px",
    },
  },
  audioSection: {
    padding: "5px 20px",
    width: "100%",
    overflow: "hidden",
    "@media(max-width: 1024px)": {
      padding: "10px 0px",
      width: "333px",
    },
  },
  NftBreed: {
    backgroundColor: "#111111",

    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(15),
      paddingBottom: theme.spacing(8),
    },
  },
  box: {
    boxShadow: "0 0 20px rgb(8 21 66 / 10%)",
  },
  menu: {
    maxWidth: "100%",
    marginTop: 53,
  },
  box: {
    boxShadow: "0 0 20px rgb(8 21 66 / 10%)",
  },
  avtar: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    textTransform: "uppercase",
  },
  playbutton: {
    position: "absolute",
    top: 230,
    right: 220,
    zIndex: 5,
  },
  pricetext: {
    fontSize: 18,
    color: "lightgreen",
    fontWeight: "bold",
  },
  durationSection: {
    display: "flex",
    justifyContent: "space-between",
    "& h4": {
      fontSize: "16px",
    },
    "@media(max-width:440px)": {
      display: "block",
      "& h4": {
        marginTop: ".5rem",
      },
    },
  },
  actionButton: {
    display: "block",
    "@media(max-width:471px)": {
      display: "flex",
    },
  },
  flexbox: {
    display: "flex",
    justifyContent: "space-between",
    "@media(max-width:474px)": {
      display: "block",
    },
  },
  textFeild: {
    "@media(max-width:474px)": {
      marginBottom: "15px",
    },
  },

  // Transaction
}));
export default function ViewNft({ type }) {
  const user = useContext(UserContext);

  const { account, chainId, library } = useWeb3React();

  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const [putOnSale, setputOnSale] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [price, setprice] = React.useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [text, setText] = React.useState("create");
  const location = useLocation();

  const [expiry, setexpiry] = React.useState(moment().add(1, "h"));

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  const history = useHistory();
  const [data, setdata] = React.useState();
  const [listdata, setlistdata] = React.useState([]);
  const [open1, setOpen1] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [tabview, setTabView] = useState("owner");
  const [viewId, setViewID] = useState("");

  //viewNft
  const viewNft = async (id) => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.viewNft + viewId,
        headers: {
          token: window.sessionStorage.getItem("token"),
        },
      });

      if (res.data.response_code === 200) {
        setdata(res.data.result);
        setIsLoading(false);
        ViewTransaction(res.data.result._id);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("---error---", error);
    }
  };

  const ViewTransaction = async (id) => {
    await axios({
      method: "GET",
      url: apiConfig.viewNftTransaction + id,
    }).then(async (res) => {
      if (res.data.response_code === 200) {
        console.log("respnse----", res.data.result);
        setlistdata(res.data.result);
      }
      console.log("dattaaaaaa++", res.data.result);
    });
  };

  useEffect(() => {
    if (location.search.substring(1, location.search.length)) {
      const id = location.search.substring(1, location.search.length);
      setViewID(id);
      ViewTransaction(id);
      console.log("id----", id);
      if (viewId) {
        if (window.sessionStorage.getItem("token")) {
          viewNft();
        }
      }
    }
  }, [location, viewId, window.sessionStorage.getItem("token")]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(
        calculateTimeLeft(new Date(moment(data?.expiryTime).unix() * 1000))
      );
    }, 1000);
    return () => clearTimeout(timer);
  });

  const PutOnsaleMusic = async () => {
    try {
      setLoading(true);
      setIsSubmit(true);

      const contractObj = getContract(
        NFTAddress,
        NFTTokenABI,
        library,
        account
      );

      const NFTApprovalID = await contractObj.approve(
        MarketPlaceAddress,
        parseInt(data.tokenId)
      );

      await NFTApprovalID.wait();

      const createObj = getContract(
        MarketPlaceAddress,
        marketPlaceABI,
        library,
        account
      );

      const marketPlace = await createObj.createOrder(
        NFTAddress,
        parseInt(data.tokenId),
        ethers.utils.parseEther(price?.toString()),
        moment(expiry).unix(),
        marketplaceether
      );
      await marketPlace.wait();

      //Place Order NFT----------------------------

      setText("Placing Order");
      const formDataOrder = {
        nftId: data._id,
        description: data.description,
        currentOwner: account,
        price: price,
        expiryTime: expiry,
      };
      // toast.error("error")
      await axios({
        method: "POST",
        url: apiConfig.placeOrder,
        data: formDataOrder,
        headers: {
          token: window.sessionStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (res.response_code !== "200") {
          } else {
            history.push("/marketplace");
            setputOnSale(false);
            toast.success("Your order has been placed successfully.");
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
      history.push("/marketplace");
      setText("Create");
      setLoading(false);
      toast.success("Your order has been placed successfully.");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const [accounCheck, setAccountCheck] = useState("");
  const showNftHistoryhandler = async (_id) => {
    setIsLoading(true);

    try {
      const res = await axios.get(apiConfig.viewNftTransaction + _id, {
        headers: {
          token: sessionStorage.getItem("token"),
        },
      });
      if (res.data.response_code === 200) {
        const finder = res.data.result.find((data) => {
          return data.type === "SELL";
        });
        setAccountCheck(finder.userId.walletAddress);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    if (data?.nftId?._id || data?._id) {
      showNftHistoryhandler(data?.nftId?._id || data?._id);
    }
  }, [data]);
  return (
    <Box className={classes.NftBreed}>
      <Container maxWidth="fixed">
        {isLoading ? (
          <Box>
            <ButtonCircularProgress />
          </Box>
        ) : (
          <>
            <Box>
              <Container>
                <Grid
                  style={{ marginTop: "0" }}
                  container
                  spacing={3}
                // alignItems="center"
                >
                  <Grid item xs={12} sm={6} lg={5}>
                    <Box>
                      <Paper
                        className={classes.box}
                        style={{ position: "relative" }}
                      >
                        {data && data?.mimetype === "audio" && (
                          <>
                            <img
                              width="100%"
                              height="100%"
                              src={data && data.uri && data.thumbNails}
                              style={{ borderRadius: "5px", display: "block" }}
                            />
                          </>
                        )}
                        {data && data?.mimetype === "audio" && (
                          <Box style={{ marginTop: "1rem" }}>
                            <video
                              width="100%"
                              controls="false"
                              height="72px"
                              autoplay="true"
                              loop
                              muted
                              playsinline="true"
                              style={
                                data && data?.mimetype === "audio"
                                  ? { borderRadius: "10px" }
                                  : { borderRadius: "10px" }
                              }
                            >
                              <source src={data?.uri} type="video/mp4" />
                            </video>
                          </Box>
                        )}
                      </Paper>
                    </Box>

                    {data && data?.mimetype !== "audio" && (
                      <>
                        <img
                          width="100%"
                          height="100%"
                          className={classes.fixed_img}
                          src="images/card_img_1.jpeg"
                          style={{ borderRadius: "5px" }}
                        />
                      </>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={7} className="scoringSystem">
                    <Box className="posrel">
                      <Typography
                        style={{
                          color: "rgb(37, 45, 71)",

                          wordBreak: "break-all",
                        }}
                        variant="h2"
                        className="text-white"
                      >
                        <span className={classes.name}>
                          {data && data.tokenName}
                        </span>
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="h6"
                        className="descriptiontext"
                        style={{
                          paddingTop: "2%",
                          wordBreak: "break-all",
                        }}
                      >
                        {data && data.description}
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Paper className={classes.box}>
                        <Box p={2} className="bgCardcolor">
                          <Box className={classes.durationSection}>
                            <Box className="d-flex">
                              <Typography variant="body2" color="textSecondary">
                                Price : N/A
                              </Typography>
                            </Box>
                            <Typography variant="body2" color="textSecondary">
                              <Typography>
                                Created At :&nbsp;
                                {moment(data?.createdAt).format(
                                  "MMM Do YY, h:mm a"
                                )}
                              </Typography>
                            </Typography>
                          </Box>
                          <Box mt={3}>
                            {location?.state && location?.state === "sold" ? (
                              ""
                            ) : (
                              <Box>
                                <Button
                                  style={{
                                    marginTop: "16px",
                                  }}
                                  variant="contained"
                                  color="secondary"
                                  onClick={() => {
                                    if (user?.userData?.email === "" || user?.userData?.email === undefined) {
                                      toast.warn("Please update your profile first")
                                      history.push("edit-profile")
                                    }

                                    setputOnSale(true)


                                  }}
                                >
                                  Put On Sale
                                </Button>
                              </Box>
                            )}

                            {putOnSale && (
                              <Dialog
                                fullWidth="sm"
                                maxWidth="xs"
                                open={putOnSale}
                                onClose={() => {
                                  if (!loading) {
                                    setputOnSale(false);
                                  }
                                }}
                                aria-labelledby="max-width-dialog-title"
                                className="dialogBox"
                              >
                                <DialogContent>
                                  <Box
                                    mt={1}
                                    component="div"
                                    className={classes.lastBox}
                                  >
                                    <Box mb={2}>
                                      <Box>
                                        <label
                                          style={{
                                            color: "#fff",
                                            margin: "7px, 0",
                                          }}
                                        >
                                          Price :
                                        </label>
                                      </Box>

                                      <TextField
                                        style={{
                                          color: "black",
                                          margin: "10px, 0",
                                        }}
                                        onChange={(e) =>
                                          setprice(e.target.value)
                                        }
                                        value={price}
                                        name="price"
                                        type="number"
                                        className={classes.textField}
                                        variant="outlined"
                                        disabled={loading}
                                        fullWidth
                                      />
                                      {isSubmit && Number(price) <= 0 && (
                                        <FormHelperText
                                          error
                                          style={{ marginLeft: "0px" }}
                                        >
                                          Please enter valid price
                                        </FormHelperText>
                                      )}
                                      {isSubmit && Number(price) >= 18 && (
                                        <FormHelperText
                                          error
                                          style={{ marginLeft: "0px" }}
                                        >
                                          Please enter valid price
                                        </FormHelperText>
                                      )}
                                    </Box>
                                    <Box
                                      mt={2}
                                      mb={2}
                                      component="div"
                                      className={classes.dateField}
                                    >
                                      <Box>
                                        <label
                                          style={{
                                            color: "#fff",
                                            margin: "7px, 0",
                                          }}
                                        >
                                          Expiry Date :
                                        </label>
                                      </Box>

                                      <DateTimePicker
                                        fullWidth
                                        inputVariant="outlined"
                                        value={expiry}
                                        disabled={loading}
                                        onChange={(date) => {
                                          setexpiry(date);
                                        }}
                                        format="DD/MM/yyyy hh:mm A"
                                        minDate={moment()}
                                      />
                                      {isSubmit &&
                                        moment(expiry).unix() <=
                                        moment().unix() && (
                                          <FormHelperText
                                            error
                                            style={{
                                              marginLeft: "0px",
                                            }}
                                          >
                                            Please select valid date
                                          </FormHelperText>
                                        )}
                                    </Box>
                                  </Box>

                                  <DialogActions>
                                    {price >= 0.0000001 && (
                                      <Button
                                        variant="contained"
                                        disabled={loading}
                                        onClick={PutOnsaleMusic}
                                        color="secondary"
                                      >
                                        Put On Sale{" "}
                                        {loading && (
                                          <CircularProgress
                                            style={{
                                              color: "#1ed760",
                                              fontSize: "10px",
                                              width: "26px",
                                              height: "26px",
                                            }}
                                          />
                                        )}
                                      </Button>
                                    )}
                                  </DialogActions>
                                </DialogContent>
                              </Dialog>
                            )}

                            <Grid item xs={12} md={12}>
                              <Box mt={3}>
                                <Paper className={classes.box}>
                                  <Accordian title="Blockchain info">
                                    <Box>
                                      <Box
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        <Typography
                                          variant="body2"
                                          className="text-white"
                                        >
                                          Contract Address
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          color="textSecondary"
                                        >
                                          {sortAddress(data?.contractAddress)}
                                          {/* {data?.currentOwner} */}

                                          <CopyToClipboard
                                            text={data && data?.contractAddress}
                                          >
                                            <IconButton
                                              style={{ fontSize: ".8rem" }}
                                            >
                                              <FaCopy
                                                style={{
                                                  color: "#fff",
                                                }}
                                                onClick={() =>
                                                  toast.info("Copied")
                                                }
                                              />
                                            </IconButton>
                                          </CopyToClipboard>
                                        </Typography>
                                      </Box>
                                      <Box
                                        className="d-flex m-b-5"
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          paddingRight: "10px",
                                        }}
                                      >
                                        <Typography
                                          variant="body2"
                                          className="text-white"
                                        >
                                          Token ID
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          color="textSecondary"
                                        >
                                          {data && data.tokenId}
                                        </Typography>
                                      </Box>
                                      <Box className="d-flex m-b-5">
                                        <Typography
                                          variant="body2"
                                          className="text-white"
                                        >
                                          Token Standard
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          color="textSecondary"
                                        >
                                          ERC-721
                                        </Typography>
                                      </Box>
                                      <Box className="d-flex m-b-5">
                                        <Typography
                                          variant="body2"
                                          className="text-white"
                                        >
                                          Blockchain
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          color="textSecondary"
                                        >
                                          Ethereum
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Accordian>
                                </Paper>
                              </Box>
                            </Grid>
                            <Grid item lg={12}>
                              <Button
                                className={tabview === "owner" ? "active" : " "}
                                onClick={() => setTabView("owner")}
                              >
                                Owner
                              </Button>
                              <Button
                                className={
                                  tabview === "history" ? "active" : " "
                                }
                                onClick={() => setTabView("history")}
                              >
                                History
                              </Button>
                              {tabview === "owner" ? (
                                <MyActivityCard
                                  data={data}
                                  type={location?.state}
                                  account={account}
                                  accounCheck={accounCheck}
                                />
                              ) : (
                                ""
                              )}
                              {tabview === "history" ? (
                                <History
                                  orderDetails={data}
                                // setAccountCheck={(item) =>
                                //   setAccountCheck(item)
                                // }
                                />
                              ) : (
                                ""
                              )}
                            </Grid>
                          </Box>
                        </Box>
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </>
        )}

        {/* transaction */}
      </Container>
    </Box>
  );
}
