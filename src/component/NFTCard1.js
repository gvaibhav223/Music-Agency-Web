import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  Avatar,
  Grid,
  Link,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { BsClockHistory } from "react-icons/bs";
import moment from "moment";
import { ethers } from "ethers";

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
  const { type, data } = props;
  const classes = useStyles();
  console.log("data123---@@", data);
  return (
    <Box
      className="bgCardcolor"
      style={{ padding: "17px", borderRadius: 1, margin: 7 }}
    >
      <Box display="flex">
        <Box className="collectionSet">
          <Box className={classes.NftImg}>
            <Box className="d-flex justifyEnd text-grey" pt={0} pb={1}>
              {/* <FavoriteBorderOutlinedIcon style={{ fontSize: "18px" }} />
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "18px",
                  fontWeight: "300",
                }}
              >
                {data.likes}
              </span> */}
            </Box>
            {/* <Link href={`./nft-details/orders/?${data._id}`}> */}
            {/* <img
                src={'images/music.jpeg'}
                width="220px"
                height="220px"
                alt=""
                style={{ borderRadius: "5px" }}
              /> */}

            {data?.nftDetails?.mimetype === "audio" ? (
              <>
                <Link href={`./nft-details/orders${data._id}`}>
                  <img
                    src="images/music.jpeg"
                    width="220px"
                    height="220px"
                    alt="NFTImage"
                    style={{ borderRadius: "5px" }}
                  />
                </Link>
                <Box className={classes.playbutton}>
                  <Avatar
                    style={{ backgroundColor: "#1ed760", cursor: "pointer" }}
                  >
                    <PlayArrowIcon />
                  </Avatar>
                </Box>
              </>
            ) : (
              <>
                <Link href={`./nft-details/orders?${data._id}`}>
                  <img
                    src={data?.nftDetails?.thumbNails}
                    width="220px"
                    height="220px"
                    alt="NFTImage"
                    style={{ borderRadius: "5px" }}
                  />
                </Link>
              </>
            )}
            {/* </Link> */}
            {/* <Box className={classes.playbutton}>
              <Avatar style={{ backgroundColor: "#1ed760", cursor: "pointer" }}>
                <PlayArrowIcon />
              </Avatar>
            </Box> */}
          </Box>
          <Box mt={2}>
            <Grid container justify="space-between">
              <Grid item className="NFTDetailsBox">
                <Box className="Nftdetail">
                  <Box container direction="column" alignItems="flex-start">
                    {data.nftDetails && (
                      <Typography
                        className="textEllipsys"
                        style={{ fontSize: "15px" }}
                      >
                        {data.nftDetails.tokenName}
                      </Typography>
                    )}

                    <Link href={`./nft-details/orders?${data._id}`}>
                      <Typography
                        variant="h2"
                        className="MusicName textEllipsys"
                      >
                        {" "}
                        {data.nftDetails.songname}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
                <Box className="NftData">
                  <Grid container direction="column" alignItems="flex-end">
                    {/* <Grid item>
                      <Typography variant="body2">Min Bid</Typography>
                    </Grid> */}
                    <Grid item>
                      <Typography className="NftBidValue" variant="body2">
                        Price: {data.price}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Box mt={1} className="d-flex">
                        <span className="bidTime">
                          {moment(data.createdAt).format("DD MMM YYYY hh:mm")}
                        </span>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
