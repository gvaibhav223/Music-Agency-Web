import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography, makeStyles, TextField, Table, Link, RadioGroup, FormControlLabel, Radio
} from "@material-ui/core";
import Slider from '@material-ui/core/Slider';


import {} from "react-feather";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";

import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
const marks = [
  {
    value: 0,
    label: 'This specific serial',
  },
  
  {
    value: 50,
    label: 'A specific amount from the available NFT',
  },
  {
    value: 100,
    label: 'All Available NFT',
  },
];
function valuetext(value) {
  return `${value}°C`;
}
const columns = [
  { id: "beginDate", label: "Begin Date",  align: "left" },
  { id: "endDate", label: "End Date",  align: "left" },
  { id: "clickSpend", label: "Click Spend",  align: "left" },
  { id: "dailySpend", label: "Daily spend",  align: "left" },
  { id: "totalSpend", label: "Total Spend", align: "left" },
  { id: "paymentDates", label: "Payment Dates",  align: "left" },
];

function createData(beginDate, endDate, clickSpend, dailySpend,totalSpend, paymentDates ) {
  return { beginDate, endDate, clickSpend, dailySpend, totalSpend, paymentDates };
}

let tabelData = [
  {
    beginDate: "18 July, 2020",
    endDate: "25 July, 2020",
    clickSpend: "$ 20.22",
    dailySpend: "$ 20.47",
    totalSpend: "$ 20.47",
    paymentDates: "25 July, 2020",
  },
  {
    beginDate: "18 July, 2020",
    endDate: "25 July, 2020",
    clickSpend: "$ 20.22",
    dailySpend: "$ 20.47",
    totalSpend: "$ 20.47",
    paymentDates: "25 July, 2020",
  },
  {
    beginDate: "18 July, 2020",
    endDate: "25 July, 2020",
    clickSpend: "$ 20.22",
    dailySpend: "$ 20.47",
    totalSpend: "$ 20.47",
    paymentDates: "25 July, 2020",
  },
  {
    beginDate: "18 July, 2020",
    endDate: "25 July, 2020",
    clickSpend: "$ 20.22",
    dailySpend: "$ 20.47",
    totalSpend: "$ 20.47",
    paymentDates: "25 July, 2020",
  },
 
];
const rows = [
  createData("1", "an hour ago", "$20.47", " 0x6A3....d1   -->   0x4A3....e9"),
  createData("1", "2 hour ago", "$20.47", " 0x6A3....d1   -->   0x4A3....e9"),
  createData("1", "an hour ago", "$20.47", " 0x6A3....d1   -->   0x4A3....e9"),
  createData("1", "an hour ago", "$20.47", " 0x6A3....d1   -->   0x4A3....e9"),
  createData("1", "an hour ago", "$20.47", " 0x6A3....d1   -->   0x4A3....e9"),
  createData("1", "an hour ago", "$20.47", " 0x6A3....d1   -->   0x4A3....e9"),
];

const useStyles = makeStyles((theme) => ({
  NewBreed: {
    background: "#000",
      paddingTop: theme.spacing(18),
      paddingBottom: theme.spacing(10),
     
    },
    BreedSpace:{
      textAlign:"center",
      display:"flex",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      [theme.breakpoints.down("sm")]: {
        display:"block",
      
      },
    },
    sliderCompo:{
      width:"800px",
      maxWidth:"80%",
      margin:"0 auto",
      background: "#f5f5f5",
      padding: "20px 49px",
      marginBottom:"25px",
      [theme.breakpoints.down("sm")]: {
        padding: 0,
        background: "transparent",
      
      },
    },
    NftImg: {
      borderRadius: 5,
     
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(1),
        maxWidth:"100%",
        marginRight:"20px",
       
      },
      largeIcon: {
        width: 18,
        height: 18,
        marginRight: "8px",
      },
      input:{
        display:"none",
      }
}));


export default function ManageNFT() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [value, setValue] = React.useState('Yes');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
    
      <Box
        className={classes.NewBreed}
      
      > <Box>
         <Container >
            <Grid container spacing={2} className="sectionHeading">
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h2" >
                  Manage NFT
                  </Typography>
                 
                </Box>
              </Grid>
            </Grid>
          </Container>
        <Container fixed>
       
          <Grid container spacing={2} className="sectionHeading">
            <Grid item xs={12} >
              <Box className={classes.BreedSpace}>
              <img src="https://source.unsplash.com/user/erondu/400x250" className={classes.NftImg}  alt=" "/>
              <Box className="manageHeader">
              <Typography variant="h4" className='text-white'>
                 Augumanted Reality
                  </Typography>
                  <Typography
              variant="h6"
              className="NftName m-b-5 m-t-10"
              
            >
             
             Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendumLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum.
  
              </Typography>
              <Box className="headerData">
              <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={4}  className="posrel">
              
           
           <Box className="dataListing">
           <Typography
              variant="h6"
            > Serial: </Typography>
            <Typography
              variant="h4"
            ><strong> #23421</strong></Typography>
            <Link className="dataBtn">
            Unlock
            </Link>
           </Box>
              </Grid>
            <Grid item xs={12} sm={6} md={4} className="posrel">
            
           <Box className="dataListing">
            <Typography
              variant="h6"
            > Total Supply: </Typography>
            <Typography
              variant="h4"
            ><strong> 343421</strong></Typography>
            <Link className="dataBtn">
            Reedeem
            </Link>   </Box>
              </Grid>
            <Grid item xs={12} sm={6} md={4} className="posrel">
        
            
           <Box className="dataListing">
            <Typography
              variant="h6"
            > Available: </Typography>
            <Typography
              variant="h4"
            ><strong> 3421</strong></Typography>
            <Link className="dataBtn">
            Transfer
            </Link>
            </Box>
              </Grid>
              </Grid>
              </Box>
              </Box>
             
              </Box>
              
                 
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* featured */}
      <Box mt={5} mb={2}>
        <Container fixed>
          
           <Box mt={4}>
           <form className="formBox"  autoComplete="off">
           <Typography
              variant="h6"
              className="headingForm"
            >   Buy Now Settings </Typography>
         
           <Grid container spacing={2} className="BreedDetails">
           
           <Grid item xs={12} sm={12} md={12}>
           <div className={classes.sliderCompo}>
      <Typography id="discrete-slider-custom" gutterBottom  className="text-center">
      Limit the sale to 
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={3}
        valueLabelDisplay="auto"
        marks={marks}
        className='text-main'
      />
    </div>
       

           
       </Grid>
           <Grid item xs={12} sm={12} md={12}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Sale :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
             <RadioGroup aria-label="sale" name="sale" >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio color='primary'/>} label="No" />
      
      </RadioGroup>
       </Grid>
       </Grid>
       </Grid>
           <Grid item xs={12} sm={12} md={12}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Selling Price :</label>
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
             <label>Accept offer :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
             <RadioGroup aria-label="sale" name="sale" >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio color='primary'/>} label="No" />
      
      </RadioGroup>
       </Grid>
       </Grid>
       </Grid>
           <Grid item xs={12} sm={12} md={12}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Offer Reserve Price :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
              <TextField
              type="text"
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
             <label>Auto Accept all offer above Reserve Price :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
             <RadioGroup aria-label="sale" name="sale" >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio color='primary'/>} label="No" />
      
      </RadioGroup>
       </Grid>
       </Grid>
       </Grid>
          
         
    
  
      
        </Grid>
</form>
          
           </Box>
           <Box mt={4}>
           <form className="formBox"  autoComplete="off">
           <Typography
              variant="h6"
              className="headingForm"
            >   Auction Settings </Typography>
             <Grid container spacing={2} className="BreedDetails">
           
           <Grid item xs={12} sm={12} md={12}>
           <div className={classes.sliderCompo}>
      <Typography id="discrete-slider-custom" gutterBottom  className="text-center">
      Limit the sale to 
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={3}
        valueLabelDisplay="auto"
        marks={marks}
        style={{color:"#1ed760"}}
      />
    </div>
       

           
       </Grid>
           <Grid item xs={12} sm={12} md={12}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Auction :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
             <RadioGroup aria-label="sale" name="sale" >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio color='primary' />} label="No" />
      
      </RadioGroup>
       </Grid>
       </Grid>
       </Grid>
           <Grid item xs={12} sm={12} md={12}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Reserve Price :</label>
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
             <label>Accept Buy Now Simultaneously :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
             <RadioGroup aria-label="sale" name="sale" >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio color='primary'/>} label="No" />
      
      </RadioGroup>
       </Grid>
       </Grid>
       </Grid>
       <Grid item xs={12} sm={12} md={12}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>At Auction end Auto accept all bid above reserve price :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
             <RadioGroup aria-label="sale" name="sale" >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio color='primary'/>} label="No" />
      
      </RadioGroup>
       </Grid>
       </Grid>
       </Grid>
           <Grid item xs={12} sm={12} md={12}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Begin Date :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
              <TextField
              type="text"
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
             <label>Begin Time :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
              <TextField
              type="text"
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
             <label>Begin Duration :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
              <TextField
              type="text"
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
       </Grid>
</form>
          
           </Box>
           <Box mt={4}>
           <form className="formBox"  autoComplete="off">
           <Typography
              variant="h6"
              className="headingForm"
            >   Promotion Settings </Typography>
         
           <Grid container spacing={2} className="BreedDetails">
           <Grid item xs={12} sm={6} md={6}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Start Date : </label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
              <TextField
              type="date"
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
           <Grid item xs={12} sm={6} md={6}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>End Date :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
              <TextField
              type="date"
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
           <Grid item xs={12} sm={6} md={6}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Amount per click :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
              <TextField
              type="text"
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
           <Grid item xs={12} sm={6} md={6}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Daily Budget :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
              <TextField
              type="text"
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
           <Grid item xs={12} sm={6} md={6}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Total Budget :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
             <label>$ 2124515</label>
       </Grid>
       </Grid>
       </Grid>
       <Grid item xs={12} sm={6} md={6}></Grid>
       <Grid item xs={12} sm={6} md={6}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Current click count    :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
             <strong><label>$ 2124515</label></strong>
       </Grid>
       </Grid>
       </Grid>
       <Grid item xs={12} sm={6} md={6}></Grid>
       <Grid item xs={12} sm={6} md={6}>
           <Grid container spacing={0} className="BreedDetails">
           <Grid item xs={12} sm={6} md={4}>
             <label>Current spending  :</label>
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
             <label>$ 2124515</label>
       </Grid>
       </Grid>
       </Grid>
        </Grid>
</form>
          
           </Box>
       <Box mt={3}>
       <Grid
              container
              spacing={2}
              className="text-center"
              style={{ display: "block" }}
            >
              <Grid item xs={12} md={12}>
                <Paper variant="outlined" elevation={3} style={{ padding: 0 }}>
                  <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                              className='bgcolor'
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tabelData.map((data, i) => {
                          return (
                            <>
                              <TableRow key={i} className='table-data'>
                                <TableCell
                                 className='table-data p-l-10'
                                >
                                  {data.beginDate}
                                </TableCell>
                                <TableCell
                                 className='table-data'
                                  
                                >
                                  {data.endDate}
                                  {/* {data.craft} */}
                                
                                </TableCell>

                                <TableCell className='table-data'>
                                  {data.clickSpend}
                                </TableCell>
                                <TableCell className='table-data'>
                                  {data.dailySpend}
                                </TableCell >
                                <TableCell className='table-data'>
                                  {data.totalSpend}
                                </TableCell>
                                <TableCell className='table-data'>
                                  {data.paymentDates}
                                </TableCell>
                              </TableRow>
                            </>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, 100]}
                  component="div"
                  count={rows.length}
                  className='text-white'
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </Grid>
            </Grid>
       
       </Box>
        </Container>
      </Box></Box>
      <Box>
     
           </Box>
      
    </>
  );
}
