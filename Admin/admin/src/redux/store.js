import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postslice';
import categoriesReducer from './slices/categoriesSlice';
import commentsReducer from './slices/commentsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    categories: categoriesReducer,
    comments: commentsReducer,
  },
});

export default store;
