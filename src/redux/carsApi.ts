import { createApi } from '@reduxjs/toolkit/query/react';
import MOCK_API_BASE_URL from '../api/api';
import axiosBaseQuery from '../axios/axiosBaseQuery';
import { RENTAL_CARS } from '../api/endpoints';


export const carsApi = createApi({
	reducerPath: 'carsApi',
	baseQuery: axiosBaseQuery({ baseUrl: MOCK_API_BASE_URL }),
	endpoints(builder) {
		return {
			getCars: builder.query({
				query: (page: number = 1) => ({
					url: `/${RENTAL_CARS}`,
					method: 'get',
					params: {
						page,
						limit: 12,
					},
				}),
			}),
		};
	},
});

export const { useGetCarsQuery } = carsApi;
