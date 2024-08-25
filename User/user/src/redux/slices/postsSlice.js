import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';

// Fetch all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (query = '') => {
  const querySnapshot = await getDocs(collection(firestore, 'posts'));
  const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  if (query) {
    return posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
    );
  }
  return posts;
});

// Fetch a single post by ID
export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (postId) => {
  const docRef = doc(firestore, 'posts', postId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('Post not found');
  }
});


const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    currentPost: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.currentPost = action.payload;
      });
  },
});

export default postsSlice.reducer;
