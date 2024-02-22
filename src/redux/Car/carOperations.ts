import { createAsyncThunk } from '@reduxjs/toolkit';
import MOCK_API_BASE_URL from 'api/api';
import { RENTAL_CARS } from 'api/endpoints';
import { ParamType } from 'types';

export const fetchAllCars = createAsyncThunk('fetchAllCars', async thunkApi => {
	try {
		const allCars = await MOCK_API_BASE_URL.get(`${RENTAL_CARS}`);
		return allCars.data;
	} catch (error) {}
});

export const fetchPaginatedCars = createAsyncThunk(
	'fetchPaginatedCars',
	async (params: ParamType) => {
		try {
			const { data } = await MOCK_API_BASE_URL.get(`${RENTAL_CARS}`, {
				params,
			});
			return data;
		} catch (error: any) {}
	}
);
