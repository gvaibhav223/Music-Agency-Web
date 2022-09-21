import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  InputBase,
  DialogActions,
  Drawer,
  ListItem,
  Grid,
  Snackbar,
  Link,
  MenuItem,
  DialogTitle,
  Dialog,
  DialogContentText,
  DialogContent,
  Box,
  Container,
  List,
  Typography,
  fade,
  Menu,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { ACTIVE_NETWORK, NetworkContextName } from "src/constants";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect, useContext } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Logo from "./../../component/Logo";
// import { ACTIVE_NETWORK } from "src/constants";
import { UserContext } from "src/context/User";
import { useWeb3React } from "@web3-react/core";
const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Support",
    href: "/help-desk-center",
  },
  {
    label: "Browse",
    href: "/marketplace",
  },
];

const headersAuthData = [
  {
    label: "Create",
    href: "/create-nft",
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    height: "67px",
    position: "absolute",
    backgroundColor: "#111111",
    paddingRight: "0",
    paddingLeft: "0px",
    "@media (max-width: 1280px)": {
      paddingLeft: "0",
      paddingRight: "0px",
      height: "70px",
      paddingTop: "5px",
    },
    "@media (max-width: 900px)": {
      paddingLeft: "0px",
      paddingRight: "0px",
      height: "70px",
      paddingTop: "5px",
    },
  },

  menuButton: {
    fontSize: "15px",
    height: "40px",
    fontWeight: "400",
    borderRadius: 0,
    marginLeft: "16px",
    color: "#fffff",
    padding: "10px 24px",
    // textTransform: "uppercase",
    letterSpacing: "1px",
    "@media (max-width: 900px)": {
      fontStyle: "normal",
      letterSpacing: "-0.6px",
      lineHeight: "1.75",
    },
    "&:active": {
      color: "#1ed760",
    },
    "&:last-child": {
      backgroundColor: "#1ed760",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    "@media (max-width: 900px)": {
      paddingLeft: "75px",
      // paddingRight: "20px",
      height: "100%",
    },
  },
  maindrawer: {
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },
  logoDrawer: {
    paddingLeft: "10px",
    width: "60px",
    marginBottom: "30px",
  },
  drawerContainer: {
    padding: "20px 0px ",
    height: "100%",
    background: "#000",
    width: "260px",
  },
  drawericon: {
    color: "#000",
    position: "absolute",
    top: "10px",
    right: "0px",
    fontSize: "25px",
  },
  logoImg: {
    width: "72px",
    height: "44.5px",
    margin: " 14px 15px 11px 0px",
    objectFit: "contain",
    "@media (max-width: 884px)": {
      margin: " 11px 15px 3px 20px",
    },
  },
  menuMobile: {
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: "-0.6px",
    lineHeight: "1.75",
    color: "#fff",
    borderBottom: "1px solid #3e3e3e",
    padding: "16px",
  },
  paper1: {
    background: "black",
    color: "white",
  },
  containerHeight: {
    height: "100%",
  },
  mainHeader: {
    justifyContent: "space-between",
    padding: "0px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 20,
    width: "160px",
    maxWidth: "257px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "257px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100px",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  // const { account, chainId } = useWeb3React();
  const user = useContext(UserContext);

  // const auth = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);

  // search API
  const [searchInput, setSearchInput] = useState("");
  const onKeyDown = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      if (searchInput !== "") {
        history.push({
          pathname: "/nft-search",
          search: searchInput,
        });
        // alert(searchInput);
      } else {
        setSearchInput("");
        history.push({
          pathname: "/nft-search",
          search: searchInput,
        });
        // alert("empty");
        // window.location.href = "/search";
      }
    }
  };
  //
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    header,
    menuMobile,
    menuButton,
    toolbar,
    drawerContainer,
    drawericon,
    logoImg,
    logoDrawer,
    containerHeight,
    search,
    searchIcon,
    mainHeader,
    inputInput,
    inputRoot,
  } = useStyles();
  const history = useHistory();
  const { account, library, chainId } = useWeb3React();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const [errpopup, seterrpopup] = React.useState("");
  const [errhandleClose, seterrhandleClose] = React.useState(false);
  const [DataDisconnect, setDataDisconnect] = useState("initialState");
  const [errmsg, seterrmsg] = React.useState("");
  const disconnectHandler = () => {
    // setOpen(true);
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("userAddress");
    // href = "/";
    // window.sessionStorage.removeItem("userAddress");
    // location.pathname("/");
    seterrhandleClose(true);
    seterrpopup(true);
    seterrmsg("Disconnect Successful");
    // toast.success("Disconnect Successful");
    setDataDisconnect("");
    window.location.href = "/";
    // history.push("/");
  };

  const displayDesktop = () => {
    return (
      <Container maxWidth="lg">
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <Grid
            container
            item
            direction="row"
            justify="flex-end"
            style={{ paddingLeft: "0px" }}
          >
            <div className={search}>
              <div className={searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search NFT"
                classes={{
                  root: inputRoot,
                  input: inputInput,
                }}
                onKeyDown={onKeyDown}
                onChange={(e) => setSearchInput(e.target.value)}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            {getMenuButtons()}
            {user?.isLogin ? getMenuButtonsAuth() : null}
            {!user?.isLogin && (
              <Button
                variant="contained"
                size="small"
                color="secondary"
                aria-controls="simple-menu"
                aria-haspopup="true"
                // onClick={user.connectWallet}
                onClick={() => setOpen(true)}
              >
                Connect
              </Button>
            )}
            {user?.isLogin && (
              <Button
                variant="contained"
                size="small"
                color="secondary"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                Profile
              </Button>
            )}

            {/* <Button variant="contained" size="small" color="secondary" onClick={handleClickOpen}>
        Connect
      </Button> */}
          </Grid>
        </Toolbar>
      </Container>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <img className={logoDrawer} src="images/logo.png" alt="" />

            {getDrawerChoices()}
            {user?.isLogin ? getDrawerChoicesAuth() : null}

            {!user?.isLogin && (
              <Button
                variant="contained"
                size="small"
                color="secondary"
                aria-controls="simple-menu"
                aria-haspopup="true"
                // onClick={user.connectWallet}
                onClick={() => setOpen(true)}
              >
                Connect
              </Button>
            )}
            {user?.isLogin && (
              <Button
                variant="contained"
                size="small"
                color="secondary"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={() => history.push("/profile")}
              >
                Profile
              </Button>
            )}

            {/* <Link className='MobileButton' onClick={handleClickOpen}>
              Connect
            </Link> */}
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
        <Grid container>
          <Grid item xs={10}>
            <div className={search}>
              <div className={searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: inputRoot,
                  input: inputInput,
                }}
                onKeyDown={onKeyDown}
                onChange={(e) => setSearchInput(e.target.value)}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              className={drawericon}
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon
                width="60px"
                height="60px"
                style={{ color: "#1ed760" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <>
          <Box
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem className={menuMobile}>{label}</MenuItem>
          </Box>
        </>
      );
    });
  };

  const getDrawerChoicesAuth = () => {

    return headersAuthData.map(({ label, href }) => {
      return (
        <>
          {user?.userData?.email === "" || user?.userData?.email === undefined ? (
            <Button color="inherit" className={menuButton} onClick={() => {
              toast.warn("Please update your profile first")
              history.push("/edit-profile")
            }}>Create</Button>

          ) : (
            <Box
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem className={menuMobile}>{label}</MenuItem>
            </Box>
          )}
        </>
      );
    });
  };

  const femmecubatorLogo = (
    <Box>
      <Link component={RouterLink} to="/">
        <Logo className={logoImg} />
      </Link>
    </Box>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <>
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        </>
      );
    });
  };
  const getMenuButtonsAuth = () => {
    return headersAuthData.map(({ label, href }) => {
      return (
        <>
          {user?.userData?.email === "" || user?.userData?.email === undefined ? (
            <Button color="inherit" className={menuButton} onClick={() => history.push("/edit-profile")}>Create</Button>

          ) : (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton,
              }}
            >
              {label}
            </Button>
          )
          }

        </>
      );
    });
  };

  return (
    <>
      <AppBar
        className={header}
        elevation={0}
        style={
          history.location.pathname !== "/"
            ? { backgroundColor: "#000" }
            : { backgroundColor: "black" }
        }
      >
        <Box
          maxWidth={history.location.pathname !== "/" ? "lg" : "fixed"}
          className={containerHeight}
        >
          {mobileView ? displayMobile() : displayDesktop()}
        </Box>
      </AppBar>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose1}
      >
        <MenuItem onClick={() => history.push("/profile")}>My Profile</MenuItem>
        <MenuItem onClick={() => history.push("/nft")}>My Nft</MenuItem>
        <MenuItem onClick={disconnectHandler}>Disconnect</MenuItem>
        {/* <MenuItem onClick={handleClickOpen}>Connect</MenuItem> */}
      </Menu>
      <Dialog
        open={open}
        className="walletdailog"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="dailogTitle">
          {"Connect a Wallet"}
        </DialogTitle>
        <DialogContent className="loginModal">
          <DialogContentText id="alert-dialog-description">
            <Box className="walletlist" style={{ cursor: "pointer" }}>
              <List>
                <ListItem style={{ cursor: "pointer" }}>
                  <Link
                    onClick={() => {
                      user.connectWallet();
                      handleClose();
                    }}
                  >
                    <Typography variant="h3" style={{ cursor: "pointer" }}>
                      Metamask
                    </Typography>
                    <img src="/images/metamask.png" alt="metamask" />
                  </Link>
                </ListItem>
              </List>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="dailogFooter">
          <a onClick={handleClose} color="primary" autoFocus>
            Close
          </a>
        </DialogActions>
      </Dialog>

      {/* <Dialog
        open={account && chainId !== ACTIVE_NETWORK}
        minWidth='md'
        fullWidth
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {"Netwok Change Error"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <Box ml={3} pb={3}>
              <Typography>
                Please switch to KOVAN {NetworkContextName}
              </Typography>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog> */}
      <Snackbar
        open={errpopup}
        autoHideDuration={5000}
        onClose={errhandleClose}
      >
        <Alert onClose={errhandleClose} severity="info">
          {errmsg}
        </Alert>
      </Snackbar>
      {/* <Snackbar
        open={errpopup1}
        autoHideDuration={5000}
        onClose={errhandleClose1}
      >
        <Alert onClose={errhandleClose} severity="info">
          {errmsg}
        </Alert>
      </Snackbar> */}
    </>
  );
}
