import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { carInitialState, RentalCars } from 'types/Car';
import { fetchAllCars, fetchPaginatedCars } from './carOperations';

const handlePending = (state: carInitialState) => {
	state.loading = true;
};

const handleRejected = (state: carInitialState) => {
	state.loading = false;
	state.error = 'Something went wrong';
};

const initialState: carInitialState = {
	cars: [],
	allCars: [],
	loading: false,
	error: null,
};

export const carSliceName = 'cars';

const carSlice = createSlice({
	name: carSliceName,
	initialState,
	reducers: {
		clearPaginatedCars(state) {
			state.cars = [];
		},
	},
	extraReducers: builder => {
		builder
			.addCase(
				fetchAllCars.fulfilled,
				(state, action: PayloadAction<RentalCars>) => {
					state.allCars = action.payload;
					state.loading = false;
				}
			)
			.addCase(
				fetchPaginatedCars.fulfilled,
				(state, action: PayloadAction<RentalCars>) => {
					state.cars.push(...action.payload);
					state.loading = false;
				}
			)
			.addMatcher(action => action.type.endsWith('/pending'), handlePending)
			.addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
	},
});
export const { clearPaginatedCars } = carSlice.actions;
export default carSlice;
