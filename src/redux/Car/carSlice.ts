import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RentalCarsType } from '../../types';
import { fetchAllCars, fetchPaginatedCars } from './carOperations';

export interface InitialStateType {
	cars: RentalCarsType | never;
	allCars: RentalCarsType | never;
	loading: boolean;
	error: null | string;
}

const handlePending = (state: InitialStateType) => {
	state.loading = true;
};

const handleRejected = (state: InitialStateType) => {
	state.error = 'Something went wrong';
};

const initialState: InitialStateType = {
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
				(state, action: PayloadAction<RentalCarsType>) => {
					state.allCars = action.payload;
				}
			)
			.addCase(
				fetchPaginatedCars.fulfilled,
				(state, action: PayloadAction<RentalCarsType>) => {
					state.cars.push(...action.payload);
				}
			)
			.addMatcher(action => action.type.endsWith('/pending'), handlePending)
			.addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
	},
});
export const { clearPaginatedCars } = carSlice.actions;
export default carSlice;
