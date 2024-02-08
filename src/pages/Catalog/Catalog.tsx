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
import { CatalogWrapper } from './Catalog.styled';

function Catalog() {
	const page = useSelector(selectCurrentPage);
	const maxPage = useSelector(selectMaxPage);
	const paginatedCars = useSelector(selectPaginatedCars);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAllCars());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchPaginatedCars({ page, limit: LIMIT }));
	}, [page, dispatch]);

	return (
		paginatedCars && (
			<CatalogWrapper>
				<CarsList data={paginatedCars} />
				{page !== maxPage && (
					<div>
						<LoadMoreBtn />
					</div>
				)}
			</CatalogWrapper>
		)
	);
}

export default Catalog;
