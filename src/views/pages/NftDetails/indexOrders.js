import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Select,
  FormControl,
  Avatar,
  Checkbox,
  Link,
  OutlinedInput,
  InputAdornment,
  Table,
  FormHelperText,
} from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import Page from "src/component/Page";

import { toast } from "react-toastify";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Accordian from "src/views/pages/NftDetails/Accordian";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";
import ShareIcon from "@material-ui/icons/Share";
import * as yep from "yup";

import {
  getContract,
  getWeb3Obj,
  getWeb3ContractObject,
  sortAddress,
  calculateTimeLeft,
} from "src/utils";
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { apiConfig } from "src/constants/index";
import { useWeb3React } from "@web3-react/core";
import { NFTTokenABI } from "src/ABI/NFTTokenABI.js";
import {
  NftTokenAddress as NFTAddress,
  MarketPlaceAddress,
  deadAddress,
} from "src/constants/index";
import { marketPlaceABI } from "src/ABI/MarketPlaceABI";
import moment from "moment";
import { ethers } from "ethers";
import { ERC } from "src/ABI/IERC20ABI";
import StopIcon from "@material-ui/icons/Stop";
import { AudioCard, VideoCard, SoundButton } from "material-ui-player";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useLocation } from "react-router-dom";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { DateTimePicker } from "@material-ui/pickers";
import { UserContext } from "src/context/User";
import { FaCopy } from "react-icons/fa";
import ReportIcon from "@material-ui/icons/Report";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { Form, Formik } from "formik";
import { values } from "lodash";
import History from "./History";

import MyActivityCard from "./MyActivityCard";

const useStyles = makeStyles((theme) => ({
  NftBreed: {
    backgroundColor: "#111111",
    paddingTop: theme.spacing(12),
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
  menu: {
    maxWidth: "100%",
    marginTop: 53,
  },
  box: {
    boxShadow: "0 0 20px rgb(8 21 66 / 10%)",
    backgroundColor: "transparent !important",
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
  contentSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width:400px)": {
      display: "block",
    },
  },
  grpButton: {
    display: "flex",
    "@media(max-width:400px)": {
      display: "block",
      "& button": {
        marginTop: ".8rem",
      },
    },
  },
}));

export default function NftDetails() {
  // declaration block ------------------------------
  const classes = useStyles();
  const location = useLocation();

  const moreRef = useRef(null);
  const user = useContext(UserContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [openPlaceBid, setOpenPlaceBid] = useState(false);
  const [openBuyBid, setOpenBuyBid] = useState(false);
  const [openListBid, setOpenListBid] = useState(false);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("Put On Sale");
  const { account, library } = useWeb3React();
  const [music, setMusic] = useState(false);
  const [textBid, setTextBid] = useState("Place A Bid");
  const [textBuy, setTextBuy] = useState("Buy");
  const [orderId, setOrderId] = useState("");
  const [tabview, setTabView] = useState("owner");
  const [placeBidId, setPlaceBidId] = useState([]);
  // console.log("dgsfhxfg", placeBidId);

  const history = useHistory();
  const [orderExtraDeails, setOrderExtraDeails] = useState();

  const [bidExtraDetails, setBidExtraDetails] = useState();
  const [currentOwner, setCurrentOwner] = useState("");
  const [isOrderExpired, setIsOrderExpired] = useState(false);
  const [isUpdating, setIsUpdating] = useState("");
  const [price, setprice] = useState("");
  const [expiry, setExpiry] = useState(moment().add(1, "h"));
  const [isSubmit, setIsSubmit] = useState(false);
  const [lastBidPrice, setLastBidPrice] = useState(0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [reportLoading, setReportLoading] = useState(false);
  const [newloader, setnewloader] = useState(false);
  // let price = "";
  // let expiry = "";

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const orderDetailsHandler = async (_id) => {
    setnewloader(true);
    axios({
      method: "get",
      url: `${apiConfig.orderDisplay}/${_id}`,
      headers: {
        token: window.sessionStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (res.data.response_code === 200) {
          setData(res.data.result);
          getOrderExtraDetails(res?.data?.result?.nftId?.tokenId);
          setnewloader(false);
        } else {
          setnewloader(false);
        }
      })
      .catch((err) => setnewloader(false));
  };

  const getOrderExtraDetails = async (id) => {
    try {
      const curatorContractObj = await getWeb3ContractObject(
        marketPlaceABI,
        MarketPlaceAddress
      );

      if (curatorContractObj) {
        const contractObj = await getWeb3ContractObject(
          NFTTokenABI,
          NFTAddress
        );

        const bidByOrderId = await curatorContractObj.methods
          .bidByOrderId(NFTAddress, parseInt(id))
          .call();
        setBidExtraDetails(bidByOrderId);
        setLastBidPrice(ethers.utils.formatEther(bidByOrderId.price));
        const ordersData = await curatorContractObj.methods
          .orderByAssetId(NFTAddress, parseInt(id))
          .call();
        setOrderExtraDeails(ordersData);

        setIsOrderExpired(
          parseFloat(ordersData.expiresAt) < parseFloat(moment().unix())
        );
        console.log("ordersData", ordersData);

        try {
          const ownerOf = await contractObj.methods
            .ownerOf(parseInt(id))
            .call();
          console.log("ownerOf", ownerOf);

          setCurrentOwner(ownerOf);
        } catch (err) {
          console.log("ownerOf ERROR", err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Resale -------------------------------------
  async function resaleNFTHandler(e) {
    const contractObj = getContract(NFTAddress, NFTTokenABI, library, account);

    let tokenId = data.tokenId;

    // setText("Approving Token");

    try {
      const NFTApprovalID = await contractObj.approve(
        MarketPlaceAddress,
        tokenId
      );
      await NFTApprovalID.wait();
    } catch (err) {
      console.log(err);
    }

    try {
      const createObj = getContract(
        MarketPlaceAddress,
        marketPlaceABI,
        library,
        account
      );

      const marketPlace = await createObj.createOrder(
        NFTAddress,
        tokenId,
        ethers.utils.parseEther(price.toString()),
        moment(expiry).unix()
      );
      await marketPlace.wait();
    } catch (err) {
      console.log(err);
    }
    //Place Order NFT---------------------------------
    setText("Placing Order");
    const formDataOrder = {
      tokenId: tokenId,
      description: data.description,
      royalties: "0x0",
      price: price,
      couponAddress: "0x0",
      expiryTime: expiry,
      saleType: "ONSALE",
      orderType: "FIXED_PRICE",
      uri: data?.nftId?.uri,
    };
    await axios({
      method: "post",
      url: apiConfig.placeOrder,
      data: formDataOrder,
      headers: {
        token: window.sessionStorage.getItem("token"),
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    setText("On-Sale");
    window.alert("Order Now on Sale !!!");
    setLoading(false);
    setOpenListBid(false);
  }

  //place bid-------------------------------
  async function placeBidHandler(e) {
    setIsSubmit(true);
    if (user?.yourWalletBalance > "0") {
      if (parseFloat(user?.yourWalletBalance) >= parseFloat(price)) {
        if (
          Number(price) > 0 &&
          Number(price) > Number(lastBidPrice) &&
          moment(expiry).unix() > moment().unix()
        ) {
          setIsSubmit(false);

          setLoading(true);
          // setTextBid("Approving token");
          const contractObj = await getContract(
            MarketPlaceAddress,
            marketPlaceABI,
            library,
            account
          );

          try {
            const safePlaceBid = await contractObj.safePlaceBid(
              NFTAddress,
              data.nftId.tokenId,
              moment(expiry).unix(),
              0,

              { value: ethers.utils.parseEther(price) }
            );

            await safePlaceBid.wait();
            setTextBid("Placing Bid");
            await axios({
              method: "post",
              url: apiConfig.placeBid,
              headers: {
                token: window.sessionStorage.getItem("token"),
              },
              data: {
                orderId: data._id,
                price: price,
                expiry: expiry,
              },
            })
              .then((res) => {
                if (res.data.response_code === 200) {
                  // toast.success(res.data.response_message);
                  toast.success("Your bid has been placed successfully!");
                  orderDetailsHandler(data._id);
                  setOpenPlaceBid(false);
                  // setPlaceBidId(res.data.result._id);
                }
              })
              .catch((err) => {
                setLoading(false);
                console.log(err);
                setTextBid("Place Bid Again");
                toast.error(err.message);
              });
          } catch (err) {
            console.log(err);
            setLoading(false);
            setTextBid("Place Bid Again");
            toast.error(err.message);
          }
          setLoading(false);
          setTextBid("Place Another Bid");
        }
      } else {
        toast.error(`You don't have sufficient balance`);
      }
    } else {
      toast.success("Your wallet balance is too low.");
    }
  }

  // Buy------------------------------------------------------
  async function buyOrderHanlder(e) {
    if (user?.yourWalletBalance > "0") {
      if (parseFloat(user?.yourWalletBalance) >= parseFloat(data.price)) {
        try {
          setLoading(true);
          setTextBuy("Accepting token");

          const contractObj = getContract(
            MarketPlaceAddress,
            marketPlaceABI,
            library,
            account
          );
          // const acceptToken = await contractObj.acceptedToken();

          // const approveObj = getContract(acceptToken, ERC, library, account);
          // setTextBuy("Approving token");

          // const approve = await approveObj.approve(
          //   MarketPlaceAddress,
          //   ethers.utils.parseEther(data.price.toString()).toString()
          // );
          // await approve.wait();

          // setTextBuy("Executing Buying");

          const safeExecute = await contractObj.safeExecuteOrder(
            NFTAddress,
            parseInt(data?.nftId?.tokenId),
            // data.nftId.tokenId,
            // ethers.utils.parseEther(data.price.toString()).toString()

            0,
            { value: ethers.utils.parseEther(data.price.toString()) }
          );

          await safeExecute.wait();
          setTextBuy("Buying");
          console.log("data-----", data);
          await axios({
            method: "post",
            url: apiConfig.sellOrder,
            headers: {
              token: window.sessionStorage.getItem("token"),
            },
            data: {
              orderId: data._id,
              currentOwner: account,
            },
          })
            .then((res) => {
              if (res.data.response_code === 200) {
                toast.success(res.data.response_message);
              } else {
                toast.error(res.data.response_message);
              }

              setLoading(false);
              setOpenBuyBid(false);
              history.push("/nft");
            })
            .catch((err) => {
              setTextBuy("Buying Failed");
              toast.error(err.message);
              console.log(err);
              setLoading(false);
            });
        } catch (err) {
          toast.error(err.message);
          setLoading(false);
        }
        setLoading(false);
        setOpenBuyBid(false);
      } else {
        toast.error("You do not have sufficient balance.");
      }
    } else {
      toast.error("Your wallet balance is too low.");
    }
  }

  const cancelNormalOrderHanlder = async () => {
    setLoading(true);
    setIsUpdating("cancelOrder");
    try {
      const contractObj = getContract(
        MarketPlaceAddress,
        marketPlaceABI,
        library,
        account
      );
      console.log("data.nftId.tokenId---", data.nftId.tokenId);
      const res = await contractObj.cancelOrder(NFTAddress, data.nftId.tokenId);

      await res.wait();
      await cancelOrderAPIHanlder();
      setIsUpdating("");
    } catch (error) {
      toast.error(error.message);
      setIsUpdating("");
    }
  };

  const cancelOrderAPIHanlder = async () => {
    try {
      const res = await axios({
        method: "PUT",
        url: apiConfig.cancelOrder,
        headers: {
          token: sessionStorage.getItem("token"),
        },
        params: {
          orderId: data._id,
        },
      });
      orderDetailsHandler(data._id);
      if (res.data.response_code === 200) {
        toast.success("Order Cancel Successfully.");
        history.push("/profile");
        setLoading(true);
      } else {
        toast.warn(res.data.response_message);
        setLoading(true);
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(true);

      // setIsCancelOrderUpdating(false);
    }
  };

  const acceptBidBlockchainHandler = async () => {
    if (
      orderExtraDeails &&
      orderExtraDeails.seller.toLowerCase() !== deadAddress.toLowerCase() &&
      orderExtraDeails.seller.toLowerCase() === account.toLowerCase()
    ) {
      setIsUpdating("acceptBid");

      try {
        const contractObj = getContract(
          MarketPlaceAddress,
          marketPlaceABI,
          library,
          account
        );
        console.log("contraasdfasdctObj", bidExtraDetails.price.toString());
        const res = await contractObj.acceptBid(
          NFTAddress,
          data.nftId.tokenId,
          // ethers.utils.parseEther(
          //   ethers.utils.formatEther(bidExtraDetails.price)
          // )
          bidExtraDetails.price.toString()
        );
        await res.wait();
        acceptBidApiHandler();
        orderDetailsHandler(data?._id);
      } catch (error) {
        setIsUpdating("");
        toast.error(error.message);
      }
    } else {
      toast.warn("Bid not found");
    }
  };

  const cancelBidlockchainHandler = async () => {
    if (
      bidExtraDetails &&
      bidExtraDetails.bidder.toLowerCase() !== deadAddress.toLowerCase() &&
      bidExtraDetails.bidder.toLowerCase() === account.toLowerCase()
    ) {
      setIsUpdating("cancelBid");
      try {
        const contractObj = getContract(
          MarketPlaceAddress,
          marketPlaceABI,
          library,
          account
        );
        console.log("contractObj", contractObj);
        const res = await contractObj.cancelBid(NFTAddress, data.nftId.tokenId);
        await res.wait();
        await cancelBidHandler();

        setIsUpdating("");
        orderDetailsHandler(data?._id);
      } catch (error) {
        setIsUpdating("");
        toast.error(error.message);
      }
    } else {
      toast.warn("Bid not found");
    }
  };

  const cancelBidHandler = async () => {
    try {
      const res = await axios({
        method: "PUT",
        url: apiConfig.reject,
        headers: {
          token: sessionStorage.getItem("token"),
        },
        params: {
          bidId: placeBidId[0]._id,
        },
      });
      if (res.data.response_code === 200) {
        toast.success("Bid Cancel Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const bidListParticular = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.bidListParticular,
        headers: {
          token: sessionStorage.getItem("token"),
        },
      });
      if (res.data.response_code === 200) {
        setPlaceBidId(res?.data?.result?.docs);
      }
    } catch (error) {}
  };

  async function acceptBidApiHandler(e) {
    try {
      axios({
        method: "put",
        url: apiConfig.acceptBid,
        data: {
          bidId: data.bidId[data.bidId.length - 1],
          contractAddress: MarketPlaceAddress,
        },
        headers: {
          token: window.sessionStorage.getItem("token"),
        },
      })
        .then((res) => console.log(res.data.result))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(
        calculateTimeLeft(
          new Date(parseInt(orderExtraDeails?.expiresAt) * 1000)
        )
      );
    }, 1000);
    return () => clearTimeout(timer);
  });
  useEffect(() => {
    const arr = location.search.split("?");
    if (arr[1]) {
      setOrderId(arr[1]);
      orderDetailsHandler(arr[1]);
    }
  }, [location]);

  const reportHandler = async (values) => {
    try {
      setReportLoading(true);
      const res = await axios({
        method: "POST",
        url: apiConfig.createOrderReports,
        headers: {
          token: window.sessionStorage.getItem("token"),
        },
        data: {
          orderId: orderId,
          artist: values.artist,
          message: values.message,
        },
      });
      if (res.data.response_code === 200) {
        toast.success("Nft reported successfully");
        setReportLoading(false);
        setOpenReport(false);
      } else if (res.data.response_code === 409) {
        toast.error("You already reported.");
      }
      setReportLoading(false);
    } catch (error) {
      console.log(error);
      setReportLoading(false);
    }
  };
  useEffect(() => {
    bidListParticular();
  }, []);
  return (
    <>
      <Box style={{ minHeight: "600px" }}>
        <Page title="NFT Details">
          {/* {!data && data && <ButtonCircularProgress />} */}
          {newloader ? (
            <Box
              style={{
                position: "absolute",
                marginTop: "81px",
              }}
            >
              {" "}
              <ButtonCircularProgress />
            </Box>
          ) : (
            <>
              {data.nftId && (
                <Container>
                  <Box className={classes.NftBreed}>
                    {" "}
                    <Box>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={5}>
                          <Box>
                            <Paper className={classes.box}>
                              <img
                                src={data?.nftId?.thumbNails}
                                width="100%"
                                alt="NFTImage"
                                style={{
                                  borderRadius: "10px",
                                  display: "block",
                                }}
                              />

                              {data?.nftId?.mimetype === "audio" && (
                                <>
                                  <Box
                                    p={2}
                                    // className="bgCardcolor"
                                    style={{ borderRadius: "10px" }}
                                  >
                                    <video
                                      controls={true}
                                      autoplay={false}
                                      muted
                                      width="100%"
                                      height="72px"
                                      style={{
                                        // height: "280px",
                                        borderRadius: 10,
                                      }}
                                    >
                                      <source
                                        src={data?.nftId?.uri}
                                        type="video/mp4"
                                      />
                                    </video>
                                  </Box>
                                </>
                              )}
                            </Paper>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                          <Box className="posrel">
                            <Box className={classes.contentSection}>
                              <Box>
                                {data.nftId && (
                                  <Typography
                                    variant="h2"
                                    className="text-white"
                                    style={{
                                      wordBreak: "break-all",
                                    }}
                                  >
                                    <span className={classes.name}>
                                      {data?.nftId?.tokenName}
                                    </span>
                                  </Typography>
                                )}
                              </Box>
                              <Box
                              // className="ShareBox"
                              >
                                <IconButton
                                  size="small"
                                  className="m-l-10"
                                  style={{ color: "#fff" }}
                                  onClick={() => setOpenMenu(!openMenu)}
                                  ref={moreRef}
                                >
                                  <ShareIcon />
                                </IconButton>
                                <IconButton
                                  size="small"
                                  style={{ color: "#fff" }}
                                  className="m-l-10"
                                  onClick={() => setOpenReport(true)}
                                >
                                  {" "}
                                  <ReportIcon />
                                </IconButton>
                                {openMenu && (
                                  <Menu
                                    anchorEl={moreRef.current}
                                    anchorOrigin={{
                                      vertical: "top",
                                      horizontal: "left",
                                    }}
                                    onClose={handleMenuClose}
                                    open={openMenu}
                                    PaperProps={{ className: classes.menu }}
                                    transformOrigin={{
                                      vertical: "top",
                                      horizontal: "left",
                                    }}
                                    elevation={3}
                                  >
                                    <MenuItem>
                                      <ListItemIcon>
                                        <FacebookShareButton
                                          url={window.location}
                                          target="_blank"
                                          style={{
                                            display: "flex",

                                            alignItems: "center",
                                          }}
                                        >
                                          <SiFacebook />
                                          &nbsp;&nbsp;
                                          <ListItemText primary="Facebook" />
                                        </FacebookShareButton>
                                      </ListItemIcon>
                                    </MenuItem>
                                    <MenuItem>
                                      <ListItemIcon>
                                        <TwitterShareButton
                                          url={window.location}
                                          title={`Liberty NFT Marketplace`}
                                          hashtag="#camperstribe"
                                          style={{
                                            display: "flex",

                                            alignItems: "center",
                                          }}
                                        >
                                          <FaTwitter /> &nbsp;&nbsp;
                                          <ListItemText primary="Twitter" />
                                        </TwitterShareButton>
                                      </ListItemIcon>
                                    </MenuItem>
                                  </Menu>
                                )}
                              </Box>
                            </Box>

                            <Link href="/user">
                              {data && (
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  style={{ marginTop: "1.8rem" }}
                                >
                                  {data.tokenName}
                                </Typography>
                              )}
                            </Link>

                            <Typography
                              color="textSecondary"
                              variant="h6"
                              className="descriptiontext"
                              style={{ wordBreak: "break-all" }}
                            >
                              Description: {data.description}
                            </Typography>
                            {/* <Typography
                          color="textSecondary"
                          style={{ wordBreak: "break-all" }}
                        >
                          Url: {data.url}
                        </Typography> */}
                          </Box>
                          <Box mt={3}>
                            <Paper className={classes.box}>
                              <Box p={2} className="bgCardcolor">
                                <Box className={classes.durationSection}>
                                  <Box className="d-flex">
                                    {data && (
                                      <Typography
                                        variant="body2"
                                        color="textSecondary"
                                      >
                                        Price: {data.price} ETH
                                      </Typography>
                                    )}
                                  </Box>
                                  {orderExtraDeails && (
                                    <Typography
                                      variant="body2"
                                      color="textSecondary"
                                    >
                                      {parseFloat(orderExtraDeails?.expiresAt) <
                                        moment().unix() ||
                                      !orderExtraDeails?.expiresAt ? (
                                        <Typography variant="h4">
                                          Expired
                                        </Typography>
                                      ) : (
                                        <Typography variant="h4">
                                          Duration : &nbsp;
                                          {timeLeft.days
                                            ? timeLeft.days && timeLeft.days
                                            : "0"}
                                          d :&nbsp;
                                          {timeLeft.hours
                                            ? timeLeft.hours && timeLeft.hours
                                            : "0"}
                                          h :&nbsp;
                                          {timeLeft.minutes
                                            ? timeLeft.minutes &&
                                              timeLeft.minutes
                                            : "0"}
                                          m :&nbsp;
                                          {timeLeft.seconds
                                            ? timeLeft.seconds &&
                                              timeLeft.seconds
                                            : "0"}
                                          s
                                        </Typography>
                                      )}

                                      {orderExtraDeails &&
                                        orderExtraDeails?.seller ===
                                          "0x0000000000000000000000000000000000000000" &&
                                        "(Sold)"}
                                    </Typography>
                                  )}
                                </Box>
                                <Box mt={3}>
                                  {account &&
                                    orderExtraDeails?.seller == account &&
                                    true && (
                                      <Box>
                                        <Button
                                          variant="contained"
                                          color="secondary"
                                          size="medium"
                                          onClick={() =>
                                            cancelNormalOrderHanlder()
                                          }
                                          disabled={loading}
                                        >
                                          Remove From Sale{" "}
                                          {loading && (
                                            <ButtonCircularProgress />
                                          )}
                                        </Button>
                                      </Box>
                                    )}

                                  <Box mt={1} className={classes.grpButton}>
                                    {!isOrderExpired &&
                                      account &&
                                      orderExtraDeails?.seller != account && (
                                        <Button
                                          variant="contained"
                                          color="secondary"
                                          size="medium"
                                          onClick={() => setOpenPlaceBid(true)}
                                          disabled={isUpdating}
                                        >
                                          Place A Bid
                                        </Button>
                                      )}
                                    {!isOrderExpired &&
                                      account &&
                                      orderExtraDeails?.seller != account && (
                                        <Button
                                          variant="contained"
                                          color="secondary"
                                          size="medium"
                                          onClick={() => setOpenBuyBid(true)}
                                          disabled={isUpdating}
                                        >
                                          Buy
                                        </Button>
                                      )}
                                    {!isOrderExpired &&
                                      account &&
                                      bidExtraDetails?.bidder != deadAddress &&
                                      orderExtraDeails?.seller != deadAddress &&
                                      orderExtraDeails?.seller == account && (
                                        <Button
                                          variant="contained"
                                          color="secondary"
                                          size="medium"
                                          onClick={() =>
                                            acceptBidBlockchainHandler()
                                          }
                                          disabled={isUpdating}
                                        >
                                          Accept Bid{" "}
                                          {isUpdating == "acceptBid" && (
                                            <ButtonCircularProgress />
                                          )}
                                        </Button>
                                      )}

                                    {!isOrderExpired &&
                                      account &&
                                      bidExtraDetails?.bidder != deadAddress &&
                                      bidExtraDetails?.bidder == account && (
                                        <Button
                                          variant="contained"
                                          color="secondary"
                                          size="medium"
                                          onClick={() =>
                                            cancelBidlockchainHandler()
                                          }
                                          disabled={isUpdating}
                                        >
                                          Cancel Bid{" "}
                                          {isUpdating == "cancelBid" && (
                                            <ButtonCircularProgress />
                                          )}
                                        </Button>
                                      )}

                                    {!account && (
                                      <Typography style={{ color: "red" }}>
                                        Please connect your wallet
                                      </Typography>
                                    )}
                                  </Box>

                                  <Grid item xs={12} md={12}>
                                    <Box mt={3}>
                                      <Paper className={classes.box}>
                                        <Accordian title="Blockchain info">
                                          <Box>
                                            <Box className="d-flex m-b-5">
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
                                                {sortAddress(NFTAddress)}
                                                <CopyToClipboard
                                                  text={NFTAddress}
                                                >
                                                  <IconButton
                                                    style={{
                                                      fontSize: ".8rem",
                                                    }}
                                                  >
                                                    <FaCopy
                                                      style={{ color: "#fff" }}
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
                                              style={{ paddingBottom: "5px" }}
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
                                                style={{ paddingRight: "10px" }}
                                              >
                                                {data.nftId.tokenId}
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
                                      className={
                                        tabview === "owner" ? "active" : " "
                                      }
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
                                        type="orderPage"
                                      />
                                    ) : (
                                      ""
                                    )}
                                    {tabview === "history" ? (
                                      <History orderDetails={data} />
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
                      <Grid container spacing={3}></Grid>
                    </Box>
                  </Box>
                  {openReport && (
                    <Dialog
                      fullWidth="sm"
                      maxWidth="sm"
                      open={openReport}
                      onClose={() => {
                        if (!reportLoading) {
                          setOpenReport(false);
                        }
                      }}
                      aria-labelledby="max-width-dialog-title"
                    >
                      <Formik
                        onSubmit={(values) => reportHandler(values)}
                        initialValues={{
                          artist: "",
                          message: "",
                        }}
                        initialStatus={{
                          success: false,
                          successMsg: "",
                        }}
                        validationSchema={yep.object().shape({
                          artist: yep.string().required("Name is required"),
                          message: yep.string().required("Message is required"),
                        })}
                      >
                        {({
                          errors,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                          touched,
                          values,
                          setFieldValue,
                        }) => (
                          <Form>
                            <DialogContent>
                              <Typography variant="h4">
                                Report this item
                              </Typography>
                              <Box mt={2}>
                                <Typography>Name</Typography>
                                <FormControl variant="outlined" fullWidth>
                                  <TextField
                                    name="artist"
                                    value={values.artist}
                                    placeholder="enter your name"
                                    type="text"
                                    variant="outlined"
                                    error={Boolean(
                                      touched.artist && errors.artist
                                    )}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                  />
                                </FormControl>
                                <FormHelperText error>
                                  {touched.artist &&
                                    errors.artist &&
                                    "Name is required"}
                                </FormHelperText>
                              </Box>
                              <Box mt={2}>
                                <Typography>Additional Comments</Typography>
                                <TextField
                                  fullWidth
                                  type="message"
                                  name="message"
                                  value={values.message}
                                  variant="outlined"
                                  multiline
                                  rows={4}
                                  rowsMax={4}
                                  placeholder="Explain why you are concerned about this item."
                                  error={Boolean(
                                    touched.message && errors.message
                                  )}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                />
                                <FormHelperText error>
                                  {touched.message &&
                                    errors.message &&
                                    "Message is required"}
                                </FormHelperText>
                              </Box>
                            </DialogContent>
                            <DialogActions
                              style={{
                                display: "block",
                                marginLeft: "15px",
                                marginBottom: "15px",
                              }}
                            >
                              {user?.userData?.email == "" ? (
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={() => {
                                    toast.warn("Update your profile first");
                                    history.push("/edit-profile");
                                  }}
                                >
                                  Report
                                </Button>
                              ) : (
                                <Button
                                  variant="contained"
                                  type="submit"
                                  color="secondary"
                                  disabled={reportLoading}
                                >
                                  Report
                                  {reportLoading && <ButtonCircularProgress />}
                                </Button>
                              )}
                            </DialogActions>
                          </Form>
                        )}
                      </Formik>
                    </Dialog>
                  )}
                  {openPlaceBid && (
                    <Dialog
                      fullWidth="sm"
                      maxWidth="xs"
                      open={openPlaceBid}
                      onClose={() => {
                        if (!loading) {
                          setOpenPlaceBid(false);
                        }
                      }}
                      aria-labelledby="max-width-dialog-title"
                    >
                      <DialogContent>
                        <Typography variant="h4">Place A Bid</Typography>
                        <Box mt={2}>
                          <FormControl fullWidth variant="outlined">
                            <Box className={classes.flexbox}>
                              <Box>
                                <TextField
                                  name="price"
                                  label="Price"
                                  type="number"
                                  fullWidth
                                  className={classes.textFeild}
                                  variant="outlined"
                                  value={price}
                                  onChange={(e) => setprice(e.target.value)}
                                  InputLabelProps={{ shrink: true }}
                                />
                                {isSubmit &&
                                  ((price == "" && Number(price) <= 0) ||
                                    Number(price) <= Number(lastBidPrice)) && (
                                    <FormHelperText error>
                                      Please enter valid price, bid price must
                                      be greator then last bid price, last bid
                                      price is {lastBidPrice}
                                    </FormHelperText>
                                  )}
                              </Box>
                              <Box>
                                <DateTimePicker
                                  inputVariant="outlined"
                                  fullWidth
                                  value={expiry}
                                  onChange={(date) => {
                                    setExpiry(date);
                                  }}
                                  format="DD/MM/yyyy hh:mm A"
                                  minDate={moment()}
                                  maxDate={moment(
                                    new Date(orderExtraDeails?.expiresAt * 1000)
                                  )}
                                />
                                {isSubmit &&
                                  moment(expiry).unix() <= moment().unix() && (
                                    <FormHelperText error>
                                      Please select valid date
                                    </FormHelperText>
                                  )}
                              </Box>
                            </Box>
                          </FormControl>
                        </Box>
                      </DialogContent>
                      <DialogActions
                        style={{
                          padding: "30px 30px 30px 11px",
                          display: "block",
                        }}
                        className={classes.actionButton}
                      >
                        <Button
                          variant="outlined"
                          onClick={() => setOpenPlaceBid(false)}
                          style={{
                            backgroundColor: "#1a1919",
                            color: "white",
                            marginBottom: "15px",
                            marginLeft: "10px",
                          }}
                          disabled={loading}
                          fullWidth
                        >
                          Close
                        </Button>
                        <Button
                          variant="contained"
                          onClick={(e) => placeBidHandler(e)}
                          disabled={loading}
                          color="secondary"
                          fullWidth
                          style={
                            loading
                              ? { backgroundColor: "#1a1919", color: "white" }
                              : {}
                          }
                        >
                          {textBid} {loading && <ButtonCircularProgress />}
                        </Button>
                      </DialogActions>
                    </Dialog>
                  )}
                  {openBuyBid && (
                    <Dialog
                      fullWidth="sm"
                      maxWidth="xs"
                      open={openBuyBid}
                      onClose={() => {
                        if (!loading) {
                          setOpenBuyBid(false);
                        }
                      }}
                      aria-labelledby="max-width-dialog-title"
                    >
                      <DialogContent>
                        <Typography variant="h4">Buy</Typography>
                        <Box mt={2}>
                          <FormControl fullWidth variant="outlined">
                            <OutlinedInput
                              id="outlined-adornment-amount"
                              value={data.price}
                            />
                          </FormControl>
                        </Box>
                      </DialogContent>
                      <DialogActions
                        style={{
                          padding: "30px 30px 30px 11px",
                          display: "block",
                        }}
                        className={classes.actionButton}
                      >
                        <Button
                          variant="outlined"
                          fullWidth
                          onClick={() => {
                            if (!loading) {
                              setOpenBuyBid(false);
                            }
                          }}
                          disabled={loading}
                          style={{
                            backgroundColor: "#1a1919",
                            color: "white",
                            marginBottom: "15px",
                            marginLeft: "10px",
                          }}
                        >
                          Close
                        </Button>
                        <Button
                          variant="contained"
                          fullWidth
                          disabled={loading}
                          onClick={(e) => buyOrderHanlder(e)}
                          color="secondary"
                          style={
                            loading
                              ? { backgroundColor: "#1a1919", color: "white" }
                              : {}
                          }
                        >
                          {textBuy}
                          {loading && <ButtonCircularProgress />}
                        </Button>
                      </DialogActions>
                    </Dialog>
                  )}
                  {openListBid && (
                    <Dialog
                      fullWidth="sm"
                      maxWidth="sm"
                      open={openListBid}
                      onClose={() => {
                        if (!loading) {
                          setOpenListBid(false);
                        }
                      }}
                      aria-labelledby="max-width-dialog-title"
                    >
                      <DialogContent>
                        <Typography variant="h4">Put On Sale</Typography>
                        <Box mt={2}>
                          <FormControl fullWidth variant="outlined">
                            <Box display="flex" justifyContent="space-evenly">
                              <Box>
                                <TextField
                                  name="price"
                                  label="Price"
                                  type="number"
                                  className={classes.textFeild}
                                  variant="outlined"
                                  onChange={(e) => setprice(e.target.value)}
                                  InputLabelProps={{ shrink: true }}
                                />
                                {isSubmit &&
                                  price == "" &&
                                  Number(price) <= 0 && (
                                    <FormHelperText error>
                                      Please enter valid price
                                    </FormHelperText>
                                  )}
                              </Box>
                              <Box>
                                <DateTimePicker
                                  inputVariant="outlined"
                                  value={expiry}
                                  onChange={(date) => {
                                    setExpiry(date);
                                  }}
                                  format="DD/MM/yyyy hh:mm A"
                                  minDate={moment()}
                                />
                                {isSubmit &&
                                  moment(expiry).unix() <= moment().unix() && (
                                    <FormHelperText error>
                                      Please select valid date
                                    </FormHelperText>
                                  )}
                              </Box>
                            </Box>
                          </FormControl>
                        </Box>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          variant="contained"
                          onClick={(e) => resaleNFTHandler(e)}
                          color="secondary"
                          disabled={loading}
                          style={
                            loading
                              ? { backgroundColor: "#1a1919", color: "white" }
                              : {}
                          }
                        >
                          {text}
                        </Button>
                      </DialogActions>
                    </Dialog>
                  )}
                  {music && (
                    <Dialog
                      fullWidth="sm"
                      maxWidth="sm"
                      open={music}
                      onClose={() => setMusic(false)}
                      aria-labelledby="max-width-dialog-title"
                      className="dialogBox"
                    >
                      <DialogContent style={{ backgroundColor: "white" }}>
                        <AudioCard
                          src={data?.nftId?.uri}
                          autoplay="true"
                          loop="true"
                          StopProps={StopIcon}
                        />

                        <DialogActions></DialogActions>
                      </DialogContent>
                    </Dialog>
                  )}
                </Container>
              )}
            </>
          )}
        </Page>
      </Box>
    </>
  );
}
