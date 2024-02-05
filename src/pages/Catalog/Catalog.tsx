import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CarsList from '../../components/CarsList/CarsList';
import {
	fetchAllCars,
	fetchPaginatedCars,
} from '../../redux/carSlice/carOperations';
import { AppDispatch } from '../../redux/store/store.types';

function Catalog() {
	const [page, setPage] = useState(1);
	const [filters, setFilters] = useState({});
	const [newdata, setnewdata] = useState([]);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchAllCars());
		dispatch(fetchPaginatedCars({ page: 1, limit: 12 }));
	}, [dispatch]);

	return (
		newdata && (
			<>
				<CarsList data={newdata} />
				<button
					onClick={() => {
						setPage(prev => prev + 1);
					}}
				>
					load more
				</button>
			</>
		)
	);
}

export default Catalog;
