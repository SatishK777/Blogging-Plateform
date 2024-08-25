import { createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const initialState = {
    user: null,
    status: 'idle',
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { setUser, logout, setError } = authSlice.actions;

export const registerUser = (email, password) => async (dispatch) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setUser(userCredential.user));
        console.log('User registered:', userCredential.user);
    } catch (error) {
        console.error('Registration Error:', error.message);
        dispatch(setError(error.message));
    }
};

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUser(userCredential.user));
        console.log('User logged in:', userCredential.user);
    } catch (error) {
        console.error('Login Error:', error.message);
        dispatch(setError(error.message));
    }
};

export const signOutUser = () => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch(logout());
    } catch (error) {
        dispatch(setError(error.message));
    }
};

// Export monitorAuthState properly
export const monitorAuthState = () => (dispatch) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser(user));
        } else {
            dispatch(logout());
        }
    });
};

export default authSlice.reducer;
