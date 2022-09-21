import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Link,
  makeStyles,
  Dialog,
  withStyles,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import { ImFacebook } from "react-icons/im";

import { Link as Move } from "react-router-dom";

import {} from "react-feather";
import Logo from "./../../component/Logo";
import { UserContext } from "src/context/User";
import { toast } from "react-toastify";
import ConnectWallet from "src/component/ConnectWallet";
import MuiDialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
  footerSection: {
    background: "#1ed760",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
  },
  borderBottmo: {
    overflow: "hidden",
    background: "#000",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },

  largeIcon: {
    width: 18,
    height: 18,
    marginRight: "8px",
  },
  icons: {
    justify: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justify: "center",
    },
  },
  contentBox: {
    width: "100%",
    maxWidth: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: "100%",
    },
  },
}));
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    overflow: "hidden !important",
  },
}))(MuiDialogContent);

export default function Liquidity() {
  const user = useContext(UserContext);
  const [isOpenConnect, setIsOpenWallet] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Box className={classes.footerSection}>
        <Box style={{ margin: "20px 10px 0" }}>
          <Container maxWidth="lg">
            <Grid
              container
              style={{ color: "white" }}
              justify="space-around"
              spacing={1}
            >
              <Grid item xs={12} sm={6} md={5} lg={5}>
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  alignItems="flex-start"
                >
                  <Grid item>
                    {" "}
                    <Logo width="100" />{" "}
                  </Grid>
                  <Grid item>
                    {" "}
                    <Box className={classes.contentBox}>
                      <Typography
                        style={{ fontSize: "15px", fontWeight: "normal" }}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </Typography>{" "}
                    </Box>
                    <Box className="sociaLinks">
                      <List>
                        <ListItem>
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            <ImFacebook />
                          </a>
                          <a
                            href="https://telegram.org/"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            <TelegramIcon />
                          </a>
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            <TwitterIcon />
                          </a>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            <InstagramIcon />
                          </a>
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={7} lg={7}>
                <Grid container spacing={1}>
                  <Grid item xs={6} sm={6} md={4}>
                    <Typography className="footerTitle" variant="h4">
                      My Account
                    </Typography>

                    <List className="listingFooter">
                      <ListItem>
                        {user?.userData?.walletAddress && (
                          <Move
                            to="/profile"
                            style={{ textDecoration: "none" }}
                          >
                            My Profile
                          </Move>
                        )}
                        {!user?.userData?.walletAddress && (
                          <Move
                            style={{ textDecoration: "none" }}
                            onClick={() => setIsOpenWallet(true)}
                          >
                            My Profile
                          </Move>
                        )}
                      </ListItem>
                      <ListItem>
                        {user?.userData?.walletAddress && (
                          <Move to="/nft" style={{ textDecoration: "none" }}>
                            My Nfts
                          </Move>
                        )}
                        {!user?.userData?.walletAddress && (
                          <Move
                            style={{ textDecoration: "none" }}
                            // onClick={() =>
                            //   toast.warn("Please connect your wallet")
                            // }
                            onClick={() => setIsOpenWallet(true)}
                          >
                            My Nfts
                          </Move>
                        )}
                      </ListItem>
                    </List>
                  </Grid>
                  {/* {isOpenConnect && (
                  
                  )} */}
                  <Dialog
                    open={isOpenConnect}
                    onClose={() => {
                      setIsOpenWallet(false);
                    }}
                    maxWidth="xs"
                  >
                    <DialogContent>
                      <ConnectWallet
                        onClose={() => {
                          setIsOpenWallet(false);
                        }}
                      />
                    </DialogContent>
                  </Dialog>

                  <Grid item xs={6} sm={6} md={4}>
                    <Typography className="footerTitle" variant="h4">
                      Resource
                    </Typography>

                    <List className="listingFooter">
                      <ListItem>
                        <a
                          href="help-desk-center"
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          Help Center
                        </a>
                      </ListItem>

                      <ListItem>
                        <a
                          href="https://discord.com/"
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          Discord Community
                        </a>
                      </ListItem>
                    </List>
                  </Grid>

                  <Grid item xs={6} sm={6} md={4}>
                    <Typography className="footerTitle" variant="h4">
                      Terms Of Use
                    </Typography>
                    <List className="listingFooter">
                      <ListItem>
                        <a
                          href="/legal-policy"
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          Legal Notice
                        </a>
                      </ListItem>
                      <ListItem>
                        <a
                          href="/disclaimer"
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          Dislaimer
                        </a>
                      </ListItem>
                      <ListItem>
                        <a
                          href="/terms-conditions"
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          Terms & Conditions
                        </a>
                      </ListItem>
                      <ListItem>
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          Privacy Policy
                        </a>
                      </ListItem>
                      <ListItem>
                        <a
                          href="/cookies-policy"
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          Cookies Policy
                        </a>
                      </ListItem>
                    </List>{" "}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Box className="lowerFooter">
                  <Typography
                    style={{ fontSize: "12px", fontWeight: "normal" }}
                  >
                    Liberty © copyright 2022 | NFT Marketplace
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
