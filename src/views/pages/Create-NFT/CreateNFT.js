import React, { useState, useContext } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  TextField,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { toast } from "react-toastify";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import { DropzoneArea } from "material-ui-dropzone";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiConfig } from "src/constants/index";
import { useWeb3React } from "@web3-react/core";
import { NFTTokenABI } from "src/ABI/NFTTokenABI.js";
import {
  NftTokenAddress as NFTAddress,
  MarketPlaceAddress,
  marketplaceether,
} from "src/constants/index";
import { getContract } from "src/utils";
import { addImageHandler } from "src/utils";
import { marketPlaceABI } from "src/ABI/MarketPlaceABI";
import moment from "moment";
import { ethers } from "ethers";
import { DateRange } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import { DateTimePicker } from "@material-ui/pickers";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { UserContext } from "src/context/User";

const useStyles = makeStyles((theme) => ({
  NftBreed: {
    background: "#000",
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(10),
  },
  innerCollection: {
    position: "absolute",
    width: "calc(100% - 40px)",
    bottom: "0px",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "20px 20px 0 0",
    padding: "20px",
    background: "#1a1919",
  },
  selectOption: {
    width: "300px",
    display: "flex",
    justifyContent: "space-around",

    flexDirection: "row",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
    margin: "0 10px",
  },
  sectionTitleHead: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    margin: "10px 0 ",
    padding: "0 0",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  title: {
    borderBottom: "1px solid #eaeaea",
  },

  createIcon: {
    width: 100,
    height: 100,
    color: "#fff",
  },
  walletSet: {
    padding: "0 15px 0 0",
  },
  lastBox: {
    display: "flex",
  },
  dateField: {
    position: "relative",
  },
  calendarIcon: {
    position: "absolute",
    top: 32,
    right: 10,
    cursor: "pointer",
  },
  icon: {
    color: "red",
  },
  MuiDropzoneArea: {
    position: "relative",
    "& .MuiDropzoneArea-root": {
      "& .MuiDropzonePreviewList-image": {
        position: "absolute",
        right: "30px",
        bottom: "30px",
      },
    },
  },
  errorMSg: {
    "& p": {
      marginLeft: "0px !important",
    },
  },
}));

export default function CreateNFT() {
  const user = useContext(UserContext);
  console.log("user----", user);
  const classes = useStyles();
  const { account, library } = useWeb3React();
  const [toggle, setToggle] = React.useState(false);
  const history = useHistory();
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("create");
  const [image, setImage] = React.useState("");
  const [ipfsImage, setIpfsImage] = useState();
  const [expiryDate, setExpiryDate] = useState(moment().add(1, "h"));
  const audioTyp = ipfsImage?.type.includes("audio/mpeg");

  const toggleSwitch = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const getTokenId = async () => {
    try {
      const tokenIDContract = getContract(
        NFTAddress,
        NFTTokenABI,
        library,
        account
      );
      const tokenID = await tokenIDContract.totalSupply();
      return (Number(tokenID) - 1).toString();
    } catch (error) {
      console.log("errr", error);
      return false;
    }
  };
  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (err) {
      console.log("Error: ", err);
    };
  };

  const submitHandler = async (values) => {
    const checkPrice = toggle ? Number(values.price) > 0 : true;

    setIsSubmit(true);
    if (ipfsImage != "" && image != "" && checkPrice) {
      setText("Pending");
      setLoading(true);

      await addImageHandler(ipfsImage)
        .then(async (res) => {
          let ImageHash = res;

          let fileExtention = ipfsImage.name.split(".").pop();

          let fileType =
            fileExtention == "mp4" || fileExtention == "webp"
              ? "video"
              : fileExtention == "mp3"
                ? "audio"
                : "image";

          setText("Creating NFT");
          const bodyFormData = new FormData();
          bodyFormData.append("tokenName", values.name);
          bodyFormData.append("description", values.comments);
          bodyFormData.append("ipfsHash", ImageHash);

          await axios({
            method: "post",
            url: apiConfig.uploadNFT,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(async (response) => {
              const contractObj = getContract(
                NFTAddress,
                NFTTokenABI,
                library,
                account
              );
              const result = await contractObj.create(
                response.data.result.ipfsHash,
                response.data.result.name
              );
              await result.wait();
              const tokenId = await getTokenId();
              setText("Adding NFT");
              //add NFT--------------------------
              const formData = {
                tokenId: tokenId,
                tokenName: values.name,
                uri: ImageHash,
                thumbNails: image,
                mimetype: fileType,
                description: values.comments,
                contractAddress: NFTAddress,
              };
              await axios({
                method: "post",
                url: apiConfig.addNFT,
                data: formData,
                headers: {
                  token: window.sessionStorage.getItem("token"),
                },
              })
                .then(async (res) => {
                  if (res.data.response_code === 200) {
                    // Create ORDER
                    if (toggle === true) {
                      const nftID = res.data.result._id;
                      setText("Approving Token");
                      const NFTApprovalID = await contractObj.approve(
                        MarketPlaceAddress,
                        tokenId
                      );

                      await NFTApprovalID.wait();

                      const createObj = getContract(
                        MarketPlaceAddress,
                        marketPlaceABI,
                        library,
                        account
                      );

                      const marketPlace = await createObj.createOrder(
                        NFTAddress,
                        tokenId,
                        ethers.utils
                          .parseEther(values.price.toString())
                          .toString(),
                        moment(expiryDate).unix(),
                        marketplaceether
                      );
                      await marketPlace.wait();

                      //Place Order NFT---------------------------------
                      setText("Placing Order");
                      const formDataOrder = {
                        nftId: nftID,
                        description: values.comments,
                        currentOwner: account,
                        price: values.price,
                        expiryTime: expiryDate,
                      };
                      await axios({
                        method: "post",
                        url: apiConfig.placeOrder,
                        data: formDataOrder,
                        headers: {
                          token: window.sessionStorage.getItem("token"),
                        },
                      })
                        .then((res) => {
                          if (res.data.response_code === 200) {
                            toast.success(res.data.response_message);
                            history.push("/profile");
                          } else {
                            toast.error(res.data.response_message);
                          }
                        })
                        .catch((error) => {
                          setLoading(false);
                          toast.error(error.message);
                        });
                    } else {
                      toast.success(res.data.response_message);
                      history.push("/profile");
                    }
                  } else {
                    toast.error(res.data.response_message);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  setLoading(false);
                  toast.error(error.message);
                });
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
              toast.error(error.message);
            });
          setLoading(false);
          setText("Create");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          toast.error("Something went wrong...");
        });
    }
  };

  return (
    <Box className={classes.NftBreed}>
      {" "}
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={2} className="sectionHeading">
            <Grid item xs={12}>
              <Box>
                <Typography variant="h2">Create new item</Typography>

                <Typography variant="body2">
                  File types supported: MP3, size: 40 MB
                </Typography>
                <Typography variant="h5" className="text-white">
                  You can only Select one of these i.e Audio or Image at same
                  Time
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* featured */}
      <Box mt={4} mb={2}>
        <Container maxWidth="lg">
          <Box>
            <Grid container spacing={2} className="">
              <Grid item xs={12} sm={12} md={12}>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  className={classes.MuiDropzoneArea}
                >
                  <Typography variant="body2">
                    File types supported: JPG, PNG, GIF, SVG. Max size: 40 MB
                  </Typography>
                  <Box style={{ marginTop: "7px" }}>
                    <DropzoneArea
                      disabled={loading}
                      maxFileSize="40000000"
                      filesLimit="1"
                      style={{ marginTop: "-78px", marginLeft: "20px" }}
                      acceptedFiles={["image/*"]}
                      onDrop={(files) =>
                        getBase64(files[0], (result) => {
                          setImage(result);
                        })
                      }
                      dropzoneText="Add Thumbnail Here"
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  className={classes.MuiDropzoneArea}
                >
                  <Typography variant="body2">
                    File types supported: MP3 Max size: 40 MB
                  </Typography>
                  {/* {audioTyp ? (
                    <audio controls>
                      <source src={ipfsImage} type="audio/mpeg" />
                    </audio>
                  ) : (
                    <DropzoneArea
                      acceptedFiles={[".mp3"]}
                      maxFileSize="40000000"
                      disabled={loading}
                      onDrop={(files) => {
                        if (files[0]) {
                          setIpfsImage(files[0]);
                        } else {
                          setIpfsImage();
                          sessionStorage.removeItem("ImageHash");
                        }
                      }}
                      dropzoneText="Add Music File Here"
                    />
                  )} */}
                  <Box style={{ marginTop: "7px" }}>
                    <DropzoneArea
                      acceptedFiles={[".mp3"]}
                      maxFileSize="40000000"
                      filesLimit="1"
                      disabled={loading}
                      onDrop={(files) => {
                        if (files[0]) {
                          setIpfsImage(files[0]);
                        } else {
                          setIpfsImage();
                          sessionStorage.removeItem("ImageHash");
                        }
                      }}
                      dropzoneText="Add Music File Here"
                    />
                  </Box>
                </Grid>
                <Box mt={4}>
                  <Formik
                    initialValues={{
                      email: "",
                      name: "",
                      comments: "",
                      price: "",
                      externalLink: "",
                    }}
                    validationSchema={Yup.object().shape({
                      name: Yup.string().max(255).required("Name is required"),
                      externalLink: Yup.string().matches(
                        /((http|https):\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
                        "External Link not correct"
                      ),
                      comments: Yup.string()
                        .max(500)
                        .required("Comment is required"),
                    })}
                    onSubmit={async (values) => {
                      submitHandler(values);
                    }}
                  >
                    {({
                      errors,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      touched,
                      values,
                    }) => (
                      <form
                        noValidate
                        className="formBox p-0"
                        autoComplete="off"
                        onSubmit={handleSubmit}
                      >
                        <Grid container spacing={2} className="BreedDetails">
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <Box mt={2}>
                              <label>Name :</label>
                              <TextField
                                error={Boolean(touched.name && errors.name)}
                                fullWidth
                                name="name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                variant="outlined"
                                className={classes.textField}
                                inputProps={{
                                  readOnly: loading,
                                }}
                              />
                              <FormHelperText error style={{ marginLeft: "0" }}>
                                {touched.name && errors.name}
                              </FormHelperText>
                            </Box>
                            {/* <Box mt={2}>
                              <label>External Link :</label>
                              <small>
                                Liberty will include a link to this URL on this
                                item's detail page, so that users can click to
                                learn more about it. You are welcome to link to
                                your own webpage with more details.
                              </small>
                              <TextField
                                error={Boolean(
                                  touched.externalLink && errors.externalLink
                                )}
                                fullWidth
                                helperText={
                                  touched.externalLink && errors.externalLink
                                }
                                name="externalLink"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.externalLink}
                                variant="outlined"
                                className={classes.textField}
                                inputProps={{
                                  readOnly: loading,
                                }}
                              />
                            </Box> */}
                            <Box mt={2}>
                              <label>Comments :</label>
                              <small>
                                The description will be included on the item's
                                detail page underneath its image. Markdown
                                syntax is supported.
                              </small>
                              <TextField
                                error={Boolean(
                                  touched.comments && errors.comments
                                )}
                                fullWidth
                                name="comments"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.comments}
                                variant="outlined"
                                className={classes.textField}
                                multiline
                                rows={4}
                                rowsMax={4}
                                inputProps={{
                                  readOnly: loading,
                                }}
                              />
                              <FormHelperText
                                error
                                style={{
                                  marginLeft: "0",
                                }}
                              >
                                {touched.comments && errors.comments}
                              </FormHelperText>
                            </Box>

                            <Box mt={2}>
                              <label>Put on sale :</label>
                              <br />
                              <label>NO</label>{" "}
                              <Switch
                                checked={toggle}
                                ml={2}
                                className={classes.toggleSet}
                                onClick={toggleSwitch}
                                disabled={loading}
                              />{" "}
                              <label>YES</label>
                            </Box>

                            {toggle && (
                              <Box
                                mt={1}
                                component="div"
                                className={classes.lastBox}
                              >
                                <Box mr={2}>
                                  <label>Price :</label>
                                  <br />
                                  <TextField
                                    onBlur={handleBlur}
                                    type="number"
                                    onChange={handleChange}
                                    value={values.price}
                                    name="price"
                                    className={classes.textField}
                                    variant="outlined"
                                    inputProps={{
                                      readOnly: loading,
                                    }}
                                  />
                                  {isSubmit && Number(values.price) <= 0 && (
                                    <FormHelperText error>
                                      Please enter valid price
                                    </FormHelperText>
                                  )}
                                </Box>
                                <Box
                                  component="div"
                                  className={`${classes.dateField}, customclx`}
                                >
                                  <label>Expiry Date :</label>
                                  <br />
                                  <DateTimePicker
                                    fullWidth="md"
                                    maxWidth="md"
                                    inputVariant="outlined"
                                    value={expiryDate}
                                    onChange={(date) => {
                                      setExpiryDate(date);
                                    }}
                                    format="DD/MM/yyyy hh:mm A"
                                    minDate={moment()}
                                    disabled={loading}
                                  />
                                  {isSubmit &&
                                    moment(expiryDate).unix() <=
                                    moment().unix() && (
                                      <FormHelperText
                                        error
                                        style={{
                                          marginLeft: "0px",
                                        }}
                                      >
                                        Please select valid date
                                      </FormHelperText>
                                    )}
                                </Box>
                              </Box>
                            )}
                          </FormControl>
                          <Grid item xs={12} sm={12} md={12}>
                            <Box className="m-t-30 ">
                              {/* {user?.userData?.email == "" ? (
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  size="large"
                                  disabled={loading}
                                  onClick={() =>
                                    toast.warn("Update your profile first")
                                  }
                                  style={
                                    loading
                                      ? {
                                          backgroundColor: "#1a1919",
                                          color: "white",
                                        }
                                      : {}
                                  }
                                >
                                  Create
                                </Button>
                              ) : (
                                
                              )} */}
                              {user?.userData?.email === "" || user?.userData?.email === undefined ? (
                                <Button variant="contained"
                                  color="secondary"
                                  size="large" onClick={() => history.push("/edit-profile")} >Update Profile</Button>

                              ) : (
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  size="large"
                                  type="submit"
                                  disabled={loading}
                                  style={
                                    loading
                                      ? {
                                        backgroundColor: "#1a1919",
                                        color: "white",
                                      }
                                      : {}
                                  }
                                >
                                  {text} {loading && <ButtonCircularProgress />}
                                </Button>
                              )}

                              {loading && (
                                <FormHelperText error>
                                  <i>
                                    <b>
                                      Please do not refresh the page till the
                                      process completes.
                                    </b>
                                  </i>
                                </FormHelperText>
                              )}
                            </Box>
                          </Grid>
                        </Grid>
                      </form>
                    )}
                  </Formik>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box mt={4} style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5" className="text-white">
              <span style={{ fontSize: "24px" }}>Disclaimer : </span> We do not
              own your private keys and cannot access your funds without your
              confirmation.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
