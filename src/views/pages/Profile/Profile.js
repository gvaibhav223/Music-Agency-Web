import React, { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  IconButton,
} from "@material-ui/core";
import { Button, makeStyles } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { FiEdit } from "react-icons/fi";
import ProfileCard from "src/component/ProfileCard";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { apiConfig } from "src/constants";
import axios from "axios";
import GiftsCard from "src/component/GiftsCard";
import { UserContext } from "src/context/User";
import { Link as RouterLink } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import NFTCard from "src/component/NFTCard";
import { Pagination } from "@material-ui/lab";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { FaCopy } from "react-icons/fa";

import {
  getContract,
  getWeb3Obj,
  getWeb3ContractObject,
  sortAddress,
  calculateTimeLeft,
} from "src/utils";
const useStyles = makeStyles((theme) => ({
  wallet: {
    minHeight: "50vh",
    background: "#000",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      minHeight: "50vh",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      minHeight: "50vh",
    },
  },

  iconSocial: {
    ontSize: "15px",
    color: "#999999",
    marginRight: "8px",
  },
  dataIcon: {
    fontSize: "18px",
    color: "#999999",
  },
  dataText: {
    fontSize: "15px",
    lineHeight: "20px",
    fontWeight: "600",
    paddingLeft: "0px",
    color: "#fff",
  },
  dataNumber: {
    float: "right",
    fontSize: "13px",
    lineHeight: "20px",
    fontWeight: "400",
    color: "#999999",
    marginBottom: 10,
  },
  walletSet: {
    padding: "0 15px 0 0",
    [theme.breakpoints.down("sm")]: {
      padding: "0 15px",
    },
  },
  sectionTitleHead: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    margin: "10px 0 ",
    padding: "0 0",
    width: "100%",
  },
  bannerimg: {
    overflow: "hidden",
    backgroundPosition: "center !important",
    backgroundSize: "100% !important",
    backgroundRepeat: " no-repeat !important",
    height: "360px",
    borderRadius: "10px",
    "@media(max-width:1010px)": {
      height: "300px",
      borderRadius: "15px",
    },
    "& img": {
      minHeight: "100%",
      minWidth: "100%",
      height: "auto",
      width: "auto",
    },
  },
}));
export default function Profile() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(1);
  const [tabview, setTabView] = useState("all");
  const { account, chainId } = useWeb3React();
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [profile, setProfile] = useState([]);
  const [bidList2, setBidList2] = useState([]);
  const [isLoadingOrders, setIsLoadingOrdersListed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user?.userData) {
      setIsLoadingOrdersListed(true);
      axios({
        method: "get",
        url: apiConfig.withoutOrderList,
        headers: {
          token: window.sessionStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (res?.data?.result?.docs) {
            setData(res?.data?.result?.docs);
          } else {
            setData([]);
          }

          setIsLoadingOrdersListed(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoadingOrdersListed(false);
        });
    }
  }, [user?.userData]);

  useEffect(() => {
    if (user?.userData) {
      setIsLoading(true);
      axios({
        method: "get",
        url: apiConfig.orderListParticular,
        headers: {
          token: window.sessionStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (res.data.result.docs) {
            setOrders(res.data.result.docs);
            setIsLoading(false);
          } else {
            setOrders([]);
            setIsLoading(false);
          }
          if (res?.data?.result?.docs?.length !== 0) {
            const result = res?.data?.result?.docs?.filter(
              (data) => data?.bidId?.length !== 0
            );
            console.log(result);
            setBidList2(result);
          }

          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [user?.userData]);

  useEffect(() => {
    if (user?.userData) {
      setProfile(user?.userData);
    }
  }, [user?.userData]);

  return (
    <Box className={classes.wallet}>
      <Box>
        <Box className="usersView m-b-0">
          <Box
            className={classes.bannerimg}
            style={{
              background:
                "url(" +
                `${
                  profile?.coverPic ? profile?.coverPic : "/images/userbg.jpg"
                }` +
                ")",
            }}
          ></Box>
          <Box className="editButton">
            <Link
              component={RouterLink}
              to="/edit-profile"
              title="Edit Profile"
            >
              <FiEdit
                style={{ fontSize: "22px", color: "#fff", marginRight: "10px" }}
              />
            </Link>
          </Box>
        </Box>
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
              <Container maxWidth="xs">
                <Box className="userPic bgCardcolor">
                  <figure>
                    {profile?.profilePic ? (
                      <img
                        // src={JSON.parse(profile?.profilePic)}
                        src={profile?.profilePic}
                        alt="error"
                        className="profile2"
                      />
                    ) : (
                      <img
                        // src={JSON.parse(profile?.profilePic)}
                        src={`https://avatars.dicebear.com/api/identicon/${account}.svg`}
                        alt="error"
                        className="profile2"
                      />
                    )}
                  </figure>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Typography
                      variant="h4"
                      className="SectionTitle m-b-5"
                      style={{ wordBreak: "break-word" }}
                    >
                      {profile.userName}{" "}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {account && (
                      <Typography> {sortAddress(account)}</Typography>
                    )}
                    <CopyToClipboard text={account}>
                      <IconButton style={{ fontSize: ".9rem" }}>
                        <FaCopy
                          style={{ color: "#fff" }}
                          onClick={() => toast.info("Copied")}
                        />
                      </IconButton>
                    </CopyToClipboard>
                  </Box>

                  {profile?.bio === undefined &&
                  profile?.mobileNumber === undefined &&
                  profile?.email === "" ? (
                    <Box className="p-t-20">
                      <Box style={{ paddingTop: "15px", textAlign: "center" }}>
                        <Button
                          variant="contained"
                          size="small"
                          color="secondary"
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          component={RouterLink}
                          to="/edit-profile"
                        >
                          Update Profile
                        </Button>
                      </Box>
                    </Box>
                  ) : (
                    <Box className="p-t-20">
                      <Box className="p-t-5 p-b-10">
                        <span className={classes.dataText}> Bio : </span>

                        {profile && (
                          <span
                            className={classes.dataNumber}
                            style={{ wordBreak: "break-all" }}
                          >
                            {" "}
                            {profile?.bio}{" "}
                          </span>
                        )}
                      </Box>

                      <Box className="p-t-5 p-b-10">
                        <span className={classes.dataText}>Mobile No. : </span>

                        {profile && (
                          <span className={classes.dataNumber}>
                            {" "}
                            {profile?.mobileNumber}
                          </span>
                        )}
                      </Box>

                      <Box className="p-t-5 p-b-10">
                        <span className={classes.dataText}>Email :</span>
                        <span className={classes.dataNumber}>
                          {profile?.email}{" "}
                        </span>
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box
                  style={{ marginTop: "1rem" }}
                  className={classes.btnActive}
                >
                  <Button
                    className={tabview === "all" ? "active" : ""}
                    onClick={() => setTabView("all")}
                  >
                    Orders Created
                  </Button>
                  <Button
                    className={tabview === "place" ? "active" : ""}
                    onClick={() => setTabView("place")}
                  >
                    Orders Placed
                  </Button>
                  <Button
                    className={tabview === "bid" ? "active" : ""}
                    onClick={() => setTabView("bid")}
                  >
                    Bid Auction
                  </Button>
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box mt={3} mb={2}>
        <Container fixed>
          <Grid container spacing={2}>
            {tabview === "all" ? (
              <Grid container>
                {data &&
                  data.map((data, i) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}
                        md={4}
                        key={data._id}
                        className="walletSet p-0"
                      >
                        <GiftsCard data={data} type="mynft" index={i} />
                      </Grid>
                    );
                  })}
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {!isLoadingOrders && data && data.length == 0 && (
                    <Typography
                      style={{ marginLeft: "14px", textAlign: "center" }}
                    >
                      No data found!
                    </Typography>
                  )}
                  {isLoadingOrders && (
                    <Box display="flex" alignItems="center">
                      <Typography style={{ marginLeft: "14px" }}>
                        Loading...
                      </Typography>
                      <ButtonCircularProgress />
                    </Box>
                  )}
                  <Box mt={2} display="flex" justifyContent="center">
                    {data && data.length >= 15 && (
                      <Pagination
                        count={noOfPages}
                        page={page}
                        onChange={(e, v) => setPage(v)}
                      />
                    )}
                  </Box>
                </Box>
              </Grid>
            ) : (
              ""
            )}

            {tabview === "place" ? (
              <>
                <Grid container spacing={2}>
                  {orders &&
                    orders.map((data, i) => {
                      return (
                        <Grid
                          item
                          xs={12}
                          md={4}
                          lg={3}
                          sm={6}
                          key={i}
                          className="walletSet p-0"
                          // className={classes.walletSet}
                        >
                          <NFTCard data={data} type="sold" index={i} />
                        </Grid>
                      );
                    })}
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    {!isLoading && orders && orders.length === 0 && (
                      <Typography
                        style={{ marginLeft: "14px", textAlign: "center" }}
                      >
                        No data found!
                      </Typography>
                    )}
                    {isLoading && (
                      <Box display="flex" alignItems="center">
                        <Typography style={{ marginLeft: "14px" }}>
                          Loading...
                        </Typography>
                        <ButtonCircularProgress />
                      </Box>
                    )}
                  </Box>
                </Grid>
                <Box mt={2} display="flex" justifyContent="center">
                  {orders && orders.length >= 15 && (
                    <Pagination
                      count={noOfPages}
                      page={page}
                      onChange={(e, v) => setPage(v)}
                    />
                  )}
                </Box>
              </>
            ) : (
              ""
            )}
            {tabview === "bid" ? (
              <Grid container spacing={2} style={{ display: "block" }}>
                <Grid container spacing={2}>
                  {bidList2 &&
                    bidList2.map((data, i) => {
                      return (
                        <Grid
                          item
                          xs={12}
                          md={4}
                          lg={3}
                          sm={6}
                          key={i}
                          className="walletSet p-0"
                        >
                          <NFTCard data={data} type="Bid-List" index={i} />
                        </Grid>
                      );
                    })}
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    {!isLoading && bidList2 && bidList2.length === 0 && (
                      <Typography
                        style={{ marginLeft: "14px", textAlign: "center" }}
                      >
                        No data found!
                      </Typography>
                    )}
                    {isLoading && (
                      <Box display="flex" alignItems="center">
                        <Typography style={{ marginLeft: "14px" }}>
                          Loading...
                        </Typography>
                        <ButtonCircularProgress />
                      </Box>
                    )}
                  </Box>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
