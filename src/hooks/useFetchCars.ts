import { useEffect, useState } from 'react';
import { LIMIT } from '../api/params';
import { fetchAllCars, fetchPaginatedCars } from '../redux/Car/carOperations';
import {
	selectCars,
	selectError,
	selectLoading,
} from '../redux/Car/carSelectors';
import { clearPaginatedCars } from '../redux/Car/carSlice';
import {
	selectFilteredCars,
	selectOnFilter,
} from '../redux/Filter/filterSelectors';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export default function useFetchCars() {
	const dispatch = useAppDispatch();
	const paginatedCars = useAppSelector(selectCars);
	const filteredCars = useAppSelector(selectFilteredCars);
	const onFilter = useAppSelector(selectOnFilter);
	const loading = useAppSelector(selectLoading);
	const error = useAppSelector(selectError);
	const [page, setPage] = useState(1);

	const cars = onFilter ? filteredCars : paginatedCars;

	const handleIncrementPage = () => {
		setPage(prev => prev + 1);
	};

	useEffect(() => {
		dispatch(clearPaginatedCars());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchAllCars());
	}, [dispatch]);

	useEffect(() => {
		const params = { page, limit: LIMIT };
		dispatch(fetchPaginatedCars(params));
	}, [page, dispatch]);

	return { cars, page, handleIncrementPage, loading, error };
}
