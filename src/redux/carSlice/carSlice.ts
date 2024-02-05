import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchPaginatedCars } from './carOperations';

const initialState = {
	paginatedCars: null,
	allCars: [],
	favorites: [],
	currentPage: 1,
};

export const carSlice = createSlice({
	name: 'carSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchAllCars.fulfilled, (state, { payload }) => {
				state.allCars = payload;
			})
			.addCase(fetchPaginatedCars.fulfilled, (state, { payload }) => {
				state.paginatedCars = payload;
			});
	},
});

export const carReducer = carSlice.reducer;
