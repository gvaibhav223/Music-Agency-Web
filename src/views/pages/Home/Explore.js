import React from 'react';
import {
    Box,
    Container,
    Typography,
    makeStyles,
  
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
     
explorebox:{
    backgroundColor:'#111111',
    padding:'10px',
    marginTop:'40px',
    paddingBottom:'20px'
},


  }));


export default function Explore() {

    const classes = useStyles();

    return (
        <div>
            <Container>
                <Box className={classes.explorebox}>
                    <Container maxWidth='md'>
                        <Box align='center' className="sectionHeader">
                            <Typography variant='h1'>
                                EXPLORE MUSIC

                            </Typography>
                          
                                <Typography variant='body2' >
                                Music NFTs are changing the way fans connect with their favorite artists. From 3LAU to Imogen Heap, all kinds of creators are innovating on the blockchain, and the appetite for change in an industry that so often underserves independent makers is clear.

                            </Typography>
                          
                            <Typography variant='body2' >
                           

Browse collections from The Weeknd, Richie Hawtin, RAC, and more.
                            </Typography>
                           
                        </Box>
                    </Container>
                </Box>
            </Container>
        </div>
    )
}
