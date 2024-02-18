import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LIMIT } from '../api/params';
import { fetchAllCars, fetchPaginatedCars } from '../redux/Car/carOperations';
import {
	selectCars,
	selectError,
	selectLoading,
} from '../redux/Car/carSelectors';
import { clearPaginatedCars } from '../redux/Car/carSlice';
import { FlexibleFilters } from '../types';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export default function useFetchCars() {
	const dispatch = useAppDispatch();
	const cars = useAppSelector(selectCars);
	const loading = useAppSelector(selectLoading);
	const error = useAppSelector(selectError);
	const [page, setPage] = useState(1);
	const [searchParams] = useSearchParams();

	const handleIncrementPage = () => {
		setPage(prev => prev + 1);
	};

	useEffect(() => {
		dispatch(clearPaginatedCars());
	}, [dispatch, searchParams]);

	useEffect(() => {
		if (searchParams.size > 0) {
			let filters: FlexibleFilters = {
				brand: '',
				price: '',
				carMileageFrom: '',
				carMileageTo: '',
			};

			searchParams.forEach((value, key) => {
				filters[key] = value;
			});

			dispatch(fetchAllCars(filters));
		} else {
			const params = { page, limit: LIMIT };
			dispatch(fetchPaginatedCars(params));
		}
	}, [page, searchParams, dispatch]);

	return { cars, page, handleIncrementPage, loading, error };
}
