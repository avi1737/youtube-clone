import {  Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/shared/Loader';

import { fetchChannelVideos } from '../../redux/channelSlice';
import VideoCard from '../Home/VideoCard';

function ChannelVideos({id}) {

  const dispatch = useDispatch();
  const { isVideoLoading , channelVideosList } = useSelector((state) => state.channel);

  useEffect(() => {
    dispatch(fetchChannelVideos(id));
  }, [dispatch, id]);
  
  if(isVideoLoading){
    return <Loader/>
  }


  return (
    <Box sx={{  margin : "160px 0px"}}>
    <Typography sx={{ fontSize : "24px" , fontWeight : "bolder"}}>Channel Videos</Typography>
      <Grid container spacing={{ md: 2, lg: 2 }} sx={{ padding : "0px 10px"}}>
      {channelVideosList.length > 0 &&
      channelVideosList.map((item) => (
        <Grid item xs={12} sm={12} md={6} lg={3} key={item.id.videoId}>
          <VideoCard data={item} />
        </Grid>
      ))}
    </Grid>
    </Box>
  )
}

export default ChannelVideos