import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RentalCarsType } from '../../types';
import {
	fetchAllCars,
	fetchBrandAndPriceVariety,
	fetchPaginatedCars,
} from './carOperations';

export interface InitialStateType {
	cars: RentalCarsType | never;
	brandVariety: string[] | undefined;
	priceVariety: string[] | undefined;
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
	brandVariety: [],
	priceVariety: [],
	loading: false,
	error: null,
};

export const carSliceName = 'cars';

export const carSlice = createSlice({
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
					state.cars = action.payload;
				}
			)
			.addCase(
				fetchPaginatedCars.fulfilled,
				(state, action: PayloadAction<RentalCarsType>) => {
					state.cars.push(...action.payload);
				}
			)
			.addCase(fetchBrandAndPriceVariety.fulfilled, (state, action) => {
				state.brandVariety = action.payload?.brands;
				state.priceVariety = action.payload?.prices;
			})
			.addMatcher(action => action.type.endsWith('/pending'), handlePending)
			.addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
	},
});
export const { clearPaginatedCars } = carSlice.actions;
