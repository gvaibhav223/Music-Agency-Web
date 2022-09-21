import React from "react";
import { Typography, Box , makeStyles, Avatar,Grid,Link} from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';


const useStyles = makeStyles((theme) => ({
    NftImg: {
    borderRadius: 10,
    boxShadow: "0 11px 24px rgb(0, 0, 0, 0.12)",
     display:"block",
     miHeight: "300px",
     position:'relative',
     
    },
    bottomblock:{
      display:"flex",
      justifyContent:"space-between",
      alignContent:"center",
    },
    bottomTop:{
      display:"flex",
      justifyContent:"space-between",
      alignContent:"center",
      margin: "10px 0 0",
    },
    playbutton:{
      position:'absolute',
      bottom:5,
      right:10,
    }
    
  }));

export default function NFTCard(props ) {
  const { type, data } = props;
    const classes = useStyles();


  return (
    <Box
    className='bgCardcolor'
      style={{ padding:"17px", borderRadius: 1,margin:7}}
    >
      <Link href="/nft-details">
      <Box display="flex">
        

        <Box className="collectionSet">
          <Box className={classes.NftImg}>
          <Box className="d-flex justifyEnd text-grey" pt={0} pb={1}>
          <FavoriteBorderOutlinedIcon style={{fontSize:'18px'}}/>
          <span style={{marginLeft:'10px',fontSize:'18px',fontWeight:"300"}}>{data.likes}</span>
        </Box>
        <img   
              src={data.img}
              width="100%"
              
              alt=""
              style={{borderRadius:'5px'}}
            />
            <Box className={classes.playbutton} >
            <Avatar style={{backgroundColor:"#1ed760",cursor:"pointer"}}>
              <PlayArrowIcon/>
            </Avatar>
              </Box>
              </Box>
              <Box mt={2}>
                <Grid container justify='space-between'>
                  <Grid item>
                    <Box>
                    <Grid container direction='column' alignItems='flex-start' >
                      <Grid item>
                      <Typography style={{fontSize:'15px'}}>{data.singername}</Typography>
                      </Grid>
                      <Grid item>
                      <Typography style={{color:'#fff',fontSize:'16px'}}> {data.songname}</Typography>
                      </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box >
                      <Grid container direction='column' alignItems='flex-end' >
                            <Grid item>
                                 <Typography style={{fontSize:'18px'}}>Min Bid</Typography>
                            </Grid>
                            <Grid item>
                                 <Typography style={{color:'#fff',fontSize:'18px'}}>{data.bid}</Typography>
                            </Grid>
                            <Grid item>
                              <Grid container  alignItems='center'>
                              <Grid item>
                                <QueryBuilderOutlinedIcon style={{fontSize:'18px'}}/>
                                </Grid>
                                <Grid item>
                                 <span style={{marginLeft:'4px',fontSize:'18px'}}>{data.days}</span>
                                 </Grid>
                                 </Grid>
                            </Grid>
                      </Grid>
                    </Box>

                  </Grid>

                </Grid>
              </Box>
             
            
           
          

            
           
             </Box>
      </Box>
      
</Link>
    
    </Box>
  );
}
