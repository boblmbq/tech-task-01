import CarFilter from 'components/CarFilter/CarFilter';
import CarsList from 'components/CarsList/CarsList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import useFetchCars from 'hooks/useFetchCars';
import { useEffect } from 'react';
import { LoadMoreWrapper } from './Catalog.styled';

function Catalog() {
	const { cars, handleIncrementPage, showLoadMoreBtn, loading, error } =
		useFetchCars();

	useEffect(() => {
		if (cars.length > 12) {
			const height = 426;
			window.scrollBy({
				top: height * 1.3,
				behavior: 'smooth',
			});
		}
	}, [cars.length]);

	return (
		cars && (
			<div>
				<CarFilter />
				<CarsList data={cars} />
				<LoadMoreWrapper>
					{showLoadMoreBtn && (
						<LoadMoreBtn handleIncrementPage={handleIncrementPage} />
					)}
				</LoadMoreWrapper>
			</div>
		)
	);
}

export default Catalog;
