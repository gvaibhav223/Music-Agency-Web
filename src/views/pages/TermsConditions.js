import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  ListItem,
  List,
} from "@material-ui/core";

import { } from "react-feather";
import axios from 'axios';
import { apiConfig } from "src/constants/index";

const useStyles = makeStyles((theme) => ({
  TermsConditions: {
    height: "calc(100vh - 480px)",
    background: "#000",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(8),
    },
  },
}));


export default function TermsConditions() {
  const classes = useStyles();
  const [staticdata, setStaticdata] = useState();
  const [secdata, setdata] = useState();
  useEffect(() => {
    const mapdata = staticdata?.map((data, i) => {
      setdata(data?.description);
    })
  }, [staticdata])
  const staticContentApi = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.staticContent,

      })
      if (res.data.response_code === 200) {
        setStaticdata(res.data.result.filter((data) => data.type === "T&C"));
        console.log("reskjdfh", res.data.result);
      } else if (res.data.response_code === 500) { }
    } catch {
    }
  }
  useEffect(() => {
    staticContentApi();
  }, [])
  return (
    <>
      <Box className={classes.TermsConditions}>
        <Box mt={5} mb={2}>
          <Container fixed>
            <Grid container spacing={2} className="counterSection">
              <Grid item xs={12} md={12} className="aboutText">
                <Typography gutterBottom style={{ color: "#16fff7" }} >
                  Last update: 25/12/2020
                </Typography>
                <Typography gutterBottom variant="h4">
                  Terms & Conditions
                </Typography>
                <Typography variant="body2">

                  {secdata && (
                    <div
                      dangerouslySetInnerHTML={{ __html: secdata }}
                    ></div>
                  )}

                </Typography>

              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
