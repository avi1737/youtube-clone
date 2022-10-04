import { Grid, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  channelTitle: string;
  description: string;
};

type Statistics = {
  viewCount: string;
  likeCount: string;
};

export type VideoDetailType = {
  id: string;
  snippet: Snippet;
  statistics: Statistics;
};

const VideoDetail = () => {
  const navigate = useNavigate();
  const {
    id,
    snippet: { title, channelTitle, description, channelId },
    statistics: { viewCount, likeCount },
  } = useSelector((state: RootState) => state.videos.watchVideoDetail[0]);

  const handleChannelOpen = (channelId: string) => {
    navigate(`/channel/${channelId}`);
  };

  return (
    <Grid md={8} lg={8} xs={10} sm={10}>
      <ReactPlayer
        url={`'https://www.youtube.com/watch?v=${id}`}
        width="100%"
        height="650px"
      />
      <Typography
        sx={{ fontSize: "20px", fontWeight: "bolder", marginTop: "20px" }}
      >
        {title}
      </Typography>

      <Typography
        sx={{ fontSize: "16px", fontWeight: "lighter", marginTop: "20px" }}
      >
        {likeCount} likes
      </Typography>

      <Typography
        sx={{ fontSize: "16px", fontWeight: "lighter", marginTop: "20px" }}
      >
        {viewCount} views
      </Typography>

      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bolder",
          marginTop: "20px",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => handleChannelOpen(channelId)}
      >
        {channelTitle}
      </Typography>
      <Typography
        sx={{ fontSize: "16px", fontWeight: "light", marginTop: "20px" }}
      >
        {description}
      </Typography>
    </Grid>
  );
};

export default VideoDetail;
