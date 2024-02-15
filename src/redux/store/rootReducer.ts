import { combineReducers } from '@reduxjs/toolkit';
import { carSlice } from '../Car/carSlice';
import { favoritesSlice } from '../Favorites/favoritesSlice';

export const rootReducer = combineReducers({
	[carSlice.name]: carSlice.reducer,
	[favoritesSlice.name]: favoritesSlice.reducer,
});
