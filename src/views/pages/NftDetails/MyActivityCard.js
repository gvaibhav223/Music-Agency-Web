import React from "react";
import { Typography, Box, IconButton } from "@material-ui/core";
import moment from "moment";
import { sortAddress } from "src/utils";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  bidsDetails: {
    background: "#FFFFFF",
    backdropFilter: "blur(44px)",
    border: "0.5px solid #D3D3D3",
    boxSizing: "border-box",
    borderRadius: "5px",
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
    borderRadius: "100px",
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
      borderRadius: "100px",
    },
  },
  price1: {
    color: "#000",
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
export default function MyActivityCard(props) {
  const { data, type, account, accounCheck } = props;
  const history = useHistory();
  const classes = useStyles();
  return (
    <Box className={classes.bidsDetails} mt={1}>
      <Box style={{ alignItems: "center", display: "flex" }}>
        <Box className={classes.profileimg}>
          <figure
            // onClick={() => {
            //   history.push({
            //     pathname: "/user",
            //     search: data?.userId?._id,
            //   });
            // }}
            style={{ cursor: "pointer" }}
          >
            <img
              src={
                data?.userId?.profilePic
                  ? data?.userId?.profilePic
                  : "/images/user.png"
              }
              alt=""
            />
          </figure>
        </Box>

        <Box className={classes.price1} style={{ color: "#222" }}>
          {type === "myNFT" && (
            <Typography variant="h6">
              {data?.buyerAddress
                ? sortAddress(data?.buyerAddress)
                : sortAddress(data?.walletAddress)}
              <CopyToClipboard text={data?.buyerAddress}>
                <IconButton>
                  <FaCopy onClick={() => toast.info("Copied")} />
                </IconButton>
              </CopyToClipboard>
            </Typography>
          )}
          {type === "orderPage" && (
            <>
              {data?.userId?.userName ||
                (data?.userId?.walletAddress && (
                  <Typography variant="h6" style={{ color: "#000" }}>
                    {" "}
                    {data?.userId?.userName
                      ? data?.userId?.userName.toUpperCase()
                      : sortAddress(data?.userId?.walletAddress)
                        ? sortAddress(data?.userId?.walletAddress)
                        : data?.userName
                          ? data?.userName.toUpperCase()
                          : sortAddress(data?.walletAddress)}
                    <CopyToClipboard text={data?.userId?.walletAddress}>
                      <IconButton>
                        <FaCopy onClick={() => toast.info("Copied")} />
                      </IconButton>
                    </CopyToClipboard>
                  </Typography>
                ))}
            </>
          )}
          {/* {type !== "myNFT" && (
            <Typography variant="h6">
              {" "}
              {sortAddress(
                data?.userId?.walletAddress
                  ? data?.userId?.walletAddress
                  : data?.walletAddress
              )}
              <CopyToClipboard text={data?.userId?.walletAddress}>
                <IconButton>
                  <FaCopy onClick={() => toast.info("Copied")} />
                </IconButton>
              </CopyToClipboard>
            </Typography>
          )} */}
          {/* {type === "sold" && (
            <Typography variant="h6">
              {accounCheck ? sortAddress(accounCheck) : "N/A"}
              <CopyToClipboard text={accounCheck}>
                <IconButton>
                  <FaCopy onClick={() => toast.info("Copied")} />
                </IconButton>
              </CopyToClipboard>
            </Typography>
          )} */}
        </Box>
      </Box>
      <Box className={classes.time}>
        <Typography variant="h6" style={{ color: "#000" }}>
          {" "}
          {moment(data?.updatedAt).format("DD-MM-YYYY")}
        </Typography>
        <Typography variant="h6" style={{ color: "#000" }}>
          {" "}
          {moment(data?.updatedAt).format("hh:mm A")}
        </Typography>
      </Box>
    </Box>
  );
}
