import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../services/authServices/authSlice.js';

const store = configureStore({
    reducer: {
        auth : authReducer,
    }
})

export default store;