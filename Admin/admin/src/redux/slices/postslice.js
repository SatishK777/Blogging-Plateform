
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from '../../firebase';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const snapshot = await getDocs(collection(firestore, 'posts'));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

export const addPost = createAsyncThunk('posts/addPost', async (post) => {
    const docRef = await addDoc(collection(firestore, 'posts'), post);
    return { id: docRef.id, ...post }; 
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    const postRef = doc(firestore, 'posts', id);
    await deleteDoc(postRef);
    return id; // Return the id of the deleted post
});

export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, ...post }) => {
    const docRef = doc(firestore, 'posts', id);
    await updateDoc(docRef, post);
    return { id, ...post };
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        error: null,
        editPost: null, // Add state for editing post
    },
    reducers: {
        setEditPost(state, action) {
            state.editPost = action.payload; // Update the editing post in state
        },
        clearEditPost(state) {
            state.editPost = null; // Clear the editing post
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                const index = state.posts.findIndex(post => post.id === action.payload.id);
                if (index !== -1) {
                    state.posts[index] = action.payload;
                }
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(post => post.id !== action.payload);
            });
    },
});

export const { setEditPost, clearEditPost } = postsSlice.actions;
export default postsSlice.reducer;
