import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { carReducer } from '../carSlice/carSlice';

export const store = configureStore({
	reducer: carReducer,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
