import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';
import ChannelDetail from './ChannelDetail';


const useStyles = makeStyles({
    channelHeaderContainer : {
        width : "100%",
        height : "400px",
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-between",
        alignItems : "center",
    }
  });

function ChannelHeader() {
  const data = useSelector((state) => state.channel.channelData);
  const classes = useStyles();

  const renderUI = () => {
    if(data.length === 0){
      return <Typography>There was an error loading channel details.</Typography>
    }
    else{
      return <ChannelDetail channelInfo = {data[0]}/>
    }
  }

  return (
    <Box className={classes.channelHeaderContainer}>
        {renderUI()}
    </Box>
  )
}

export default ChannelHeader