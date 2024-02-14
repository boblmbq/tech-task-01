import { useSelector } from 'react-redux';
import CarsList from '../../components/CarsList/CarsList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import useFetchAllCars from '../../hooks/useFetchAllCars';
import useFetchCars from '../../hooks/useFetchCars';
import { selectCurrentPage } from '../../redux/carSlice/carSelectors';

function Catalog() {
	const { cars, loading, error } = useFetchCars();
	const { allCars, maxPage, error: allCarsError } = useFetchAllCars();
	const page = useSelector(selectCurrentPage);

	return (
		cars && (
			<>
				<CarsList data={cars} />
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
