import { configureStore } from "@reduxjs/toolkit";
import { useDispatch  , useSelector , TypedUseSelectorHook} from "react-redux";
import { channelReducer } from "./channelSlice";
import { layoutReducer } from "./layoutSlice";
import { videoReducer } from "./videoSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    videos: videoReducer,
    channel : channelReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

