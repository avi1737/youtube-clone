import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Loader from "../../components/shared/Loader";
import { AppDispatch, RootState } from "../../redux/store";
import { watchVideo } from "../../redux/videoSlice";
import CommentList from "./CommentList";
import VideoDetail from "./VideoDetail";

const useStyles = makeStyles({
  container: {
    padding: "100px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

function Watch() {
  const { isWatchVideoError, isWatchVideoLoading, watchVideoDetail } =
    useSelector((state: RootState) => state.videos);
  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    if (typeof id === "string") {
      dispatch(watchVideo(id));
    }
  }, [id, dispatch]);

  if (isWatchVideoError) {
    return <Typography>There was some error loading the video..!</Typography>;
  }

  if (isWatchVideoLoading) {
    return <Loader />;
  }

  const renderUI = () => {
    if (watchVideoDetail.length === 0) {
      return <Typography>There was some error loading the video..!</Typography>;
    } else {
      if (typeof id === "string") {
        return (
          <>
            <VideoDetail />
            <CommentList videoId={id} />
          </>
        );
      }
    }
  };

  return <Box className={classes.container}>{renderUI()}</Box>;
}

export default Watch;
