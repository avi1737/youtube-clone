import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchComments } from "../../redux/videoSlice";
import Comment from "./Comment";

type CommentListType = {
  videoId: string;
};

function CommentList(props: CommentListType) {
  const dispatch = useDispatch<AppDispatch>();
  const { isCommentLoading, isCommentError, videoComments } = useSelector(
    (state: RootState) => state.videos
  );

  useEffect(() => {
    if (props.videoId) {
      dispatch(fetchComments(props.videoId));
    }
  }, [props.videoId, dispatch]);

  if (isCommentLoading) {
    return <Loader />;
  }

  if (isCommentError) {
    return <Typography>There was an error to load comments !</Typography>;
  }

  return (
    <>
      {videoComments && videoComments.length > 0 ? (
        videoComments.slice(0, 10).map((item, index) => <Comment key={index} />)
      ) : (
        <Typography>No Comments to Load..</Typography>
      )}
    </>
  );
}

export default CommentList;
