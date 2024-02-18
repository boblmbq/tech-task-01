import { RootState } from '../store/store';
import { carSlice } from './carSlice';

export const selectCars = (state: RootState) => state[carSlice.name].cars;
export const selectBrandVariety = (state: RootState) =>
	state[carSlice.name].brandVariety;
export const selectPriceVariety = (state: RootState) =>
	state[carSlice.name].priceVariety;
export const selectLoading = (state: RootState) => state[carSlice.name].loading;
export const selectError = (state: RootState) => state[carSlice.name].error;
