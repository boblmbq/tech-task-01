import CarItem from 'components/CarItem/CarItem';
import uuid from 'react-uuid';
import { CarsListWrapper } from './CarsList.styled';
import { CarListProps } from './CarListProps.types';

function CarsList({ data }: CarListProps) {
	return (
		<CarsListWrapper>
			{data.map(car => (
				<CarItem key={uuid()} {...car} />
			))}
		</CarsListWrapper>
	);
}

export default CarsList;
