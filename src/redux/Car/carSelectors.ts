import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import carSlice from './carSlice';

export const selectCars = (state: RootState) => state[carSlice.name].cars;
export const selectAllCars = (state: RootState) => state[carSlice.name].allCars;
export const selectLoading = (state: RootState) => state[carSlice.name].loading;
export const selectError = (state: RootState) => state[carSlice.name].error;

export const selectOptionsVariety = createSelector([selectAllCars], allCars => {
	const brands: string[] = [];
	const prices: number[] = [];

	allCars.forEach(car => {
		brands.push(car.make);
		prices.push(Number(car.rentalPrice.slice(1)));
	});

	const biggestPrice = Math.max(...prices);
	const filteredPrices: number[] = [];

	const step = 10;

	for (let i = step; i <= biggestPrice + step; i += step) {
		filteredPrices.push(i);
	}

	const filteredBrands = [...brands]
		.sort((a: any, b: any) => a.localeCompare(b))
		.filter((brand, idx, array) => array.indexOf(brand) === idx);

	return [filteredBrands, filteredPrices];
});
