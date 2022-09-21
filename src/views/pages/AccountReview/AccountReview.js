import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  TextField,
  RadioGroup,
  FormControlLabel, Select, MenuItem, FormControl, InputLabel, TextareaAutosize, Button,
  Radio,
} from "@material-ui/core";
import {} from "react-feather";

const useStyles = makeStyles((theme) => ({
  NewBreed: {
    background: "#000",
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(10),
   
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
  formControl:{width:"150px",minWidth:"145px",
marginRight:"10px",},
textField:{
    
}
}));

export default function AccountReview() {
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
                  <Typography variant="h2" >
                    Account Review Application
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
              <form className="formBox bgCardcolor" autoComplete="off" >
                

                <Grid container spacing={2} className="BreedDetails text-white" >
                  <Grid item xs={12} sm={12} md={12}></Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>Your full name :</label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>Your Email Address :</label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                 
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>Your Phone :</label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} className="d-flex">
                      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Country Code</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
        
          label="Country Code"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>IND +91</MenuItem>
          <MenuItem value={20}>AUS +12</MenuItem>
          <MenuItem value={30}>UK +124</MenuItem>
        </Select>
      </FormControl>
                        <TextField
                          variant="outlined"
                          fullWidth
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>Company name :</label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>Address 1 :</label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>Address 2 :</label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>Zip Code:</label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>City :</label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>Country Select :</label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="h6" className="headingForm">
                  {" "}
                  Level Applied
                </Typography>
                </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>Artist / Editor :</label>
                      </Grid>
                      
                      <Grid item xs={6} sm={3}><RadioGroup row >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio color='primary'/>} label="No" />
      
      </RadioGroup></Grid>
      <Grid item xs={6} sm={3}> <Typography>[ for Verified Label ]</Typography></Grid>
                    </Grid>
                  </Grid>
                 
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>Business / Corporate :</label>
                      </Grid>
                      <Grid item xs={6} sm={3}><RadioGroup row >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio color='primary'/>} label="No" />
      
      </RadioGroup></Grid>
      <Grid item xs={6} sm={3}> <Typography>[ To create Gift Voucher & Discount Coupons ]</Typography></Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>Non - Profit  :</label>
                      </Grid>
                      <Grid item xs={6} sm={3}><RadioGroup row >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio color='primary'/>} label="No" />
      
      </RadioGroup></Grid>
      <Grid item xs={6} sm={3}> <Typography>[ To Create Fundraising NFT ]]</Typography></Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="BreedDetails">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>
                          Comments : 
                        </label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <FormControl className="width100">
                      <TextareaAutosize rows={4} aria-label="empty textarea" placeholder=""  className="width100"  style={{backgroundColor:'transparent',color:'#fff'}}/>
                      </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container spacing={0} className="m-t-30">
                      <Grid item xs={12} sm={6} md={4}>
                        <label>
             
                        </label>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                      <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                   
                  >
                    Submit
                  </Button>
                      </Grid>
                    </Grid>
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
