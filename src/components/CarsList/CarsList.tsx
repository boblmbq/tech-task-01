import uuid from 'react-uuid';
import { RentalCarsType } from '../../types';
import {
	CarImage,
	CarImageWrapper,
	CarInfoWrapper,
	CarNamePriceWrapper,
	CarsListWrapper,
	DetailedInfoListsWrapper,
	LearnMoreBtn,
} from './CarsList.styled';
import DetailedInfoList from './DetailedInfoListWrapper';

function CarsList({ data }: { data: RentalCarsType }) {
	return (
		<CarsListWrapper>
			{data.map(car => {
				const previewAddress = car.address.split(',').splice(1, 2);
				const previewLocationInfo = [...previewAddress, car.rentalCompany];
				const previewDetailsInfo = [
					car.type,
					car.model,
					car.id,
					car.accessories[0],
				];

				return (
					<CarInfoWrapper key={uuid()}>
						<CarImageWrapper>
							<CarImage src={car.img} alt={`a car of ${car.model} model`} />
						</CarImageWrapper>

						<CarNamePriceWrapper>
							<p>
								{car.make} <span>{car.model}</span>, {car.year}
							</p>
							<p>{car.rentalPrice}</p>
						</CarNamePriceWrapper>

						<DetailedInfoListsWrapper>
							<DetailedInfoList information={previewLocationInfo} />
							<DetailedInfoList information={previewDetailsInfo} />
						</DetailedInfoListsWrapper>

						<LearnMoreBtn type='button'>Learn more</LearnMoreBtn>
					</CarInfoWrapper>
				);
			})}
		</CarsListWrapper>
	);
}

export default CarsList;
