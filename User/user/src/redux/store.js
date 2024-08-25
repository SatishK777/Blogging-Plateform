import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import commentsReducer from './slices/commentsSlice';
import authReducer from './slices/authSlice';


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    auth: authReducer,
  },
});
