import {  Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { timeAgo } from "../../helpers";
import { SingleCommentType } from "../../redux/videoSlice";

const Profile = styled("img")({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
});



function Comment(props : { key : string , data : SingleCommentType }) {

  const navigate = useNavigate();
  const { topLevelComment : { snippet : { textDisplay , updatedAt , authorDisplayName , authorProfileImageUrl , authorChannelId : { value }}}} = props.data;

  const handleChannelOpen = () => {
    navigate(`/Channel/${value}`);
  }

  return(
    <>
    <Box sx={{ display : "flex" , flexDirection : "column" , margin : "5px 10px" , padding : "20px"}}>
      <Box>
        <Profile src={authorProfileImageUrl}/>
        <Typography sx={{ textDecoration : "underline"}} onClick={handleChannelOpen}>{authorDisplayName}</Typography>
        <Typography>{textDisplay}</Typography>
        <Typography>{timeAgo(updatedAt)}</Typography>
      </Box>
    </Box>
    </>
  )
}

export default Comment;
