import { createAsyncThunk } from '@reduxjs/toolkit';
import MOCK_API_BASE_URL from '../../api/api';
import { RENTAL_CARS } from '../../api/endpoints';
import { Filters, ParamType, RentalCarType } from '../../types';

export const fetchAllCars = createAsyncThunk(
	'fetchAllCars',
	async (filters: Filters, thunkApi) => {
		try {
			const allCars = await MOCK_API_BASE_URL.get(`${RENTAL_CARS}`);

			const filteredCars = allCars.data.filter((car: RentalCarType) => {
				const { brand, price, carMileageFrom, carMileageTo } = filters;
				const { make, rentalPrice, mileage } = car;
				const numberPrice: number = Number(rentalPrice.slice(1));

				const isSameBrand = brand?.toLowerCase() !== make.toLowerCase();
				const isPriceSmallerOrEqual = Number(price) >= numberPrice;

				if (brand && isSameBrand) {
					return false;
				}
				if (price && !isPriceSmallerOrEqual) {
					return false;
				}
				if (carMileageFrom && Number(carMileageFrom) >= mileage) {
					return false;
				}
				if (carMileageTo && Number(carMileageTo) <= mileage) {
					return false;
				}

				return true;
			});

			return filteredCars;
		} catch (error) {}
	}
);

export const fetchPaginatedCars = createAsyncThunk(
	'fetchPaginatedCars',
	async (params: ParamType) => {
		try {
			const { data } = await MOCK_API_BASE_URL.get(`${RENTAL_CARS}`, {
				params,
			});
			return data;
		} catch (error: any) {
			// return thunkApi?.rejectWithValue(error.message);
		}
	}
);

export const fetchBrandAndPriceVariety = createAsyncThunk(
	'fetchBrandAndPriceVariety',
	async () => {
		try {
			const allCars = await MOCK_API_BASE_URL.get(`${RENTAL_CARS}`);

			const brands: string[] = []
			const prices: string[] = [];

			allCars.data.forEach((car: RentalCarType) => {
				brands.push(car.make);
				prices.push(car.rentalPrice.slice(1));
			});

			const filteredBrands = [...brands]
				.sort((a: any, b: any) => a.localeCompare(b))
				.filter((price, index, array) => array.indexOf(price) === index);

			const filteredPrices = [...prices]
				.sort((a: any, b: any) => Number(a) - Number(b))
				.filter((price, index, array) => array.indexOf(price) === index);


			return {
				brands: filteredBrands,
				prices: filteredPrices,
			};
		} catch (error: any) {
			// return thunkApi?.rejectWithValue(error.message);
		}
	}
);
