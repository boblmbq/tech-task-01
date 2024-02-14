import { useEffect, useState } from 'react';
import MOCK_API_BASE_URL from '../api/api';
import { RENTAL_CARS } from '../api/endpoints';
import { LIMIT } from '../api/params';
import { RentalCarsType } from '../types';

export default function useFetchAllCars() {
	const [allCars, setAllCars] = useState<RentalCarsType>([]);
	const [error, setError] = useState<null | string>(null);
	const [maxPage, setMaxPage] = useState<number>(1);

	useEffect(() => {
		setError(null);

		const fetchAllCars = async () => {
			try {
				const { data } = await MOCK_API_BASE_URL.get(RENTAL_CARS);
				setAllCars(data);
				setMaxPage(Math.ceil(data.length / LIMIT));
			} catch (error) {
				setError('Something went wrong');
			}
		};

		fetchAllCars();
	}, []);

	return { allCars,maxPage, error };
}
