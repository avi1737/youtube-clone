import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VideoDetailType } from "../pages/Watch/VideoDetail";
import API from "../service";


export type CommentInfo = {
  videoId : string;
  textDisplay : string;
  textOriginal : string;
  authorDisplayName : string;
  authorProfileImageUrl : string;
  publishedAt : string;
  updatedAt : string;
  authorChannelId : {
    value : string;
  }
}

export type SingleCommentType = {
  videoId : string;
  topLevelComment : {
    id : string;
    kind : string;
    snippet : CommentInfo
  }
}

export type CommentType = {
  kind : string;
  id : string;
  snippet : SingleCommentType;
}


type InitialVideoState = {
  videos: any[];
  isLoading: boolean;
  isError: boolean;
  watchVideoDetail: VideoDetailType[];
  isWatchVideoLoading: boolean;
  isWatchVideoError: boolean;
  videoComments: CommentType[];
  isCommentLoading: boolean;
  isCommentError: boolean;
};

const initialState: InitialVideoState = {
  videos: [],
  isLoading: false,
  isError: false,
  watchVideoDetail: [
    {
      id: "",
      snippet: {
        publishedAt: "",
        channelId: "",
        title: "",
        channelTitle: "",
        description: "",
      },
      statistics: {
        viewCount: "",
        likeCount: "",
      },
    },
  ],
  isWatchVideoError: false,
  isWatchVideoLoading: false,
  videoComments: [],
  isCommentLoading: false,
  isCommentError: false,
};

// all thunks goes here

type SearchType = {
  q: string;
  type: string;
};

const fetchVideos = createAsyncThunk(
  "video/fetchVideos",
  async (args: SearchType, ThunkAPI) => {
    let URL = "search?part=snippet&q=virat kohli&maxResults=12";

    if (args.type === "searchVideo" || args.type === "differentPage") {
      URL = `search?part=snippet&q=${args.q}&maxResults=30`;
    }

    try {
      const response = await API(URL);
      return response;
    } catch (err) {
      return err;
    }
  }
);

const watchVideo = createAsyncThunk(
  "video/watchVideo",
  async (args: string, ThunkAPI) => {
    let URL = `videos?part=snippet,statistics&id=${args}`;
    try {
      const response = await API(URL);
      return response;
    } catch (err) {
      return err;
    }
  }
);

const fetchComments = createAsyncThunk(
  "video/fetchComments",
  async (args: string, ThunkAPI) => {
    let URL = `commentThreads?part=snippet&videoId=${args}&maxResults=12`;
    try {
      const response = await API(URL);
      return response;
    } catch (err) {
      return err;
    }
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.videos = action.payload.items;
      state.isLoading = false;
    });
    builder.addCase(fetchVideos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(watchVideo.fulfilled, (state, action) => {
      state.watchVideoDetail = action.payload.items;
      state.isWatchVideoLoading = false;
    });
    builder.addCase(watchVideo.pending, (state, action) => {
      state.isWatchVideoLoading = true;
    });
    builder.addCase(watchVideo.rejected, (state, action) => {
      state.isWatchVideoLoading = false;
      state.isWatchVideoError = true;
    });

    
    builder.addCase(fetchComments.pending, (state, action) => {
      state.isCommentLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.videoComments = action.payload.items;
      state.isCommentLoading = false;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isCommentLoading = false;
      state.isCommentError = true;
    });
  },
});

export const videoReducer = videoSlice.reducer;
export { fetchVideos, watchVideo, fetchComments };
