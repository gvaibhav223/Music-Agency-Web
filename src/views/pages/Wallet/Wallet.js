import React, { useState, useRef} from "react";


import { BsQuestionCircle } from "react-icons/bs";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button, TextField,
  Table
} from "@material-ui/core";

import {} from "react-feather";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";

import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
const columns = [
  { id: "action", label: "Action",  align: "left", minWidth:"120px", maxWidth:"150px" },
  { id: "Name", label: "Name",  align: "left", minWidth:"160px" },
  { id: "TokenID", label: "Token ID",  align: "left", minWidth:"120px" },
  { id: "time", label: "Date/Time",  align: "left", minWidth:"160px" },
  { id: "status", label: "Status", align: "left" },
  { id: "address", label: "Address",  align: "left" , minWidth:"160px"},
  { id: "amount", label: "Amount",  align: "left", minWidth:"120px" },
];

function createData(action, Name, TokenID, time,status, address,amount ) {
  return { action, Name, TokenID, time, status, address, amount};
}

let tabelData = [
  {
    action: "Withdraw",
    Name: "Summer ",
    TokenID: "1213456456",
    time: "an hour ago",
    status: "pending",
    address: "R2V4 bid lock account",
    amount: "2,600.0000",
  },
  {
    action: "Withdraw",
    Name: "Summer",
    TokenID: "1213456456",
    time: "21.05.21  ,  14:55",
    status: "Completed",
    address: "R2V4 bid lock account",
    amount: "2,600.0000",
  },
  {
    action: "Withdraw",
    Name: "Summer",
    TokenID: "1213456456",
    time: "an hour ago",
    status: "pending",
    address: "R2V4 bid lock account",
    amount: "2,600.0000",
  },
  {
    action: "Withdraw",
    Name: "Summer",
    TokenID: "1213456456",
    time: "an hour ago",
    status: "Completed",
    address: "R2V4 bid lock account",
    amount: "2,600.0000",
  },
 
];

const useStyles = makeStyles((theme) => ({
  wallet: {
    background: "#000",
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(10),
   
  },
  questIcon:{
    fontSize:12,
    marginRight:"5px",
 
    color: "rgba(0, 89, 236, 1)",
  },
  questText:{
    marginBottom:"5px",
    fontSize:14,
    color: "rgba(0, 89, 236, 1)",
    cursor:"pointer",
  },
  metamask: {
    maxWidth: "100%",
    width: "400px",
  },
 
  qrCoce: {
    maxWidth: "100%",
    width: "250px",
  },
  copyQr: {
    maxWidth: "250px",
    display: "flex",
  },
  walletDetails: {
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
 
}));

export default function Wallet() {
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [openPlaceBid, setOpenPlaceBid] = useState(false);
  const [policy, setPolicy] = useState(false);
  const classes = useStyles();
 
  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

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
      <Box className={classes.wallet}>
       
       <Box mt={3} mb={2}>
          <Container maxWidth="lg">
            <Grid container spacing={2} className="text-center">
             
              <Grid item xs={12} md={4}>
               
                  <Box className="walletCount">
                    <Box>
                      <Typography
                        variant="body2"
                        className="textEllipsys"
                      >
                      Available Amount
                      </Typography>
                      <Typography
                        variant="h3"
                        className=" textEllipsys"
                      >
                        124545
                      </Typography>
                    </Box>{" "}
                  </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                  <Box className="walletCount">
                    <Box>
                      <Typography
                        variant="body2"
                        className=" textEllipsys"
                      >
                        Locked Amount
                      </Typography>
                      <Typography
                        variant="h3"
                        className=" textEllipsys"
                      >
                        124545
                      </Typography>
                    </Box>
                  </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                  <Box className="walletCount bgcolor">
                    <Box>
                      <Typography variant="body2" className=" text-white textEllipsys">
                      Total Amount
                      </Typography>
                      <Typography variant="h3" className="text-white textEllipsys">
                        3.12154
                      </Typography>
                    </Box>
                  </Box>
              
                
              </Grid>
            </Grid>
            <Box className="swapping m-t-30">
            <Grid container spacing={2}>
        
             
        <Grid item xs={12} md={4}>
        <Box>
                
                 <TextField
         type="text"
   variant="outlined"
fullWidth
label="Enter BNB Amount" 
   
   
 />
        <Button
                variant="contained"
                color="secondary"
                size="medium"
               fullWidth
               className="m-t-15"
              >
               Deposit
              </Button>
    
               </Box>
       </Grid>
        <Grid item xs={12} md={4}>
        <Box>
                
                 <TextField
         type="text"
   variant="outlined"
fullWidth
label="Enter R2V4 Amount" 
   
   
 />
        <Button
                variant="contained"
                color="primary"
                size="medium"
               fullWidth
               className="m-t-15"
              >
               Withdraw
              </Button>
    
               </Box>
       </Grid>
       <Grid item xs={12} md={4}>
       <Typography variant="body2" className=" text-black textEllipsys m-b-10">
      # Exchange rate: 1.000BNB = 1.0000 R2V4
                      </Typography>
                      <Typography variant="body2" className={classes.questText} onClick={() => setOpenReport(true)}>
                        < BsQuestionCircle className={classes.questIcon} />
                        Why can't I Withdraw my full balance ?
      
                      </Typography>
                      <Typography variant="body2" className={classes.questText}  onClick={() => setOpenPlaceBid(true)}>
                        < BsQuestionCircle className={classes.questIcon} />
                        About Wallet
      
                      </Typography>
                     
    
       </Grid>
       </Grid>

            </Box>
            <Box mt={3}>
              <Typography variant='h2' className='text-white'>Transaction History</Typography>
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
                        <TableRow >
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
                              <TableRow key={i}>
                                <TableCell
                                 className='table-data p-l-10'
                                >
                                  {data.action}
                                </TableCell>
                                <TableCell
                                  className='table-data'
                                >
                                  {data.Name}
                                  {/* {data.craft} */}
                                
                                </TableCell>

                                <TableCell className='table-data' >
                                  {data.TokenID}
                                </TableCell >
                                <TableCell className='table-data'>
                                  {data.time}
                                </TableCell>
                                <TableCell >
                                  {data.status === "pending" ? (
                                    <label className="label label-danger">{data.status}</label>
                                  ) :(
                                    <lable  className="label label-success">{data.status}</lable>
                                  )}
                                 
                                
                                  
                                </TableCell>
                                <TableCell className='table-data' >
                                  {data.address}
                                </TableCell>
                                <TableCell className='table-data'>
                                  {data.amount}
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
                  count={tabelData.length}
                  className='text-white'
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  
                />
              </Grid>
            </Grid>
            </Box>
       
       </Box>
      
          </Container>
        </Box>:
        {openReport && (
          <Dialog
            fullWidth="sm"
            maxWidth="sm"
            open={openReport}
            onClose={() => setOpenReport(false)}
            aria-labelledby="max-width-dialog-title"
          >
            <DialogContent>
             

              <Box mt={2}>
                <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
               
              </Box>
             
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenReport(false)} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        )}
        {openPlaceBid && (
          <Dialog
            fullWidth="sm"
            maxWidth="sm"
            open={openPlaceBid}
            onClose={() => setOpenPlaceBid(false)}
            aria-labelledby="max-width-dialog-title"
          >
            <DialogContent>
            <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenPlaceBid(false)} color="primary">
               OK
              </Button>
            </DialogActions>
          </Dialog>
        )}
      
       
      </Box>
      </>
  );
}
