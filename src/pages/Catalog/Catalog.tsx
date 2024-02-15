import { LIMIT } from '../../api/params';
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
				<CarsList data={cars} />
				{showLoadMoreBtn && (
					<div>
						<LoadMoreBtn handleIncrementPage={handleIncrementPage} />
					</div>
				)}
			</CatalogWrapper>
		)
	);
}

export default Catalog;
