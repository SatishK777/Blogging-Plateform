import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebase';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const querySnapshot = await getDocs(collection(firestore, 'categories'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

export const addCategory = createAsyncThunk('categories/addCategory',  (newCategory) => {
  const docRef = addDoc(collection(firestore, 'categories'), newCategory);
  return { id: docRef.id, ...newCategory };
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory',  (categoryId) => {
   deleteDoc(doc(firestore, 'categories', categoryId));
  return categoryId;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(category => category.id !== action.payload);
      });
  },
});

export default categoriesSlice.reducer;
