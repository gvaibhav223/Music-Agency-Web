import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  // Link,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { VscBrowser } from "react-icons/vsc";

import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
  headerSection: {
    background: "rgba(34,196,254)",
    background:
      "linear-gradient(29deg, rgba(34,196,254,1) 0%, rgba(0,89,236,1) 100%, rgba(0,212,255,1) 100%)",
    top: "68px",
    position: "absolute",
    width: "100%",
    left: "0",
    zIndex: "9",
    maxWidth: "100%",
    overflow: "auto",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },

  iconText: {
    width: 18,
    height: 18,
    marginRight: "8px",
    color: "#fff",
  },
  iconBox: {
    display: "flex",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerSection}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Box className="secondaryHeader">
              <Link to="/my-collection">
                <Box className={classes.iconBox}>
                  <VscBrowser className={classes.iconText} />
                  <Typography variant="body2" className="iconText">
                    My Collection
                  </Typography>
                </Box>
              </Link>
              <Box className={classes.iconBox}>
                <VscBrowser className={classes.iconText} />
                <Typography variant="body2" className="iconText">
                  My NFT
                </Typography>
              </Box>
              <Box className={classes.iconBox}>
                <VscBrowser className={classes.iconText} />
                <Typography variant="body2" className="iconText">
                  My Auction
                </Typography>
              </Box>
              <Box className={classes.iconBox}>
                <VscBrowser className={classes.iconText} />
                <Typography variant="body2" className="iconText">
                  My Redeem
                </Typography>
              </Box>
              <Box className={classes.iconBox}>
                <VscBrowser className={classes.iconText} />
                <Typography variant="body2" className="iconText">
                  My Wallet
                </Typography>
              </Box>
              <Box className={classes.iconBox}>
                <VscBrowser className={classes.iconText} />
                <Typography variant="body2" className="iconText">
                  Review
                </Typography>
              </Box>
              <Box className={classes.iconBox}>
                <VscBrowser className={classes.iconText} />
                <Typography variant="body2" className="iconText">
                  Favourites
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
