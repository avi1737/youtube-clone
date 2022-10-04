import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ChannelHeader from "./ChannelHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannel } from "../../redux/channelSlice";
import { AppDispatch, RootState } from "../../redux/store";
import Loader from "../../components/shared/Loader";
import ChannelVideos from "./ChannelVideos";

function Channel() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { isError, isLoading } = useSelector(
    (state: RootState) => state.channel
  );

  useEffect(() => {
    dispatch(fetchChannel(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>There was an error occured!</h1>;
  }

  return (
    <Box
      sx={{
        padding: "200px 50px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <ChannelHeader />
      <ChannelVideos id={id} />
    </Box>
  );
}

export default Channel;
