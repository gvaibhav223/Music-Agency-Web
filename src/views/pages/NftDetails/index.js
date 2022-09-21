import React, { useState, useRef, useEffect } from "react";
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
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import StopIcon from "@material-ui/icons/Stop";
import { AudioCard, VideoCard, SoundButton } from "material-ui-player";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import Page from "src/component/Page";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import FlagIcon from "@material-ui/icons/Flag";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Accordian from "src/views/pages/NftDetails/Accordian";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";

import { getContract } from "src/utils";
import { apiConfig } from "src/constants/index";
import { useWeb3React } from "@web3-react/core";
import { NFTTokenABI } from "src/ABI/NFTTokenABI.js";
import {
  NftTokenAddress as NFTAddress,
  MarketPlaceAddress,
} from "src/constants/index";
import { marketPlaceABI } from "src/ABI/MarketPlaceABI";
import moment from "moment";
import { ethers } from "ethers";
import { ERC } from "src/ABI/IERC20ABI";
import Pagination from "src/component/Pagination";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { array } from "yup";

const columns = [
  {
    id: "Block Hash",
    label: "Block Hash",
    align: "left",
    minWidth: "120px",
    maxWidth: "150px",
  },
  { id: "price", label: "Price", align: "left", minWidth: "160px" },
  { id: "from", label: "From", align: "left", minWidth: "160px" },
  { id: "to", label: "To", align: "left", minWidth: "160px" },
  { id: "date", label: "Date", align: "left", minWidth: "160px" },
];

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
    right: 225,
    zIndex: 5,
  },
}));

export default function NftDetails() {
  // declaration block ------------------------------
  const classes = useStyles();
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [openPlaceBid, setOpenPlaceBid] = useState(false);
  const [openBuyBid, setOpenBuyBid] = useState(false);
  const [openListBid, setOpenListBid] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  console.log("loading---", loading);
  const [text, setText] = useState("Put On Sale");
  const { active, account, chainId, library } = useWeb3React();
  const [transaction, setTransaction] = useState([]);
  const [selectedPageNumber, setSelectedPageNumber] = useState(1);

  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [noOfPages, setnoOfPages] = useState(1);
  const [music, setMusic] = useState(false);

  let userAddress = window.sessionStorage.getItem("userAddress");

  let price = "";
  let expiry = "";

  const url = window.location.href;
  console.log("aisdfhklasdf", window);
  const arr = url.split("?");
  console.log("sdflkasdfk", arr[1], arr);

  //function block ---------------------------------

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const viewDetailsHandler = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: `${apiConfig.viewNftId}/${arr[1].toString()}`,
        headers: {
          token: window.sessionStorage.getItem("token"),
        },
      });
      if (res) {
        setData(res.data.result);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    viewDetailsHandler();
  }, [account]);

  function priceText(e) {
    price = e.target.value;
    console.log(price);
  }

  function expiryText(e) {
    expiry = e.target.value;
    console.log(expiry);
  }

  useEffect(() => {
    if (account) {
      axios({
        method: "get",
        url: `https://api-kovan.etherscan.io/api?module=account&action=txlist&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=YFPX2UAJHFYKZ5S52URHJPXEIBIP2WAUT2`,
      })
        .then((res) => {
          console.log(res.data.result);
          const result = res.data.result.filter(
            (data) =>
              data.to.toLowerCase() == NFTAddress.toLowerCase() ||
              data.to.toLowerCase() == MarketPlaceAddress.toLowerCase()
          );
          // const result = res.data.result;
          console.log("result--------------", result);
          setnoOfPages(Math.ceil(result.length / 20));

          setDataToDisplay(result.slice(0, 20));
          setTransaction(result);
        })
        .catch((err) => console.log(err));
    }
  }, [account]);

  function shortAdd(add) {
    const shortAdd = `${add.slice(0, 6)}...${add.slice(add.length - 4)}`;
    return shortAdd;
  }

  //List on Sale -------------------------------------

  async function listBid(e) {
    // setLoading(true);

    const contractObj = getContract(NFTAddress, NFTTokenABI, library, account);

    let tokenId = data.tokenId;

    setText("Approving Token");
    console.log(tokenId);
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

      console.log(createObj);

      const marketPlace = await createObj.createOrder(
        NFTAddress,
        tokenId,
        ethers.utils.parseEther(price.toString()),
        moment(expiry).unix()
      );
      await marketPlace.wait();

      //Place Order NFT---------------------------------
      setText("Placing Order");
      const formDataOrder = {
        tokenId: tokenId,
        description: data.description,
        price: price,
        expiryTime: expiry,
        nftId: data._id,
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
          // setLoading(false);
        });
    } catch (err) {
      window.alert("something went wrong !!");
      console.log(err);
      // setLoading(false);
    }
    setText("On-Sale");
    window.alert("Order Now on Sale !!!");
    // setLoading(false);
    setOpenListBid(false);
  }

  //place bid-------------------------------
  async function placeBid(e) {
    const contractObj = await getContract(
      MarketPlaceAddress,
      marketPlaceABI,
      library,
      account
    );

    const acceptToken = await contractObj.acceptedToken();

    const approveObj = getContract(acceptToken, ERC, library, account);

    try {
      const approve = await approveObj.approve(
        MarketPlaceAddress,
        ethers.utils.parseEther(price.toString())
      );

      await approve.wait();

      const safePlaceBid = await contractObj.safePlaceBid(
        NFTAddress,
        data.tokenId,
        ethers.utils.parseEther(price.toString()),
        moment(expiry).unix()
      );

      await safePlaceBid.wait();

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
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }
  // buyBid------------------------------------------------------

  async function buyBid(e) {
    const contractObj = getContract(
      MarketPlaceAddress,
      marketPlaceABI,
      library,
      account
    );

    const acceptToken = await contractObj.acceptedToken();

    const approveObj = getContract(acceptToken, ERC, library, account);

    const approve = await approveObj.approve(
      MarketPlaceAddress,
      ethers.utils.parseEther(data.price.toString())
    );

    await approve.wait();

    const safeExecute = await contractObj.safeExecuteOrder(
      NFTAddress,
      parseInt(data.tokenId),
      ethers.utils.parseEther(data.price.toString())
    );
    await safeExecute.wait();

    await axios.post({
      method: "post",
      url: apiConfig.sellOrder,
      headers: {
        token: window.sessionStorage.getItem("token").toString(),
      },
      data: {
        orderId: data._id,
        currentOwner: account,
      },
    });

    setOpenBuyBid(false);
  }

  const pageWiseDate = (lower, higher) => {
    var items = transaction.slice(lower, higher);
    setDataToDisplay(items);
  };

  //return block --------------------

  return (
    <>
      <Page title="NFT Details" style={{ minHeight: "600px" }}>
        <Container>
          {loading ? (
            <Box display="flex" alignItems="center">
              <h4>Loading...</h4>
              <ButtonCircularProgress />
            </Box>
          ) : (
            <>
              <Box className={classes.NftBreed}>
                {" "}
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={5}>
                      <Box>
                        <Paper
                          className={classes.box}
                          style={{ position: "relative" }}
                        >
                          <Box p={2} className="bgCardcolor">
                            <figure className="m-0">
                              {data && (
                                <img
                                  src={
                                    data.thumbNails
                                      ? data.thumbNails
                                      : "images/music.jpeg"
                                  }
                                  alt=""
                                  width="100%"
                                  height="500px"
                                  style={{ display: "block" }}
                                />
                              )}
                              <Box
                                className={classes.playbutton}
                                onClick={() => setMusic(true)}
                              >
                                <Avatar
                                  style={{
                                    backgroundColor: "#1ed760",
                                    cursor: "pointer",
                                  }}
                                >
                                  <PlayArrowIcon />
                                </Avatar>
                              </Box>
                            </figure>
                          </Box>
                        </Paper>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Box className="posrel">
                        {data && (
                          <Typography variant="h2" className="text-white">
                            <span className={classes.name}>
                              {data.tokenName}
                            </span>
                          </Typography>
                        )}
                        <Box
                          className="ShareBox"
                          style={{
                            right: 16,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <IconButton
                            size="small"
                            className="m-l-10"
                            onClick={() => setOpenMenu(!openMenu)}
                            ref={moreRef}
                          ></IconButton>
                          <IconButton
                            size="small"
                            className="m-l-10"
                            onClick={() => setOpenReport(true)}
                          ></IconButton>
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
                                  <FacebookIcon url={url} />
                                </ListItemIcon>
                                <ListItemText primary="Facebook" />
                              </MenuItem>
                              <MenuItem>
                                <ListItemIcon>
                                  <TwitterIcon url={url} />
                                </ListItemIcon>
                                <ListItemText primary="Twitter" />
                              </MenuItem>
                            </Menu>
                          )}
                        </Box>

                        <Box my={2} className="d-flex">
                          <Box className="d-flex">
                            {/* <Avatar className={classes.avtar}>J</Avatar>
                      <Link href="/user">
                        {data && (
                          <Typography variant="body2" color="textSecondary">
                            {data.tokenName}
                          </Typography>
                        )}
                      </Link> */}
                          </Box>
                          <Box className="d-flex">
                            {/* <Avatar className={classes.avtar}>R</Avatar> */}
                            {/* <Link href="/user">
                        {data && (
                          <Typography variant="body2" color="textSecondary">
                            Owned by: {data.tokenName}
                          </Typography>
                        )}
                      </Link> */}
                          </Box>
                        </Box>
                        <Typography color="textSecondary">
                          {data.description}
                        </Typography>
                      </Box>
                      <Box mt={3}>
                        <Paper className={classes.box}>
                          <Box p={2} className="bgCardcolor">
                            <Box className="d-flex">
                              <Box className="d-flex">
                                {/* <ScheduleIcon className="m-r-5" /> */}
                                {/* { data && <Typography variant="body2" color="textSecondary">
                          Updated At: ({moment(data.updatedAt).format(
                                'DD MMM YYYY hh:mm'
                              )})
                        </Typography> } */}
                              </Box>
                              {data && (
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                >
                                  Created At: (
                                  {moment(data.updatedAt).format(
                                    "DD MMM YYYY hh:mm"
                                  )}
                                  )
                                </Typography>
                              )}
                            </Box>
                            <Box mt={3}>
                              {data.contractAddress == account ? (
                                <Box>
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    size="medium"
                                    onClick={() => setOpenListBid(true)}
                                  >
                                    List On-Sale
                                  </Button>
                                </Box>
                              ) : (
                                ""
                                //    <Box>
                                //    <Button
                                //      variant="contained"
                                //      color="secondary"
                                //      size="medium"
                                //      onClick={() => setOpenPlaceBid(true)}
                                //    >
                                //      Place a Bid
                                //    </Button>
                                //    <Button
                                //      variant="contained"
                                //      color="secondary"
                                //      size="medium"
                                //      onClick={() => setOpenBuyBid(true)}
                                //    >
                                //      Buy
                                //    </Button>
                                //  </Box>
                              )}
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
                                            {NFTAddress}
                                          </Typography>
                                        </Box>
                                        <Box className="d-flex m-b-5">
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
                                            {data.tokenId}
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
                            </Box>
                          </Box>
                        </Paper>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}></Grid>
                </Box>
                <Box mt={3} mb={3}>
                  <Accordian title="Blockchain info">
                    <Grid
                      container
                      spacing={2}
                      className="text-center"
                      style={{ display: "block" }}
                    >
                      <Grid item xs={12} md={12}>
                        <Paper
                          variant="outlined"
                          elevation={3}
                          style={{ padding: 0 }}
                        >
                          <TableContainer
                            className={classes.container}
                            style={{ maxHeight: 300 }}
                          >
                            <Table stickyHeader aria-label="sticky table">
                              <TableHead>
                                <TableRow>
                                  {columns.map((column) => (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                      style={{ minWidth: column.minWidth }}
                                      className="bgcolor"
                                    >
                                      {column.label}
                                    </TableCell>
                                  ))}
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {dataToDisplay &&
                                  dataToDisplay.map((data, i) => {
                                    return (
                                      <>
                                        <TableRow
                                          key={i}
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            window.open(
                                              `https://kovan.etherscan.io/tx/${data.hash}`
                                            )
                                          }
                                        >
                                          <TableCell className="table-data p-l-10">
                                            {shortAdd(data.blockHash)}
                                          </TableCell>
                                          <TableCell className="table-data">
                                            {ethers.utils.formatEther(
                                              data.value
                                            )}
                                          </TableCell>

                                          <TableCell className="table-data">
                                            {shortAdd(data.from)}
                                          </TableCell>
                                          <TableCell className="table-data">
                                            {shortAdd(data.to)}
                                          </TableCell>
                                          <TableCell className="table-data">
                                            {moment(data.date).format(
                                              "DD MMM YYYY hh:mm"
                                            )}
                                          </TableCell>
                                        </TableRow>
                                      </>
                                    );
                                  })}
                              </TableBody>
                            </Table>
                            <table
                              className="table mb-0 tred-history-div"
                              style={{
                                borderRadius: 0,
                              }}
                            >
                              <thead>
                                <tr
                                  className=" text-right"
                                  style={{ color: "black" }}
                                >
                                  <td colSpan="10 p-4">
                                    <nav aria-label="Page navigation example">
                                      <Pagination
                                        noOfPages={noOfPages}
                                        pageWiseDate={(lower, upper) => {
                                          pageWiseDate(lower, upper);
                                        }}
                                        selectedPageNumber={(data) =>
                                          setSelectedPageNumber(data)
                                        }
                                        max={20}
                                      />{" "}
                                    </nav>
                                  </td>
                                </tr>
                              </thead>
                            </table>
                          </TableContainer>
                        </Paper>
                        {/* <TablePagination
                  rowsPerPageOptions={[5, 10, 25, 100]}
                  component="div"
                  count={tabelData.length}
                  style={{color:"#fff"}}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  
                /> */}
                      </Grid>
                    </Grid>
                  </Accordian>
                </Box>
              </Box>
            </>
          )}

          {openReport && (
            <Dialog
              fullWidth="sm"
              maxWidth="sm"
              open={openReport}
              onClose={() => setOpenReport(false)}
              aria-labelledby="max-width-dialog-title"
            >
              <DialogContent>
                <Typography variant="h4">Report this item</Typography>

                <Box mt={2}>
                  <Typography>Reason</Typography>
                  <FormControl variant="outlined" fullWidth>
                    <Select fullWidth defaultValue="Other">
                      <MenuItem value="Copyright infringement">
                        Copyright infringement
                      </MenuItem>
                      <MenuItem value="Explicit and sensitive content">
                        Explicit and sensitive content
                      </MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box mt={2}>
                  <Typography>Additional Comments</Typography>
                  <TextField
                    fullWidth
                    type="text"
                    variant="outlined"
                    multiline
                    rows={4}
                    rowsMax={4}
                    placeholder="Explain why you are concerned about this item."
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  onClick={() => setOpenReport(false)}
                  color="secondary"
                >
                  Report
                </Button>
              </DialogActions>
            </Dialog>
          )}
          {openPlaceBid && (
            <Dialog
              fullWidth="sm"
              maxWidth="sm"
              open={openPlaceBid}
              disabled={loading}
              onClose={() => setOpenPlaceBid(false)}
              aria-labelledby="max-width-dialog-title"
            >
              <DialogContent>
                <Typography variant="h4">Place A Bid</Typography>
                <Box mt={2}>
                  <FormControl fullWidth variant="outlined">
                    <Box display="flex" justifyContent="space-evenly">
                      <TextField
                        name="price"
                        label="Price"
                        type="text"
                        className={classes.textFeild}
                        variant="outlined"
                        onChange={(e) => priceText(e)}
                        InputLabelProps={{ shrink: true }}
                      />
                      <TextField
                        name="expiry"
                        label="Expiry Date"
                        type="datetime-local"
                        className={classes.textFeild}
                        variant="outlined"
                        onChange={(e) => expiryText(e)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                  </FormControl>
                </Box>
                {/* <Box display="flex" alignItems="center">
                <Checkbox
                  checked={policy}
                  name="policy"
                  onChange={() => setPolicy(!policy)}
                />
                <Typography variant="body2" color="textSecondary">
                  I agree with the{" "}
                  <Link
                    component={RouterLink}
                    to="/terms-and-conditions"
                    color="textPrimary"
                  >
                    Terms and Condition{" "}
                  </Link>
                  and the{" "}
                  <Link
                    component={RouterLink}
                    to="/privacy-policy"
                    color="textPrimary"
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              </Box> */}
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  onClick={(e) => placeBid(e)}
                  color="secondary"
                >
                  Place Bid
                </Button>
              </DialogActions>
            </Dialog>
          )}
          {openBuyBid && (
            <Dialog
              fullWidth="sm"
              maxWidth="sm"
              open={openBuyBid}
              onClose={() => setOpenBuyBid(false)}
              aria-labelledby="max-width-dialog-title"
            >
              <DialogContent>
                <Typography variant="h4">Buy</Typography>
                <Box mt={2}>
                  <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={data.price}
                      // onChange={handleChange("amount")}
                    />
                  </FormControl>
                </Box>
                {/* <Box display="flex" alignItems="center">
                <Checkbox
                  checked={policy}
                  name="policy"
                  onChange={() => setPolicy(!policy)}
                />
                <Typography variant="body2" color="textSecondary">
                  I agree with the{" "}
                  <Link
                    component={RouterLink}
                    to="/terms-and-conditions"
                    color="textPrimary"
                  >
                    Terms and Condition{" "}
                  </Link>
                  and the{" "}
                  <Link
                    component={RouterLink}
                    to="/privacy-policy"
                    color="textPrimary"
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              </Box> */}
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  onClick={(e) => buyBid(e)}
                  disabled={loading}
                  color="secondary"
                >
                  Buy Now
                </Button>
              </DialogActions>
            </Dialog>
          )}
          {openListBid && (
            <Dialog
              fullWidth="sm"
              maxWidth="sm"
              open={openListBid}
              onClose={() => setOpenListBid(false)}
              aria-labelledby="max-width-dialog-title"
            >
              <DialogContent>
                <Typography variant="h4">Put On Sale</Typography>
                <Box mt={2}>
                  <FormControl fullWidth variant="outlined">
                    <Box display="flex" justifyContent="space-evenly">
                      <TextField
                        name="price"
                        label="Price"
                        type="text"
                        className={classes.textFeild}
                        variant="outlined"
                        onChange={(e) => priceText(e)}
                        InputLabelProps={{ shrink: true }}
                      />
                      <TextField
                        name="expiry"
                        label="Expiry Date"
                        type="datetime-local"
                        className={classes.textFeild}
                        variant="outlined"
                        onChange={(e) => expiryText(e)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                  </FormControl>
                </Box>
                {/* <Box display="flex" alignItems="center">
                <Checkbox
                  checked={policy}
                  name="policy"
                  onChange={() => setPolicy(!policy)}
                />
                <Typography variant="body2" color="textSecondary">
                  I agree with the{" "}
                  <Link
                    component={RouterLink}
                    to="/terms-and-conditions"
                    color="textPrimary"
                  >
                    Terms and Condition{" "}
                  </Link>
                  and the{" "}
                  <Link
                    component={RouterLink}
                    to="/privacy-policy"
                    color="textPrimary"
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              </Box> */}
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  onClick={(e) => listBid(e)}
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
                  src={data.uri}
                  autoplay="true"
                  loop="true"
                  StopProps={StopIcon}
                />

                <DialogActions>
                  {/* <Button
              variant="contained"
              onClick={(e) => playMusic(e)}
              color="secondary"
            >
              play Song
            </Button> */}
                </DialogActions>
              </DialogContent>
            </Dialog>
          )}
        </Container>
      </Page>
    </>
  );
}
