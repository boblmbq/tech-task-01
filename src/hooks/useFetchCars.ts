import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MOCK_API_BASE_URL from '../api/api';
import { RENTAL_CARS } from '../api/endpoints';
import { LIMIT } from '../api/params';
import { selectCurrentPage } from '../redux/carSlice/carSelectors';
import { RentalCarsType } from '../types';

export default function useFetchCars() {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [cars, setCars] = useState<RentalCarsType>([]);

	const page = useSelector(selectCurrentPage);

	useEffect(() => {
		const params = {
			page,
			limit: LIMIT,
		};

		const fetchCars = async () => {
			setLoading(true);
			setError(null);

			try {
				const { data } = await MOCK_API_BASE_URL.get(RENTAL_CARS, {
					params,
				});
				setCars(prev => [...prev, ...data]);
			} catch (error) {
				setError('Something went wrong');
			} finally {
				setLoading(false);
			}
		};

		fetchCars();
	}, [page]);

	return { cars, loading, error };
}
