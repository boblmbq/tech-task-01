import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from '../carSlice/carSlice';

export const store = configureStore({
	reducer: carReducer,

});
