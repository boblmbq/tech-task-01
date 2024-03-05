import { LIMIT } from 'api/params';
import CarFilter from 'components/CarFilter/CarFilter';
import CarsList from 'components/CarsList/CarsList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import useFetchCars from 'hooks/useFetchCars';
import { CatalogWrapper } from './Catalog.styled';

function Catalog() {
	const {
		cars,
		handleIncrementPage,
		showLoadMoreBtn,
		loading,
		error,
	} = useFetchCars();

	// const showLoadMoreBtn = cars.length / LIMIT >= page;

	return (
		cars && (
			<div>
				<CarFilter />
				<CarsList data={cars} />
				{showLoadMoreBtn && (
					<LoadMoreBtn handleIncrementPage={handleIncrementPage} />
				)}
			</div>
		)
	);
}

export default Catalog;
