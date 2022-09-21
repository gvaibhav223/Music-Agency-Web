import React from 'react' 
import './Name.css'
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { Box,Typography ,TextField,TextareaAutosize,Container,Card,CardMedia,CardContent,CardActionArea} from '@material-ui/core'

import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles, withStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
 text:{
     height:"700px",
 },
  }));
export default function Name(){
    const classes = useStyles();
    return(<div>
          <Container display="flex"  >
          
        <div className="Name" >
            <Typography variant="" component="h2">NFT Category</Typography></div>
            <div className="Name2">
            <TextField variant="outlined"  placeholder="The Tulip" 
           
            className="text1"/>
            </div>
            <div className="Name">
            <Typography variant="" component="h2">Description</Typography>
            </div>
            <div className="Name2">
           
       
            <TextareaAutosize   rowsMin={7} placeholder="Tulip Garden in The Netherlands" className="text2" color="primary"/>
            </div>
            <div  className="Name">
            <Typography variant="" component="h2">
            External Link
            </Typography>
            </div>
            <div className="Name2">
            <TextField variant="outlined"  placeholder="   Must start with http......... {optional}" 
           
            className="text1" />
            </div>
            <div className="imgmain">
             <Card className="img" >
             </Card>
          
          < AddCircleIcon color="primary" size="large"/>&nbsp;&nbsp;
           <button align="right"  ><ZoomInIcon color="primary"  /></button>
         
         </div>
           
            </Container>
           
    </div>)
}