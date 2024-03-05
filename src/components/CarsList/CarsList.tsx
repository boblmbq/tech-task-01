import CarItem from 'components/CarItem/CarItem';
import uuid from 'react-uuid';
import { CarListProps } from './CarListProps.types';
import { CarsListWrapper } from './CarsList.styled';

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
