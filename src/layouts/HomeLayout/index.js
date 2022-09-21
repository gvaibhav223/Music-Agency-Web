import React from "react";
import { makeStyles } from "@material-ui/core";
import Footer from "./Footer";
import Header from "./Header";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111111",
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      {/* <Header /> */}
      <div style={{ minHeight: "350px" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
