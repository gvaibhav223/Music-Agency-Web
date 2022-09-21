import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography, makeStyles, TextField, Table
} from "@material-ui/core";

import { BsUpload } from "react-icons/bs";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { DropzoneArea } from 'material-ui-dropzone';

import {} from "react-feather";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";

import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

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
    background: "#fff",
      paddingTop: theme.spacing(18),
      paddingBottom: theme.spacing(10),
      [theme.breakpoints.up("sm")]: {
       
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
       
      },
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(21),
        paddingBottom: theme.spacing(18),
      
      },
    },
    BreedSpace:{
      textAlign:"center",
      display:"flex",
      justifyContent:"flex-start",
      alignItems:"Center",
    },
    NftImg: {
      borderRadius: 5,
      boxShadow: "-12px -12px 20px 0px #fff, 12px 12px 20px 0px #d1d9e6",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        maxWidth:"85%",
       
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


export default function ManageCollection() {
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

  return (
    <>
    
      <Box
        className={classes.NewBreed}
      
      > <Box>
         <Container fixed>
            <Grid container spacing={2} className="sectionHeading">
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h2" className="text-black">
                  Manage Collection
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* featured */}
      <Box mt={5} mb={2}>
        <Container fixed>
          <Grid container spacing={2} className="BreedDetails text-center">
            <Grid item xs={12} sm={6} md={3}>
            <DropzoneArea
  onChange={(files) => console.log('Files:', files)}
  dropzoneText="Vertical 400 X 800"
/>
<img src="/images/collection2.jpg" className="img-responsive" style={{width:"160px", height:"320px"}}/>
           </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <DropzoneArea
  onChange={(files) => console.log('Files:', files)}
  dropzoneText="Rectangle 800 X 400"
/>
<img src="/images/collection2.jpg" className="img-responsive" style={{width:"320px", height:"160px"}}/>
           </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <DropzoneArea
  onChange={(files) => console.log('Files:', files)}
  dropzoneText="Square 400 X 400"
/>
<img src="/images/collection2.jpg" className="img-responsive" style={{width:"320px", height:"320px"}}/>
           </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <DropzoneArea
  onChange={(files) => console.log('Files:', files)}
  dropzoneText="Banner Thumb 1200 x 300"
/>

<img src="/images/collection2.jpg" className="img-responsive" style={{width:"320px", height:"80px"}}/>
           </Grid>
            
          
           </Grid>
          
           <Box mt={4}>
           <form className="formBox"  autoComplete="off">
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
                              <TableRow key={i}>
                                <TableCell
                                  style={{
                                    color: "#f2f2f2",
                                 
                                    paddingLeft: 10,
                                  }}
                                >
                                  {data.beginDate}
                                </TableCell>
                                <TableCell
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "#f2f2f2 ",
                                  }}
                                >
                                  {data.endDate}
                                  {/* {data.craft} */}
                                
                                </TableCell>

                                <TableCell style={{ color: "#f2f2f2" }}>
                                  {data.clickSpend}
                                </TableCell>
                                <TableCell style={{ color: "#f2f2f2" }}>
                                  {data.dailySpend}
                                </TableCell>
                                <TableCell style={{ color: "#f2f2f2" }}>
                                  {data.totalSpend}
                                </TableCell>
                                <TableCell style={{ color: "#f2f2f2" }}>
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
                  style={{color:"#222"}}
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
