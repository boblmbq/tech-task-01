import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {},

	// middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware().concat(carsApi.middleware),
});

setupListeners(store.dispatch);
