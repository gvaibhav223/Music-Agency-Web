import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  withStyles,
  Dialog,
} from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import ConnectWallet from "src/component/ConnectWallet";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { UserContext } from "src/context/User";
import { toast } from "react-toastify";

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    overflow: "hidden !important",
  },
}))(MuiDialogContent);

export default function Banner() {
  const [isOpenConnect, setIsOpenWallet] = useState(false);
  const user = useContext(UserContext);
  const history = useHistory()

  return (
    <Box
      className="BannerSection"
      style={{
        background: "#206759",
        backgroundImage: "url(images/bannerimg.jpg)",
      }}
    >
      <Container maxWidth="lg">
        <Box fixed className="bannerContent">
          <Box className="bannertext">
            <Typography variant="h2">
              Discover, Collect, and
              <br />
              sell Music NFTs
            </Typography>
            <Typography>
              on the world's first and largest
              <br />
              NFT marketplace
            </Typography>

            <Box mt={2}>
              <Button
                variant="contained"
                to="/marketplace"
                size="large"
                component={RouterLink}
              >
                Browse
              </Button>
              {user?.userData?.email === "" || user?.userData?.email === undefined ? (
                <Button variant="outlined" style={{ marginLeft: "10px" }} size="large" onClick={() => {
                  if (!user?.userData?.walletAddress) {
                    setIsOpenWallet(true)
                  } else {
                    toast.warn("Please update your profile first")
                    history.push("/edit-profile")
                  }
                }}>Create</Button>

              ) : (
                <>
                  {user?.userData?.walletAddress && (
                    <Button
                      variant="outlined"
                      to="/create-nft"
                      size="large"
                      component={RouterLink}
                    >
                      Create
                    </Button>
                  )}
                </>
              )}


            </Box>
          </Box>
        </Box>
        <Dialog
          open={isOpenConnect}
          fullWidth
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
      </Container >
      <CookieConsent
        location="bottom"
        buttonText="Ok"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "18px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </Box >
  );
}
