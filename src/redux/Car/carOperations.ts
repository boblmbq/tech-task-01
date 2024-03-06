import { createAsyncThunk } from '@reduxjs/toolkit';
import MOCK_API_BASE_URL from 'api/api';
import { RENTAL_CARS } from 'api/endpoints';
import { RentalCars } from 'types/Car';
import { paginatedCarsParam } from 'types/Params';

export const fetchAllCars = createAsyncThunk<
	RentalCars,
	undefined,
	{ rejectValue: string }
>('fetchAllCars', async (_, { rejectWithValue }) => {
	try {
		const allCars = await MOCK_API_BASE_URL.get(`${RENTAL_CARS}`);
		return allCars.data;
	} catch (error: any) {
		rejectWithValue(error.message);
	}
});

export const fetchPaginatedCars = createAsyncThunk<
	RentalCars,
	paginatedCarsParam,
	{ rejectValue: string }
>('fetchPaginatedCars', async (params, { rejectWithValue }) => {
	try {
		const { data } = await MOCK_API_BASE_URL.get(`${RENTAL_CARS}`, {
			params,
		});
		return data;
	} catch (error: any) {
		rejectWithValue(error.message);
	}
});
