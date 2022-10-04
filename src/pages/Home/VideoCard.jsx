import { styled } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

import { shortDownVideoTitle, timeAgo } from "../../helpers";

const Item = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height : "280px",
  cursor: "pointer",
  alignItems : "center",
  justifyContent : "space-between",
});

const Thumbnail = styled("img")({
  width: "100%",
  height: "210px",
});

const VideoInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent : "space-between",
  width : "100%",
  padding : "0px 10px"
});

const Title = styled("h4")({
  fontWeight: "bolder",
  fontSize: "18px",
  marginTop : "4px"
});

const Info = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "baseline",
  gap : "20px"
});

const ChannelName = styled("h4")({
  fontWeight: "light",
  fontSize: "14px",
  marginTop: "-30px",
  color : "grey"
});

const Published = styled("h6")({
  fontWeight: "lighter",
  fontSize: "12px",
  marginTop: "-15px",
  color : "grey"
});


function VideoCard({ data }) {

  let navigate = useNavigate();

  const watchVideo = (id) => {
    navigate(`/watch/${id.videoId}`);
  }

  return (
    <Item onClick={() => watchVideo(data.id)}>
      <Thumbnail src={data.snippet.thumbnails.medium.url}></Thumbnail>
      <VideoInfo>
        <Title>{shortDownVideoTitle(data.snippet.title)}</Title>
        <Info>
          <ChannelName>{data.snippet.channelTitle}</ChannelName>
          <Published>{timeAgo(data.snippet.publishedAt)}</Published>
        </Info>
      </VideoInfo>
    </Item>
  );
}

export default VideoCard;
