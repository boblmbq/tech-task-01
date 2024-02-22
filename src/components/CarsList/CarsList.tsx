import CarItem from 'components/CarItem/CarItem';
import uuid from 'react-uuid';
import { RentalCars } from 'types';
import { CarsListWrapper } from './CarsList.styled';

type CarListType = { data: RentalCars };

function CarsList({ data }: CarListType) {
	return (
		<CarsListWrapper>
			{data.map(car => (
				<CarItem key={uuid()} {...car} />
			))}
		</CarsListWrapper>
	);
}

export default CarsList;
