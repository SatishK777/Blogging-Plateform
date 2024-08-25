// src/redux/slices/commentsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebase';

// Fetch all comments for a specific post
export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
  const querySnapshot = await getDocs(collection(firestore, 'comments'));
  return querySnapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(comment => comment.postId === postId);
});

// Add a new comment
export const addComment = createAsyncThunk('comments/addComment', async (newComment) => {
  const docRef = await addDoc(collection(firestore, 'comments'), newComment);
  return { id: docRef.id, ...newComment };
});

// Delete a comment
export const deleteComment = createAsyncThunk('comments/deleteComment', async (commentId) => {
  await deleteDoc(doc(firestore, 'comments', commentId));
  return commentId;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter(comment => comment.id !== action.payload);
      });
  },
});

export default commentsSlice.reducer;
