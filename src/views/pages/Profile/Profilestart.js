import React from 'react' 
import './CREATENFT.css'
import Appbar from'./Appbar'
import Profile from './Profile'
import {fade,AppBar,Toolbar,Typography,Button} from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import {  makeStyles} from '@material-ui/core'

const headersData = [
    {
        label: "Home",
      
    },
    {
        label: "Support",
        
    },
    {
        label: "Create",
       
    },
  
];

const useStyles = makeStyles((theme)=>({
topbar:{
backgroundColor:"white",
},
button:{
    color:"white",
    marginLeft:"30px",
    marginTop:"2px",
    height:"29px",
    fontSize:"12px",
    '&:hover': {
    backgroundColor:"#0CAFFF"
    },
    width:"110px",
    backgroundColor:"#0CAFFF"
     },
    
        search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
          },
        },
      
    menuButton: {
        size: "18px",
        marginLeft: "30px",
        color: " #0CAFFF",
        fontWeight: 100,
        textDecoration:"none",
        marginTop:"5.5px",
      
        "@media (max-width: 900px)": {
            fontSize: "16px",
            fontWeight: "400",
            fontStyle: "normal",
            letterSpacing: "-0.6px",
            lineHeight: "1.75",
        },
    },
        searchIcon: {
          padding: theme.spacing(0, 2),
          height: '100%',
          color:"lightgrey",
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
    width:"10px",
          alignItems: 'center',
          justifyContent: 'center',
        },
        inputRoot: {
          fontSize:"13px",
          color: 'grey',
          border:"0.11px solid grey",
      borderRadius:"4px",
     
        },
        inputInput: {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
              width: '40ch',
            },
          },
        },
    

}))
export default function Topbar(){
    

const classes=useStyles();
    return(
        
    <div>
         <div >
      <AppBar position="static" className={classes.topbar}  >
          <Toolbar>
          <div style={{display:"flex",justifyContent:"flex-end",float:"right"}}>
          <div >
              <AddPhotoAlternateIcon size="large" color="primary" />
              </div>
              
         
          <div className={classes.search} >
            <div className={classes.searchIcon}>
              <SearchIcon size="small"/>
            </div>
            <InputBase
              placeholder="Search. NFT, Username, Collection"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
         
              {
          headersData.map(({ label},i) => {
          return (
          <Typography key={i} className={classes.menuButton}>
            {label}
            </Typography>
          )
        })
    }
    <div>
      <Button variant="contained" size="small" className={classes.button}>Profile</Button>
      </div>
      </div>
      
          </Toolbar>
      </AppBar>
      </div>
      <Appbar/>
     <Profile />
    </div>)
}