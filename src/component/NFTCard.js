import React, { useContext, useState, useEffect } from "react";
import {
  Typography,
  Box,
  makeStyles,
  Avatar,
  Grid,
  Link,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { sortAddress, calculateTimeLeft } from "src/utils";

import { FaEthereum } from "react-icons/fa";

import moment from "moment";
import { useHistory } from "react-router-dom";

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
  },
}));

export default function NFTCard(props) {
  const { data, type, index, callbackFun, orderList } = props;
  const classes = useStyles();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const history = useHistory();
  const [openReport, setOpenReport] = useState(false);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(
        calculateTimeLeft(new Date(moment(data?.expiryTime).unix() * 1000))
      );
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <Box
      className="bgCardcolor newborder"
      style={{ borderRadius: 1, margin: 7 }}
    >
      <Box display="flex" style={{ padding: "3px 9px 10px" }}>
        <Box className="collectionSet">
          <Box className={classes.NftImg}>
            <Box className="d-flex justifyEnd text-grey" pt={0} pb={1}></Box>

            <>
              <Box
                onClick={() => {
                  if (!data?.isReported) {
                    history.push({
                      pathname: "/nft-details/orders",
                      search: data._id,
                    });
                  } else {
                    setOpenReport(true);
                  }
                }}
                // to={`/nft-details/orders?${data._id}`}
              >
                <Box
                  className="imageholder"
                  id={`imagecard${index}`}
                  style={{
                    background:
                      "url(" +
                      `${
                        data?.nftDetails?.thumbNails
                          ? data?.nftDetails?.thumbNails
                          : data?.nftId?.thumbNails
                      }` +
                      ")",
                  }}
                ></Box>
              </Box>
              {data?.nftDetails?.mimetype === "audio" && (
                <Box className={classes.playbutton}>
                  <Avatar
                    style={{ backgroundColor: "#1ed760", cursor: "pointer" }}
                  >
                    <PlayArrowIcon />
                  </Avatar>
                </Box>
              )}
              {data?.nftId?.mimetype === "audio" && (
                <Box className={classes.playbutton}>
                  <Avatar
                    style={{ backgroundColor: "#1ed760", cursor: "pointer" }}
                  >
                    <PlayArrowIcon />
                  </Avatar>
                </Box>
              )}
            </>
          </Box>
          <Box mt={2}>
            <Grid container style={{ display: "block" }}>
              <Grid item className="NFTDetailsBox" lg="12">
                <Box className="Nftdetail">
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: ".5rem",
                    }}
                  >
                    {data.nftDetails && (
                      <Typography
                        variant="h6"
                        className="textEllipsys"
                        style={{
                          wordBreak: "break-all",
                          color: "#fff",
                        }}
                      >
                        {data.nftDetails.tokenName}
                      </Typography>
                    )}
                    {data.nftId && (
                      <Typography
                        className="textEllipsys"
                        style={{
                          fontSize: "15px",
                          wordBreak: "break-all",
                          color: "#fff",
                        }}
                      >
                        {data?.nftId?.tokenName}
                      </Typography>
                    )}
                    <FaEthereum style={{ color: "#5d6388" }} />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg="12">
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography className="NftBidValue" variant="body2">
                    Ending In :
                  </Typography>
                  <Link href={`./nft-details/orders?${data._id}`}>
                    {parseFloat(data?.expiryTime) <
                      moment().format("DD MMM YYYY hh:mm") ||
                    !data?.expiryTime ? (
                      <Typography
                        variant="h2"
                        className="MusicName textEllipsys"
                      >
                        Expired
                      </Typography>
                    ) : (
                      <Typography
                        variant="h2"
                        className="MusicName textEllipsys"
                      >
                        {timeLeft.days ? timeLeft.days && timeLeft.days : "0"}d
                        :&nbsp;
                        {timeLeft.hours
                          ? timeLeft.hours && timeLeft.hours
                          : "0"}
                        h :&nbsp;
                        {timeLeft.minutes
                          ? timeLeft.minutes && timeLeft.minutes
                          : "0"}
                        m :&nbsp;
                        {timeLeft.seconds
                          ? timeLeft.seconds && timeLeft.seconds
                          : "0"}
                        s
                      </Typography>
                    )}
                  </Link>
                </Box>
              </Grid>

              <Grid item lg={12}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography className="NftBidValue" variant="body2">
                    Price :
                  </Typography>
                  <Typography className="NftBidValue" variant="body2">
                    {data?.price} ETH
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {openReport && (
        <Dialog open={openReport} onClose={() => setOpenReport(false)}>
          <DialogContent>
            <Typography variant="h4">
              Your NFT has been blocked by admin.
              <br />
              Please contact at
              <a href="mailto:nft.admin@mobiloitte.com">
                {" "}
                nft.admin@mobiloitte.com{" "}
              </a>{" "}
              to request for unblock.
            </Typography>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
}
