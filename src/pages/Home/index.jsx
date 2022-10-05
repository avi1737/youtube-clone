import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";

import { fetchVideos } from "../../redux/videoSlice";
import VideoCard from "./VideoCard";

function Home() {
  const dispatch = useDispatch();
  const { videos, isError, isLoading } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(
      fetchVideos({
        type: "differentPage",
        q: "",
      })
    );
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>There was an error occured!</h1>;
  }

  const renderUI = () => {
    return (
      (videos.length > 0 ? videos.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id.videoId}>
          <VideoCard data={item} />
        </Grid>
      )) : <Typography>No Videos to Load</Typography>) 
    );
  };

  return (
    <Grid container spacing={{ md: 2, lg: 2 }} sx={{ padding: "120px 20px" }}>
      {renderUI()}
    </Grid>
  );
}

export default Home;
