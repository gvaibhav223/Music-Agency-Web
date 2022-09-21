import {
  Box,
  Button,
  TableCell,
  Grid,
  TableRow,
  TableBody,
  Paper,
  Table,
  TableHead,
  TableContainer,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { apiConfig } from "src/constants/index";

import { FiCopy } from "react-icons/fi";

import moment from "moment";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import { sortAddress } from "src/utils";

// import DataLoading from "src/component/DataLoading";
// import DataNotFound from "src/component/DataNotFound";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";

const useStyles = makeStyles((theme) => ({
  root: { paddingBottom: "120px" },
  nftcard: {
    background: "#FFFFFF",
    backdropFilter: "blur(44px)",
    borderRadius: "40px",
    padding: "10px",
  },
  nftImg: {
    "& figure": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      background: "rgba(0 , 0, 0, 0.041)",

      "& img": {
        maxHeight: "100%",
        maxWidth: "100%",
        height: "auto",
        width: "auto",
        display: "block",
      },
    },
  },
  tabBtn: {
    margin: "20px 0px 10px 0px",
    backgroundColor: "#FCF2FA",
    borderRadius: "22px",
    padding: "14px",
    "& button": { borderRadius: "15px" },
  },
  bidsDetails: {
    background: "#FFFFFF",
    backdropFilter: "blur(44px)",
    border: "0.5px solid #D3D3D3",
    boxSizing: "border-box",
    borderRadius: "22px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  profileimg: {
    "& figure": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      width: "75px",
      height: "75px",
      marginRight: "20px",
    },
    "& img": {
      maxHeight: "100%",
      maxWidth: "100%",
      height: "auto",
      width: "auto",
      display: "block",
    },
  },
  price1: {
    "& h5": {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "130%",
      color: "#3B0D60",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
    "& h6": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "130%",
      color: "#3B0D60",
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
      "& span": {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "130%",
        color: "#D200A5",
        [theme.breakpoints.down("sm")]: {
          fontSize: "13px",
        },
      },
    },
  },
  time: {
    paddingRight: "25px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0",
      marginTop: "10px",
    },
    "& h6": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "130%",
      color: "#C6BECC",
    },
  },
}));

export default function History({ orderDetails, setAccountCheck }) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState();
  const [historyList, setHistoryList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [bidData, setBidData] = useState([]);

  const showNftHistoryhandler = async (_id) => {
    setIsLoading(true);

    try {
      const res = await axios.get(apiConfig.viewNftTransaction + _id, {
        headers: {
          token: sessionStorage.getItem("token"),
        },
        params: {
          page,
          limit: 5,
        },
      });
      if (res.data.response_code === 200) {
        setHistoryList(res.data.result);
        setNoOfPages(res.data.result.pages);
        setBidData(res.data.result.bidId);
      } else {
        setHistoryList(res.data.result);
        setNoOfPages(res.data.result.pages);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("ERROR", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (orderDetails?.nftId?._id || orderDetails?._id) {
      showNftHistoryhandler(orderDetails?.nftId?._id || orderDetails?._id);
    }
  }, [orderDetails, page]);
  useEffect(() => {
    const accountFinder = historyList.find((data) => {
      return data.type === "SELL";
    });
  }, [historyList]);

  return (
    <Box>
      {isLoading ? (
        <ButtonCircularProgress />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "#1ed760",
                    }}
                    align="left"
                  >
                    Type
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "#1ed760",
                      minWidth: "90px",
                    }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "#1ed760",
                      minWidth: "110px",
                    }}
                    align="left"
                  >
                    From
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "#1ed760",
                      minWidth: "110px",
                    }}
                    align="left"
                  >
                    To
                  </TableCell>

                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "#1ed760",
                      minWidth: "120px",
                    }}
                    align="left"
                  >
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Box pt={2}></Box>

                {historyList.map((userlist, index) => (
                  <TableRow key={userlist._id} className={classes.root}>
                    <TableCell component="th" scope="row">
                      {userlist.type}
                    </TableCell>
                    <TableCell align="left">
                      {userlist?.price
                        ? userlist?.price
                        : userlist?.bidId[0]?.price
                        ? userlist?.bidId[0]?.price
                        : "--"}
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ color: "rgb(32, 129, 226)" }}
                    >
                      {userlist?.type === "CREATE" && <>N/A</>}
                      {userlist?.type === "LIST" && (
                        <>
                          {sortAddress(
                            userlist?.nftId?.walletAddress
                              ? userlist?.nftId?.walletAddress
                              : ""
                          )}

                          <CopyToClipboard
                            text={userlist?.nftId?.walletAddress}
                          >
                            <FiCopy onClick={() => toast.info("Copied")} />
                          </CopyToClipboard>
                        </>
                      )}
                      {userlist?.type === "AUCTION" && (
                        <>
                          {sortAddress(
                            userlist?.bidId[0]?.userId?.walletAddress
                              ? userlist?.bidId[0]?.userId?.walletAddress
                              : "N/A"
                          )}
                          <CopyToClipboard
                            text={userlist?.bidId[0]?.userId?.walletAddress}
                          >
                            <FiCopy onClick={() => toast.info("Copied")} />
                          </CopyToClipboard>
                        </>
                      )}

                      {userlist.type === "SELL" && (
                        <>
                          {sortAddress(
                            userlist?.orderId?.currentOwner
                              ? userlist?.orderId?.currentOwner
                              : userlist?.userId?.walletAddress
                              ? userlist?.userId?.walletAddress
                              : "N/A"
                          )}
                          <CopyToClipboard
                            text={
                              userlist?.orderId?.currentOwner
                                ? userlist?.orderId?.currentOwner
                                : userlist?.userId?.walletAddress
                            }
                          >
                            <FiCopy onClick={() => toast.info("Copied")} />
                          </CopyToClipboard>
                        </>
                      )}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ color: "rgb(32, 129, 226)" }}
                    >
                      {userlist?.type === "LIST" && <>N/A</>}
                      {userlist?.type === "SELL" && (
                        <>
                          {" "}
                          {sortAddress(
                            userlist?.userId?.walletAddress
                              ? userlist?.userId?.walletAddress
                              : "N/A"
                          )}
                          <CopyToClipboard
                            text={
                              userlist?.userId?.walletAddress
                                ? userlist?.userId?.walletAddress
                                : userlist?.userId?.walletAddress
                            }
                          >
                            <FiCopy onClick={() => toast.info("Copied")} />
                          </CopyToClipboard>
                        </>
                      )}
                      {userlist?.type === "CREATE" && (
                        <>
                          {sortAddress(
                            userlist?.walletAddress
                              ? userlist?.walletAddress
                              : "N/A"
                          )}

                          <CopyToClipboard text={userlist?.walletAddress}>
                            <FiCopy onClick={() => toast.info("Copied")} />
                          </CopyToClipboard>
                        </>
                      )}
                      {userlist?.type === "AUCTION" && <>N/A</>}
                    </TableCell>

                    <TableCell align="left">
                      {moment(
                        userlist.createdAt
                          ? userlist.createdAt
                          : userlist?.bidId[0]?.createdAt
                      ).format("DD-MM-YYYY")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {isLoading && <ButtonCircularProgress />}
            {!isLoading && historyList && historyList.length === 0 && (
              <Typography style={{ color: "#000", testAlign: "center" }}>
                No Data Found
              </Typography>
            )}
          </TableContainer>
        </>
      )}
    </Box>
  );
}
