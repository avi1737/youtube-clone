import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../service";

type InitialVideoState = {
  channelData: any[];
  isLoading: boolean;
  isError: boolean;
  isVideosLoading : boolean;
  isVideosError : boolean;
  channelVideosList : [];
};

const initialState: InitialVideoState = {
  channelData: [],
  isLoading: false,
  isError: false,
  isVideosLoading : false,
  isVideosError : false,
  channelVideosList : []
};


const fetchChannel = createAsyncThunk(
  "channel/fetchChannel",
  async (args: any, ThunkAPI) => {

    let URL = `channels?part=snippet&statistics&id=${args}`;
    try {
      const response = await API(URL);
      return response;
    } catch (err) {
      return err;
    }
  }
);

const fetchChannelVideos = createAsyncThunk(
  "channel/fetchChannelVideos",
  async (args: any, ThunkAPI) => {

    let URL = `search?channelId=${args}&maxResults=50&part=snippet,id`;
    try {
      const response = await API(URL);
      return response;
    } catch (err) {
      return err;
    }
  }
);

const channelSlice = createSlice({
  name: "channel",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChannel.fulfilled, (state, action) => {
      state.channelData = action.payload.items;
      state.isLoading = false;
    });
    builder.addCase(fetchChannel.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchChannel.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(fetchChannelVideos.fulfilled, (state, action) => {
      state.channelVideosList = action.payload.items;
      state.isVideosLoading = false;
    });
    builder.addCase(fetchChannelVideos.pending, (state, action) => {
      state.isVideosLoading = true;
    });
    builder.addCase(fetchChannelVideos.rejected, (state, action) => {
      state.isVideosLoading = false;
      state.isVideosError = true;
    });
  },
});

export const channelReducer = channelSlice.reducer;
export { fetchChannelVideos , fetchChannel};