import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@material-ui/core";
import {} from "react-feather";
import { DropzoneArea } from "material-ui-dropzone";

const useStyles = makeStyles((theme) => ({
  NewBreed: {
    background: '#000',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(8),
    },
    [theme.breakpoints.up('md')]: {
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

export default function CreateSingle() {
  const classes = useStyles();
 

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
                    Create single collectible
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* featured */}
        <Box mt={5} mb={2}>
          <Container fixed>
            <Box mt={4}>
              <form className="formBox" autoComplete="off">
                <Grid container spacing={2} className="BreedDetails">
                  <Grid item xs={12} sm={12} md={12}></Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Grid container spacing={0} className="BreedDetails">
                      <label>NFT Category :</label>
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Gift Card</MenuItem>
                          <MenuItem value={20}>Gift Voucher</MenuItem>
                          <MenuItem value={30}>Discount Coupon</MenuItem>
                          <MenuItem value="collectible">collectible</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Grid container spacing={0} className="BreedDetails">
                      <label>Collection Name :</label>

                      <TextField
                        variant="outlined"
                        fullWidth
                        className={classes.textField}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <label>Comments :</label>

                      <TextField
                        variant="outlined"
                        fullWidth
                        className={classes.textField}
                        multiline
                        rows={4}
                        rowsMax={4}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <label>Collection Image :</label>
                    <DropzoneArea
                      onChange={(files) => console.log("Files:", files)}
                      dropzoneText="Drag & Drop files Here"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Box className="m-t-30 text-center">
                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        href="/collection"
                        
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box></Box>
    </>
  );
}
