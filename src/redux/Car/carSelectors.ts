import { RootState } from '../store/store';
import { carSlice } from './carSlice';

export const selectPaginatedCars = (state: RootState) =>
	state[carSlice.name].paginatedCars;

export const selectAllCars = (state: RootState) => state[carSlice.name].allCars;

export const selectLoading = (state: RootState) => state[carSlice.name].loading;
export const selectError = (state: RootState) => state[carSlice.name].error;
