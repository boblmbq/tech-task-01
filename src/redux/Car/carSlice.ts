import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RentalCarsType } from '../../types';
import { fetchAllCars, fetchPaginatedCars } from './carOperations';

export interface InitialStateType {
	paginatedCars: RentalCarsType | never;
	allCars: RentalCarsType;
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
	paginatedCars: [],
	allCars: [],
	loading: false,
	error: null,
};

export const carSliceName = 'cars';

export const carSlice = createSlice({
	name: carSliceName,
	initialState,
	reducers: {
		clearPaginatedCars(state) {
			state.paginatedCars = [];
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
					state.paginatedCars.push(...action.payload);
				}
			)
			.addMatcher(action => action.type.endsWith('/pending'), handlePending)
			.addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
	},
});
export const { clearPaginatedCars } = carSlice.actions;
