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
  FormHelperText,
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
import { apiConfig, marketplaceether } from "src/constants";
import { useWeb3React } from "@web3-react/core";
import { NFTTokenABI } from "src/ABI/NFTTokenABI.js";
import axios from "axios";
import {
  NftTokenAddress as NFTAddress,
  MarketPlaceAddress,
} from "src/constants";
import { getContract } from "src/utils";
import { addImageHandler } from "src/utils";
import { marketPlaceABI } from "src/ABI/MarketPlaceABI";
// import moment from "moment";
// import { ethers } from "ethers";
import { DateRange } from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";
import CircularProgress from "@material-ui/core/CircularProgress";
import { toast } from "react-toastify";
import { DateTimePicker } from "@material-ui/pickers";
import { FaEthereum } from "react-icons/fa";
import { AuthContext } from "src/context/Auth";
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
    bottom: 10,
    right: 25,
    zIndex: 5,
  },
  timingSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function NFTCard(props) {
  const { type, data, index } = props;

  const classes = useStyles();

  const [music, setMusic] = useState(false);
  const [putOnSale, setputOnSale] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();
  const { active, account, chainId, library } = useWeb3React();
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("create");
  const [expiry, setexpiry] = React.useState(moment().add(1, "h"));

  const updateDimensions = () => {
    var offsetWidth = document.getElementById("imagecard" + index).offsetWidth;
    var newoofsetWidth = offsetWidth - 30;
    document.getElementById("imagecard" + index).style.height =
      newoofsetWidth + "px";
  };
  useEffect(() => {
    updateDimensions();
  }, [data, index]);
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const [price, setprice] = React.useState("");
  const user = useContext(UserContext)


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
      console.log("contractObj---", contractObj);
      const NFTApprovalID = await contractObj.approve(
        MarketPlaceAddress,
        parseInt(data.tokenId)
      );
      // toast.error("error");
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
            history.push("/marketplace");
            setputOnSale(false);
            toast.success("Order Placed Successfully");
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
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Box
      className="bgCardcolor newborder"
      style={{ padding: "10px 9px 10px", borderRadius: 1, margin: 7 }}
    >
      <Box display="flex" justifyContent="center">
        <Box
          className="collectionSet"
          style={{ width: "100%" }}
          onClick={() => {
            if (type === "sold") {
              history.push({
                pathname: "/view-nft",
                search: data?.nftId?._id,
                state: "sold",
              });
            }
            if (type === "mynft") {
              history.push({
                pathname: "/view-nft",
                search: data?._id,
                state: "myNFT",
              });
            }
          }}
        >
          <Box
            className={classes.NftImg}
            style={{
              width: "100%",
            }}
            id={`imagecard${index}`}
          >
            {data?.mimetype === "audio" && (
              <>
                <Box
                  className="imageholder"
                  style={{
                    width: "100%",
                    background:
                      "url(" +
                      `${data?.thumbNails
                        ? data?.thumbNails
                        : "images/music.jpeg"
                      }` +
                      ")",
                  }}
                  id={`imagecard${index}`}
                ></Box>
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
            )}

            {data?.nftId?.mimetype === "audio" ? (
              <>
                {/* <img
                  id={`imagecard${index}`}
                  src={
                    data?.thumbNails
                      ? data?.thumbNails
                      : data?.nftId?.thumbNails
                  }
                  width="100%"
                  height="220px"
                  alt="NFTImage"
                  style={{ borderRadius: "5px" }}
                /> */}
                <Box
                  className="imageholder"
                  style={{
                    width: "100%",
                    background:
                      "url(" +
                      `${data?.thumbNails
                        ? data?.thumbNails
                        : data?.nftId?.thumbNails
                      }` +
                      ")",
                  }}
                  id={`imagecard${index}`}
                ></Box>

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
              ""
            )}
          </Box>
          <Link
          // href={`/nft-details/orders/?${data._id}`}
          >
            <Box mt={2}>
              <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Grid item lg={12}>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        className="textEllipsys"
                        style={{
                          fontSize: "14px",
                          wordBreak: "break-word",
                          color: "#fff",
                        }}
                      >
                        {data.tokenName
                          ? data.tokenName
                          : data?.nftId?.tokenName}
                      </Typography>
                      <FaEthereum style={{ color: "#5d6388" }} />
                    </Box>
                  </Grid>

                  <Grid item lg={12}>
                    {data?.saleType === "OFFSALE" ? (
                      <>
                        <Box className={classes.timingSection}>
                          <Typography
                            style={{ color: "#fff", fontSize: "14px" }}
                          >
                            Price :
                          </Typography>
                          <Typography
                            style={{ color: "#fff", fontSize: "14px" }}
                          >
                            Sold
                          </Typography>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box className={classes.timingSection}>
                          <Typography
                            style={{ color: "#fff", fontSize: "14px" }}
                          >
                            Price :
                          </Typography>
                          <Typography
                            style={{ color: "#fff", fontSize: "14px" }}
                          >
                            N/A
                          </Typography>
                        </Box>
                      </>
                    )}
                  </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <Box className={classes.timingSection}>
                    <Typography style={{ fontSize: "14px", color: "#fff" }}>
                      Created At:
                    </Typography>
                    <Typography style={{ color: "#fff", fontSize: "14px" }}>
                      {moment(data?.createdAt).format("DD MMM YYYY hh:mm")}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={12}>
                  {data.isPlace && (
                    <Box
                      style={{
                        backgroundColor: "#1ed760 ",
                        borderRadius: "5px",
                        width: "100%",
                        marginTop: "12px",
                      }}
                    >
                      <Button
                        style={{ color: "#fff" }}
                        // variant="contained"
                        size="small"
                        disabled={loading}
                        // color="secondary"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={() =>
                          history.push({
                            pathname: "/nft-details/orders",
                            search: data?._id,
                          })
                        }
                        fullWidth
                      >
                        View
                      </Button>
                    </Box>
                  )}
                  {data?.isPlace === false && (
                    <Box
                      style={{
                        backgroundColor: "#1ed760 ",
                        borderRadius: "5px",
                        width: "100%",
                        marginTop: "12px",
                      }}
                    >
                      <Button
                        style={{ color: "#fff" }}
                        size="small"
                        disabled={loading}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={() => {
                          if (user?.userData?.email === "" || user?.userData?.email === undefined) {
                            toast.warn("Please update your profile first")
                            history.push("edit-profile")
                          }
                          setputOnSale(true)


                        }}
                        fullWidth
                      >
                        Put On Sale{" "}
                      </Button>
                    </Box>
                  )}
                  {data?.saleType === "OFFSALE" && (
                    <Box
                      style={{
                        backgroundColor: "#1ed760 ",
                        borderRadius: "5px",
                        width: "100%",
                        marginTop: "12px",
                      }}
                    ></Box>
                  )}
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
            {/* <AudioCard
              src={data.uri}
              autoplay="true"
              loop="true"
              StopProps={StopIcon}
            /> */}
            <Box mt={1} component="div" className={classes.lastBox}>
              <Box mb={2}>
                <Box>
                  <label style={{ color: "#fff", margin: "7px, 0" }}>
                    Price :
                  </label>
                </Box>

                <TextField
                  style={{ color: "black", margin: "10px, 0" }}
                  onChange={(e) => setprice(e.target.value)}
                  value={price}
                  name="price"
                  type="number"
                  className={classes.textField}
                  variant="outlined"
                  disabled={loading}
                  fullWidth
                />
                {isSubmit && Number(price) <= 0 && (
                  <FormHelperText error style={{ marginLeft: "0px" }}>
                    Please enter valid price
                  </FormHelperText>
                )}
                {isSubmit && Number(price) >= 18 && (
                  <FormHelperText error style={{ marginLeft: "0px" }}>
                    Please enter valid price
                  </FormHelperText>
                )}
              </Box>
              <Box mt={2} mb={2} component="div" className={classes.dateField}>
                <Box>
                  <label style={{ color: "#fff", margin: "7px, 0" }}>
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
                {isSubmit && moment(expiry).unix() <= moment().unix() && (
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
