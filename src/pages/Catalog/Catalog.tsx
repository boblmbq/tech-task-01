import { LIMIT } from '../../api/params';
import CarFilter from '../../components/CarFilter/CarFilter';
import CarsList from '../../components/CarsList/CarsList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import useFetchCars from '../../hooks/useFetchCars';
import { CatalogWrapper } from './Catalog.styled';

function Catalog() {
	const { cars, page, handleIncrementPage, loading, error } = useFetchCars();

	const showLoadMoreBtn = cars.length / LIMIT >= page;

	return (
		cars && (
			<CatalogWrapper>
				<CarFilter />
				<CarsList data={cars} />
				{showLoadMoreBtn && (
					<LoadMoreBtn handleIncrementPage={handleIncrementPage} />
				)}
			</CatalogWrapper>
		)
	);
}

export default Catalog;
