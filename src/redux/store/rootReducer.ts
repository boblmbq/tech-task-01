import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carSlice from '../Car/carSlice';
import favoritesSlice from '../Favorites/favoritesSlice';
import filterSlice from '../Filter/filterSlice';

const favoritesPersistConfig = {
	key: 'favorites',
	storage,
	whitelist: ['favorites'],
};

const rootReducer = combineReducers({
	[carSlice.name]: carSlice.reducer,
	[favoritesSlice.name]: favoritesSlice.reducer,
	[filterSlice.name]: filterSlice.reducer,
});

export const persistedRootReducer = persistReducer(favoritesPersistConfig, rootReducer);
