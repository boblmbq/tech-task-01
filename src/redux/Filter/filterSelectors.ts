import { createSelector } from '@reduxjs/toolkit';
import { RentalCars } from 'types/Car';
import { selectAllCars } from '../Car';
import { RootState } from '../store/store';
import filterSlice from './filterSlice';

const selectBrand = (state: RootState) => state[filterSlice.name].brand;
const selectPrice = (state: RootState) => state[filterSlice.name].price;
const selectMileageTo = (state: RootState) => state[filterSlice.name].mileageTo;
const selectMileageFrom = (state: RootState) =>
	state[filterSlice.name].mileageFrom;

export const selectOnFilter = (state: RootState) =>
	state[filterSlice.name].onFilter;

export const selectFilteredCars = createSelector(
	[selectBrand, selectPrice, selectMileageFrom, selectMileageTo, selectAllCars],

	(brand, price, mileageFrom, mileageTo, cars: RentalCars) => {
		const filteredCars = cars.filter(({ make, rentalPrice, mileage }) => {
			const numberPrice: number = Number(rentalPrice.slice(1));

			const isSameBrand = brand && brand?.toLowerCase() !== make.toLowerCase();
			const isPriceSmallerOrEqual = price && Number(price) >= numberPrice;
			const isMileageFromMoreOrEqual =
				mileageFrom && Number(mileageFrom) >= mileage;
			const isMileageToLessOrEqual = mileageTo && Number(mileageTo) <= mileage;

			if (isSameBrand) {
				return false;
			}
			if (!isPriceSmallerOrEqual) {
				return false;
			}
			if (isMileageFromMoreOrEqual) {
				return false;
			}
			if (isMileageToLessOrEqual) {
				return false;
			}

			return true;
		});

		return filteredCars;
	}
);
