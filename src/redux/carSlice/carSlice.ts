import { createSlice } from '@reduxjs/toolkit';
import { RentalCarType, RentalCarsType } from '../../types';
import { fetchAllCars, fetchPaginatedCars } from './carOperations';

export type InitialStateType = {
	paginatedCars: RentalCarsType | never;
	allCars: RentalCarsType;
	favorites: RentalCarsType;
	currentPage: number;
	isModalOpen: boolean;
	carForModal: RentalCarType | null;
};

const initialState: InitialStateType = {
	paginatedCars: [],
	allCars: [],
	favorites: [],
	currentPage: 1,
	isModalOpen: false,
	carForModal: null,
};

export const carSlice = createSlice({
	name: 'carSlice',
	initialState,
	reducers: {
		incrementPage(state) {
			state.currentPage += 1;
		},
		toggleModal(state, { payload }: { payload: RentalCarType | null }) {
			state.isModalOpen = !state.isModalOpen;
			state.carForModal = payload;
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
export const { incrementPage, toggleModal } = carSlice.actions;
export const carReducer = carSlice.reducer;
