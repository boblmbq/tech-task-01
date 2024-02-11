import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LIMIT } from '../../api/params';
import CarsList from '../../components/CarsList/CarsList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import {
	fetchAllCars,
	fetchPaginatedCars,
} from '../../redux/carSlice/carOperations';
import {
	selectCurrentPage,
	selectMaxPage,
	selectPaginatedCars,
} from '../../redux/carSlice/carSelectors';
import { useAppDispatch } from '../../redux/store/store';

function Catalog() {
	const dispatch = useAppDispatch();
	const page = useSelector(selectCurrentPage);
	const maxPage = useSelector(selectMaxPage);
	const paginatedCars = useSelector(selectPaginatedCars);

	useEffect(() => {
		dispatch(fetchAllCars());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchPaginatedCars({ page, limit: LIMIT }));
	}, [page, dispatch]);

	return (
		paginatedCars && (
			<>
				<CarsList data={paginatedCars} />
				{page !== maxPage && (
					<div>
						<LoadMoreBtn />
					</div>
				)}
			</>
		)
	);
}

export default Catalog;
