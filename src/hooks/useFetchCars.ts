import { useEffect, useState } from 'react';
import { LIMIT } from '../api/params';
import { fetchPaginatedCars } from '../redux/Car/carOperations';
import {
	selectError,
	selectLoading,
	selectPaginatedCars,
} from '../redux/Car/carSelectors';
import { clearPaginatedCars } from '../redux/Car/carSlice';
import { useAppDispatch, useAppSelector } from './reduxHooks';


export default function useFetchCars() {
	const dispatch = useAppDispatch();
	const cars = useAppSelector(selectPaginatedCars);
	const loading = useAppSelector(selectLoading);
	const error = useAppSelector(selectError);
	const [page, setPage] = useState(1);

	const handleIncrementPage = () => {
		setPage(prev => prev + 1);
	};

	useEffect(() => {
		dispatch(clearPaginatedCars());
	}, [dispatch]);

	useEffect(() => {
		const params = { page, limit: LIMIT };
		dispatch(fetchPaginatedCars(params));
	}, [page, dispatch]);

	return { cars, page, handleIncrementPage, loading, error };
}
