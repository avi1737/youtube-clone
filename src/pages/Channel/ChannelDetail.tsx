import { Typography } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";
import { timeAgo } from "../../helpers";

const Profile = styled("img")({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  border: "0.5px solid grey",
});

function ChannelDetail({ channelInfo }: any) {
  return (
    <>
      <Profile src={channelInfo.snippet.thumbnails.medium.url} />
      <Typography sx={{ fontSize: "24px", fontWeight: "bolder" }}>
        {channelInfo.snippet.title}
      </Typography>
      <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
        Subscribers : {channelInfo.statistics.subscriberCount}
      </Typography>
      <Typography sx={{ fontSize: "18px", fontWeight: "lighter" }}>
        {channelInfo.snippet.description}
      </Typography>
      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
        {timeAgo(channelInfo.snippet.publishedAt)}
      </Typography>
    </>
  );
}

export default ChannelDetail;
