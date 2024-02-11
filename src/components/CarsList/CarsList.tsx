import uuid from 'react-uuid';
import { RentalCarsType } from '../../types';
import CarItem from '../CarItem/CarItem';
import { CarsListWrapper } from './CarsList.styled';

function CarsList({ data }: { data: RentalCarsType }) {
	
	return (
		<>
			<CarsListWrapper>
				{data.map(car => (
					<CarItem key={uuid()} {...car} />
				))}
			</CarsListWrapper>
		</>
	);
}

export default CarsList;
