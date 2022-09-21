import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  Button,
  TextField,
} from "@material-ui/core";
import { BiTimeFive } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { NFTTokenABI } from "src/ABI/NFTTokenABI.js";
import {
  NftTokenAddress as NFTAddress,
  MarketPlaceAddress,
  apiConfig,
} from "src/constants/index";
import { getContract } from "src/utils";
import { addImageHandler } from "src/utils";
import { marketPlaceABI } from "src/ABI/MarketPlaceABI";
import moment from "moment";
import { ethers } from "ethers";
import axios from "axios";
import { Audiotrack } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  NftImg: {
    borderRadius: 10,
    boxShadow: "0 11px 24px rgb(0, 0, 0, 0.12)",
    display: "block",
    miHeight: "300px",
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
  textField: {
    marginRight: "10px",
    height: "35px",
  },
  card: {
    cursor: "pointer",
  },
}));

export default function ProfileCard(props) {
  const { type, data } = props;
  const classes = useStyles();
  const history = useHistory();
  const { active, account, chainId, library } = useWeb3React();

  async function rejectBid(e) {
    const contractObj = await getContract(
      MarketPlaceAddress,
      marketPlaceABI,
      library,
      account
    );
    // cancelBid(nftAddress, tokenId)
    console.log(data.nftId.tokenId);

    try {
      const cancelBid = await contractObj.cancelBid(
        NFTAddress,
        data.nftId.tokenId
      );

      await cancelBid.wait();

      axios({
        method: "put",
        url: apiConfig.cancelBid,
        headers: {
          token: window.sessionStorage.getItem("token"),
        },
      })
        .then((res) => console.log(res.data.result))
        .catch((err) => console.log(err));
    } catch (err) {
      window.alert("bid not exists !!");
      console.log(err);
    }
  }

  function redirect1(e) {
    history.push(`./nft-details/orders?${data._id}`);
  }

  return (
    <Box>
      {type == "Order-List" && (
        <Box className={classes.card} onClick={(e) => redirect1(e)}>
          <Box display="flex " className="" mb={2} ml={4}>
            <Box
              className="collectionSet favourites lesspadding width100"
              style={{ backgroundColor: "#1a1919", textAlign: "center" }}
            >
              {data && (
                <>
                  <img
                    style={{ position: "relative" }}
                    className={classes.NftImg}
                    src={
                      data?.nftId?.thumbNails
                        ? data?.nftId?.thumbNails
                        : "images/music.jpeg"
                    }
                    width="250px"
                    height="300px"
                    alt="nft"
                  />
                  <Audiotrack
                    style={{ position: "absolute", top: "0", right: "0" }}
                  />
                </>
              )}

              {data.nftId && (
                <Box className="Ticker">
                  <Typography
                    variant="h5"
                    className="NftPrice"
                    style={{ marginBottom: "5px", padding: "0 10px" }}
                  >
                    NFT ID: <span>{data.nftId.tokenId}</span>
                  </Typography>
                </Box>
              )}
              <Box className="Ticker">
                <Typography
                  variant="h5"
                  className="NftPrice"
                  style={{ marginBottom: "5px" }}
                >
                  Current Price : {data.price}
                </Typography>
              </Box>
              <Box pt={1}>
                {data.nftId && (
                  <Box>
                    <Typography
                      variant="h6"
                      className="NftHead"
                      style={{ marginBottom: "5px", color: "#fff" }}
                    >
                      {data.nftId.tokenName}
                    </Typography>
                  </Box>
                )}
                <Box mb={1} mt={1} className={classes.bottomblock}>
                  {data.nftId && (
                    <Typography
                      variant="h5"
                      className="NftExpire"
                      style={{ marginBottom: "5px", color: "#1ed760" }}
                    >
                      <BiTimeFive
                        style={{
                          fontSize: "13px",
                          marginRight: "5px",
                          color: "#1ed760",
                        }}
                      />
                      Created at{" "}
                      {moment(data.nftId.createdAt).format("DD MMM YYYY hh:mm")}
                    </Typography>
                  )}
                </Box>
                {/* {moment(data.expiryTime)?} */}
                <Box mb={1} mt={1} className={classes.bottomblock}>
                  <Typography
                    variant="h5"
                    className="NftExpire"
                    style={{ marginBottom: "5px", color: "#1ed760" }}
                  >
                    <BiTimeFive
                      style={{
                        fontSize: "13px",
                        marginRight: "5px",
                        color: "#1ed760",
                      }}
                    />
                    Closing in{" "}
                    {moment(data.expiryTime).format("DD MMM YYYY hh:mm")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {type == "Bid-List" && (
        <Box className={classes.card}>
          <Box display="flex " className="" mb={2}>
            <Box
              className="collectionSet favourites lesspadding width100"
              style={{ backgroundColor: "#1a1919" }}
            >
              {data.nftId && (
                <img
                  className={classes.NftImg}
                  src={data.thumbNails ? data.thumbNails : "images/music.jpeg"}
                  width="100%"
                  alt="nft"
                />
              )}

              <Box className="Ticker">
                <Typography
                  variant="h5"
                  className="NftPrice"
                  style={{ marginBottom: "5px", padding: "0 10px" }}
                >
                  NFT ID: <span>{data.tokenId}</span>
                </Typography>
              </Box>
              <Box className="Ticker">
                <Typography
                  variant="h5"
                  className="NftPrice"
                  style={{ marginBottom: "5px" }}
                >
                  Current Price : {data.bidId[0].price}
                </Typography>
              </Box>
              <Box pt={1}>
                {data.nftId && (
                  <Box>
                    <Typography
                      variant="h6"
                      className="NftHead"
                      style={{ marginBottom: "5px", color: "#fff" }}
                    >
                      {data.nftId.tokenName}
                    </Typography>
                  </Box>
                )}
                <Box mb={1} mt={1} className={classes.bottomblock}>
                  {data.nftId && (
                    <Typography
                      variant="h5"
                      className="NftExpire"
                      style={{ marginBottom: "5px" }}
                    >
                      <BiTimeFive
                        style={{ fontSize: "13px", marginRight: "5px" }}
                      />
                      Created at{" "}
                      {moment(data.nftId.createdAt).format("DD MMM YYYY hh:mm")}
                    </Typography>
                  )}
                </Box>
                <Box mb={1} mt={1} className={classes.bottomblock}>
                  <Typography
                    variant="h5"
                    className="NftExpire"
                    style={{ marginBottom: "5px" }}
                  >
                    <BiTimeFive
                      style={{ fontSize: "13px", marginRight: "5px" }}
                    />
                    Closing in{" "}
                    {moment(data.expiryTime).format("DD MMM YYYY hh:mm")}
                  </Typography>
                </Box>
                <Box className={classes.bottomblock}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                    style={{ backgroundColor: "red" }}
                    onClick={(e) => rejectBid(e)}
                  >
                    Reject
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
