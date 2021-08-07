import { Typography } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header";
import useStyle from "./style";

const Home = () => {
  const { classes } = useStyle();
  return (
    <div>
      <Header />

      <h1 className={classes.title}>Danh sách phim</h1>
    </div>
  );
};

export default Home;
