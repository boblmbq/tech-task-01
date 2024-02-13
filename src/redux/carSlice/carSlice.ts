import { createSlice } from '@reduxjs/toolkit';
import { RentalCarsType, RentalCarType } from '../../types';
import { fetchAllCars, fetchPaginatedCars } from './carOperations';

export type InitialStateType = {
	paginatedCars: RentalCarsType | never;
	allCars: RentalCarsType;
	favorites: RentalCarsType;
	currentPage: number;
};

const initialState: InitialStateType = {
	paginatedCars: [],
	allCars: [],
	favorites: [],
	currentPage: 1,
};

export const carSlice = createSlice({
	name: 'carSlice',
	initialState,
	reducers: {
		incrementPage(state) {
			state.currentPage += 1;
		},
		addToFavorites(
			state,
			{ payload }: { payload: { carItem: RentalCarType } }
		) {
			state.favorites.push(payload.carItem);
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAllCars.fulfilled, (state, { payload }) => {
				state.allCars = payload;
			})
			.addCase(fetchPaginatedCars.fulfilled, (state, { payload }) => {
				state.paginatedCars.push(...payload);
			});
	},
});
export const { incrementPage, addToFavorites } = carSlice.actions;
export const carReducer = carSlice.reducer;
