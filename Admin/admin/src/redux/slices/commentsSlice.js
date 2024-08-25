

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebase';

// Fetch comments
export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  const querySnapshot = await getDocs(collection(firestore, 'comments'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

// Fetch posts
export const fetchPosts = createAsyncThunk('comments/fetchPosts', async () => {
  const querySnapshot = await getDocs(collection(firestore, 'posts'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

export const deleteComment = createAsyncThunk('comments/deleteComment', async (commentId) => {
  await deleteDoc(doc(firestore, 'comments', commentId));
  return commentId;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    posts: [], 
    commentsStatus: 'idle', // Status for fetching comments
    postsStatus: 'idle', // Status for fetching posts
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.commentsStatus = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentsStatus = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.postsStatus = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.postsStatus = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter(comment => comment.id !== action.payload);
      });
  },
});

export default commentsSlice.reducer;
