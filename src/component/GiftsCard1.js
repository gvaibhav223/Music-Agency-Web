import React, { useContext } from "react";
import {
  Typography,
  Box,
  makeStyles,
  Avatar,
  Grid,
  Link,
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  TextField,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import { useState, useEffect } from "react";
import { AudioCard, VideoCard, SoundButton } from "material-ui-player";
import { useHistory } from "react-router-dom";
import StopIcon from "@material-ui/icons/Stop";
import moment from "moment";
import { ethers } from "ethers";
import { apiConfig } from "src/constants/index";
import { useWeb3React } from "@web3-react/core";
import { NFTTokenABI } from "src/ABI/NFTTokenABI.js";
import axios from "axios";
import { AuthContext } from "src/context/Auth";

import {
  NftTokenAddress as NFTAddress,
  MarketPlaceAddress,
} from "src/constants/index";
import { getContract } from "src/utils";
import { addImageHandler } from "src/utils";
import { marketPlaceABI } from "src/ABI/MarketPlaceABI";
// import moment from "moment";
// import { ethers } from "ethers";
import { DateRange } from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";
import CircularProgress from "@material-ui/core/CircularProgress";
import { toast } from "react-toastify";
import { UserContext } from "src/context/User";

const useStyles = makeStyles((theme) => ({
  NftImg: {
    borderRadius: 10,
    boxShadow: "0 11px 24px rgb(0, 0, 0, 0.12)",
    display: "block",
    miHeight: "300px",
    position: "relative",
  },
  bottomblock: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  bottomTop: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    margin: "10px 0 0",
  },
  playbutton: {
    position: "absolute",
    bottom: 5,
    right: 10,
    zIndex: 5,
  },
}));

export default function NFTCard(props) {
  const { type, data } = props;
  const classes = useStyles();
  console.log("GiftsCard1", data);
  const [music, setMusic] = useState(false);
  const [putOnSale, setputOnSale] = useState(false);
  const history = useHistory();
  const user = useContext(UserContext)

  function playMusic(e) {
    history.push("/profile");
  }

  const { active, account, chainId, library } = useWeb3React();

  const [open, setOpen] = React.useState(false);

  const [toggle, setToggle] = React.useState(true);

  // const history = useHistory();

  // const [data, setData] = React.useState({});

  const [loading, setLoading] = React.useState(false);

  const [text, setText] = React.useState("create");
  const [expiry, setexpiry] = React.useState("");
  const [price, setprice] = React.useState("");

  const [image, setImage] = React.useState("");

  const PutOnsaleMusic = async () => {
    setLoading(true);
    // setText("Creating NFT");
    // const bodyFormData = new FormData();
    // bodyFormData.append("tokenName", name);
    // bodyFormData.append("description", values.comments);
    // bodyFormData.append("ipfsHash", ImageHash);

    // await axios({
    //   method: "post",
    //   url: apiConfig.uploadNFT,
    //   data: bodyFormData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    // .then(async (response) => {
    //   setData(response.data.result);
    console.log("creating Nft");
    console.log("data._id", data._id);
    const contractObj = getContract(NFTAddress, NFTTokenABI, library, account);
    // setText("Approving Token");

    console.log("contractObj", contractObj);
    console.log("MarketPlaceAddress", MarketPlaceAddress);
    console.log("tokenIdddf", parseInt(data?.nftId?.tokenId));

    const NFTApprovalID = await contractObj.approve(
      MarketPlaceAddress,
      parseInt(data?.nftId?.tokenId)
    );
    // toast.error("error");
    console.log("======1=======");
    console.log(NFTApprovalID);
    await NFTApprovalID.wait();

    console.log("=====2========");

    const createObj = getContract(
      MarketPlaceAddress,
      marketPlaceABI,
      library,
      account
    );
    console.log("=======3======", ethers.utils.parseEther(price.toString()));

    console.log(createObj);

    const marketPlace = await createObj.createOrder(
      NFTAddress,
      data?.nftId?.tokenId,
      ethers.utils.parseEther(price.toString()),
      moment(expiry).unix()
    );
    await marketPlace.wait();
    console.log("=======4======");

    //Place Order NFT---------------------------------
    setText("Placing Order");
    const formDataOrder = {
      nftId: data._id,
      description: data.description,
      currentOwner: account,
      price: price,
      expiryTime: expiry,
    };
    await axios({
      method: "post",
      url: apiConfig.placeOrder,
      data: formDataOrder,
      headers: {
        token: window.sessionStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (res.response_code !== "200") {
        } else {
          console.log("res.data baba", res);

          history.push("/marketplace");
          setputOnSale(false);
          toast.success("successfull");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    history.push("/marketplace");
    setText("Create");
    setLoading(false);
    toast.success("successfull");
  };
  return (
    <Box
      className="bgCardcolor"
      style={{ padding: "17px", borderRadius: 1, margin: 7 }}
    >
      <Box display="flex" justifyContent="center">
        <Box className="collectionSet">
          <Box className={classes.NftImg}>
            {/* <Box className="d-flex justifyEnd text-grey" pt={0} pb={1}>
              <FavoriteBorderOutlinedIcon style={{ fontSize: "18px" }} />
            </Box> */}
            {data?.mimetype === "audio" ? (
              <>
                <img
                  src="images/music.jpeg"
                  width="220px"
                  height="220px"
                  alt="NFTImage"
                  style={{ borderRadius: "5px" }}
                />

                <Box
                  className={classes.playbutton}
                  onClick={() => setMusic(true)}
                >
                  <Avatar
                    style={{ backgroundColor: "#1ed760", cursor: "pointer" }}
                  >
                    <PlayArrowIcon />
                  </Avatar>
                </Box>
              </>
            ) : (
              <>
                {/* <img
                  src={
                    data.thumbNails ? data.thumbNails : data?.nftId.thumbNails
                  }
                  width="220px"
                  height="220px"
                  alt="NFTImage"
                  style={{ borderRadius: "5px" }}
                /> */}
                {console.log("mydata===++", data)}
                {data?.nftId?.mimetype === "audio" ? (
                  <>
                    <img
                      src="images/music.jpeg"
                      width="220px"
                      height="220px"
                      alt="NFTImage"
                      style={{ borderRadius: "5px" }}
                    />

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
                  </>
                ) : (
                  <>
                    <img
                      src={
                        data.thumbNails
                          ? data.thumbNails
                          : data?.nftId.thumbNails
                      }
                      width="220px"
                      height="220px"
                      alt="NFTImage"
                      style={{ borderRadius: "5px" }}
                    />
                  </>
                )}
              </>
            )}

            {/* <Box className={classes.playbutton} onClick={() => setMusic(true)}>
              <Avatar style={{ backgroundColor: "#1ed760", cursor: "pointer" }}>
                <PlayArrowIcon />
              </Avatar>
            </Box> */}
          </Box>
          <Link
          // href={`/nft-details/?${data._id}`}
          >
            <Box mt={2}>
              <Grid container justify="space-between">
                <Grid item>
                  <Box>
                    <Grid container direction="column" alignItems="flex-start">
                      <Grid item>
                        <Typography style={{ fontSize: "14px" }}>
                          {/* {console.log("tokenNamee", data.tokenId)} */}
                          {data.tokenName}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography style={{ color: "#fff", fontSize: "14px" }}>
                          {" "}
                          {data.tokenId}
                        </Typography>
                      </Grid>
                      <Grid item>
                        {/* <Typography style={{ color: "#fff", fontSize: "14px" }}>
                        {" "}
                        {data.tokenId}
                      </Typography> */}
                        {data.isPlace ? (
                          <></>
                        ) : (
                          <>
                            <Button
                              variant="contained"
                              size="small"
                              disabled={loading}
                              color="secondary"
                              aria-controls="simple-menu"
                              aria-haspopup="true"
                              onClick={() => {
                                if (user?.userData?.email === "" || user?.userData?.email === undefined) {
                                  toast.warn("Please update your profile first")
                                  history.push("edit-profile")


                                }
                                setputOnSale(true)



                              }}
                            >
                              Put On Sale{" "}
                            </Button>
                          </>
                        )}
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <Grid container direction="column" alignItems="flex-end">
                      <Grid item>
                        <Typography style={{ fontSize: "18px" }}>
                          Created At:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography style={{ color: "#fff", fontSize: "14px" }}>
                          {moment(data.createdAt).format("DD MMM YYYY hh:mm")}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center">
                          {/* <Grid item>
                          <QueryBuilderOutlinedIcon
                            style={{ fontSize: "18px" }}
                          />
                        </Grid> */}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Link>
        </Box>
      </Box>
      {/* </Link> */}
      {putOnSale && (
        <Dialog
          fullWidth="sm"
          maxWidth="sm"
          open={putOnSale}
          onClose={() => setputOnSale(false)}
          aria-labelledby="max-width-dialog-title"
          className="dialogBox"
        >
          <DialogContent style={{ backgroundColor: "#7d7d7d" }}>
            {/* <AudioCard
              src={data.uri}
              autoplay="true"
              loop="true"
              StopProps={StopIcon}
            /> */}
            <Box mt={1} component="div" className={classes.lastBox}>
              <Box mt={2} mb={2} mr={2}>
                <Box>
                  <label style={{ color: "black", margin: "10px, 0" }}>
                    Price :
                  </label>
                </Box>
                <br />
                <TextField
                  style={{ color: "black", margin: "10px, 0" }}
                  // error={Boolean(touched.price && errors.price)}
                  // helperText={touched.price && errors.price}
                  // onBlur={handleBlur}
                  onChange={(e) => setprice(e.target.value)}
                  value={price}
                  name="price"
                  className={classes.textField}
                  variant="outlined"
                />
              </Box>
              <Box mt={2} mb={2} component="div" className={classes.dateField}>
                <Box>
                  <label style={{ color: "black", margin: "10px, 0" }}>
                    Expiry Date :
                  </label>
                </Box>
                <br />
                <TextField
                  // error={Boolean(touched.expiry && errors.expiry)}
                  // type="date"
                  // helperText={touched.expiry && errors.expiry}
                  // onBlur={handleBlur}
                  onChange={(e) => setexpiry(e.target.value)}
                  value={expiry}
                  name="expiry"
                  type="datetime-local"
                  className={classes.textFeild}
                  // style={{ backgroundColor: "white" }}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                // renderInput={(params) => <DateRange {...params} />}
                />
              </Box>
            </Box>

            <DialogActions>
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
                    }}
                  />
                )}
              </Button>
            </DialogActions>
          </DialogContent>
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
    </Box>
  );
}
