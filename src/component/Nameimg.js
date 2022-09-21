import { Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import {  Controller,useFormContext} from 'react-hook-form';

const Nameimg=()=>{
    const { control } = useFormContext();
   
    return(
<>
    <Box square	boxShadow={5} border={1} width='auto'>
    <Grid container direction='column' >
<Grid item container direction='row' style={{marginBottom:'7px'}} >
<Typography variant="h6" align='left' className={classes.typography}>
        NFT Category
    </Typography>
    <Controller
          control={control}
          name="Nft-category"
          render={({ field }) => (
            <TextField
             className={classes.textfield}
              id="fNft-category"
              variant="outlined"
              placeholder="category name"
            
              {...field}
            />
          )}
        />
</Grid>
<Grid container  item direction='row' style={{marginBottom:'7px'}}>
<Typography align='left' variant="h6"  className={classes.typography}>
       Description
    </Typography>
    <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <TextField
            
            className={classes.textfield}
              id="description"
              variant="outlined"
              placeholder="Nft description"
             multiline
            rows={4}
              {...field}
              
            />
          )}
        />
</Grid>
<Grid container  item direction='row' style={{marginBottom:'7px'}}>
<Typography align='left' variant="h6"  className={classes.typography}>
External Link
    </Typography>
    <Controller
          control={control}
          name="external-link"
          render={({ field }) => (
            <TextField
            
            className={classes.textfield}
              id="external-link"
              variant="outlined"
              placeholder=" external link"
            
              {...field}
            />
          )}
        />
</Grid>
<Grid  container item direction='row' style={{marginBottom:'7px'}}>
<Typography align='left' variant="h6"  className={classes.typography}>
       upload image
    </Typography>
    <Controller
          control={control}
          name="upload-image"
          render={({ field }) => (
            <TextField
            type='file'
           
            className={classes.textfield}
              id="upload-image"
              variant="outlined"
              placeholder="upload image"
            
              {...field}
            />
          )}
        />
</Grid>
</Grid>
  
       
    </Box>
      </>
    );
}
export default Nameimg;