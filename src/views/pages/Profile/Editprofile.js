import React, { useState, useContext, useEffect } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  TextField,
  Table,
  Link,
  Icon,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Button,
  Radio,
  FormHelperText,
} from "@material-ui/core";
import {} from "react-feather";
import { DropzoneArea } from "material-ui-dropzone";
import { useHistory } from "react-router-dom";
import { UserContext } from "src/context/User";
import { useWeb3React } from "@web3-react/core";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { addImageHandler } from "src/utils";
import axios from "axios";
import { apiConfig } from "src/constants/index";
import { Form, Formik } from "formik";
import * as yep from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const useStyles = makeStyles((theme) => ({
  NewBreed: {
    background: "#000",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(15),
      paddingBottom: theme.spacing(8),
    },
  },
  BreedSpace: {
    textAlign: "center",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  sliderCompo: {
    width: "800px",
    maxWidth: "80%",
    margin: "0 auto",
    background: "#f5f5f5",
    padding: "20px 49px",
    marginBottom: "25px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      background: "transparent",
    },
  },
  NftImg: {
    borderRadius: 5,
    boxShadow: "-12px -12px 20px 0px #fff, 12px 12px 20px 0px #d1d9e6",
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
    maxWidth: "100%",
    marginRight: "20px",
  },
  largeIcon: {
    width: 18,
    height: 18,
    marginRight: "8px",
  },
  input: {
    display: "none",
  },
  formControl: { width: "100%", minWidth: "100%" },
}));

export default function CreateCollection() {
  const classes = useStyles();
  const history = useHistory();
  const user = useContext(UserContext);

  const [isUpdating, setIsUpdating] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState();

  const [profileImage64, setProfileImage64] = useState(
    user?.userData?.profilePic ? user?.userData?.profilePic : ""
  );
  const [coverImage64, setCoverImage64] = useState(
    user?.userData?.coverPic ? user?.userData?.coverPic : ""
  );

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
  const formValidationSchema = yep.object().shape({
    userName: yep
      .string("Enter valid user name")
      .required("User name is required  ")
      .strict(true)
      .nullable()
      .trim("Space is not allowed")
      .min(4, "Your username should be atleast 4 characters long")
      .max(30, "Your username should not be more than 30 characters")
      .matches(
        /^[a-zA-Z\s]*$/,
        "Only alphabets are allowed for this field whitespaces are not. "
      ),

    bio: yep
      .string("Enter valid bio")
      .required("Bio is required  ")
      .strict(true)
      .nullable()
      .trim()
      .min(10, "Your bio should be atleast 10 characters long")
      .max(300, "Your bio should not be more than 300 characters"),
    email: yep
      .string()
      .email("You have entered an invalid email address. Please try again")
      .required("Email address is required")
      .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
  });

  return (
    <>
      <Box className={classes.NewBreed}>
        {" "}
        <Box>
          <Container fixed>
            <Grid container spacing={2} className="sectionHeading">
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h2" className="text-black">
                    Edit Profile
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* featured */}
        <Box mt={3} mb={2}>
          <Container fixed>
            <Box mt={4}>
              {user?.userData && (
                <Formik
                  initialValues={{
                    userName: user?.userData?.userName
                      ? user?.userData?.userName
                      : "",

                    profilePic: user?.userData?.profilePic
                      ? user?.userData?.profilePic
                      : "",
                    bio: user?.userData?.bio ? user?.userData?.bio : "",
                    email: user?.userData?.email ? user?.userData?.email : "",
                    mobileNumber: user?.userData?.mobileNumber
                      ? user?.userData?.mobileNumber
                      : phone,
                  }}
                  initialStatus={{
                    success: false,
                    successMsg: "",
                  }}
                  validationSchema={formValidationSchema}
                  onSubmit={async ({
                    userName,
                    email,
                    mobileNumber,
                    bio,
                    profilePic,
                  }) => {
                    try {
                      setIsUpdating(true);
                      const res = await axios({
                        method: "PUT",
                        url: apiConfig.editProfile,
                        headers: {
                          token: window.sessionStorage.getItem("token"),
                        },
                        data: {
                          userName: userName,
                          email: email,
                          mobileNumber: mobileNumber?.toString(),
                          bio: bio,
                          profilePic: profileImage64,
                          coverPic: coverImage64,
                        },
                      });
                      if (res) {
                        user.getUserProfile();
                        history.push("/profile");
                        setIsUpdating(false);
                      }
                    } catch (error) {
                      console.log(error);
                      setIsUpdating(false);
                    }
                  }}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    touched,
                    values,
                    setFieldValue,
                  }) => (
                    <Form>
                      <Grid container spacing={2} className="BreedDetails">
                        <Grid item xs={12} sm={12} md={12}></Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Grid container spacing={0} className="BreedDetails">
                            <label>Name :</label>

                            <TextField
                              variant="outlined"
                              fullWidth
                              name="userName"
                              value={values.userName}
                              className={classes.textField}
                              error={Boolean(
                                touched.userName && errors.userName
                              )}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <FormHelperText
                              error
                              style={{ paddingBottom: "15px" }}
                            >
                              {touched.userName && errors.userName}
                            </FormHelperText>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Grid container spacing={0} className="BreedDetails">
                            <label>Email ID :</label>

                            <TextField
                              variant="outlined"
                              fullWidth
                              name="email"
                              value={values.email}
                              className={classes.textField}
                              error={Boolean(touched.email && errors.email)}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <FormHelperText error>
                              {touched.email && errors.email}
                            </FormHelperText>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                          <Grid container spacing={0} className="BreedDetails">
                            <label>Bio :</label>

                            <TextField
                              variant="outlined"
                              fullWidth
                              name="bio"
                              value={values.bio}
                              error={Boolean(touched.bio && errors.bio)}
                              onBlur={handleBlur}
                              multiline
                              rows={3}
                              onChange={handleChange}
                              className={classes.textField}
                            />
                            <FormHelperText error>
                              {touched.bio && errors.bio}
                            </FormHelperText>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Grid container spacing={0} className="BreedDetails">
                            <label>Mobile :</label>

                            <PhoneInput
                              country={"us"}
                              name="mobileNumber"
                              inputStyle={{
                                background: "transparent",
                                width: "100%",
                                color: "#fff",
                                border: "1px solid gray",
                              }}
                              value={values.mobileNumber}
                              error={Boolean(
                                touched.mobileNumber && errors.mobileNumber
                              )}
                              onBlur={handleBlur}
                              onChange={(phone, e) => {
                                setCountryCode(e.dialCode);
                                setFieldValue("mobileNumber", phone);
                              }}
                            />
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                          <Box>
                            <label>Upload Your Avatar :</label>
                          </Box>
                          <Box style={{ marginTop: "10px" }}>
                            <DropzoneArea
                              style={{ marginTop: ".8rem" }}
                              filesLimit="1"
                              onDrop={(files) =>
                                getBase64(files[0], (result) => {
                                  setProfileImage64(result);
                                })
                              }
                              initialFiles={[profileImage64]}
                              dropzoneText="Drop your Profile Pic Here"
                            />
                          </Box>
                          <Box style={{ marginTop: "10px" }}>
                            <DropzoneArea
                              style={{ marginTop: ".8rem" }}
                              filesLimit="1"
                              onDrop={(files) =>
                                getBase64(files[0], (result) => {
                                  setCoverImage64(result);
                                })
                              }
                              initialFiles={[coverImage64]}
                              dropzoneText="Drop your Cover Pic Here"
                            />
                          </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                          <Box className="m-t-30 text-center">
                            <Button
                              variant="contained"
                              color="secondary"
                              size="large"
                              onClick={() => history.push("/profile")}
                              disabled={isUpdating}
                            >
                              Back
                            </Button>
                            <Button
                              variant="contained"
                              color="secondary"
                              size="large"
                              type="submit"
                              disabled={isUpdating}
                            >
                              Update {isUpdating && <ButtonCircularProgress />}
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              )}
            </Box>
          </Container>
        </Box>
      </Box>
      <Box></Box>
    </>
  );
}
