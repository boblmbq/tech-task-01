import { DetailedInfoListsWrapper } from '../CarsList/CarsList.styled';
import DetailedInfoList from '../CarsList/DetailedInfoListWrapper';
import {
	CarImage,
	CarImageWrapper,
	CarInfoWrapper,
	CarNamePriceWrapper,
	LearnMoreBtn,
} from './CarItem.styled';
import { RentalCarType } from '../../types';

function CarItem({
	id,
	year,
	make,
	model,
	type,
	img,
	description,
	fuelConsumption,
	engineSize,
	accessories,
	functionalities,
	rentalPrice,
	rentalCompany,
	address,
	rentalConditions,
	mileage,
}: RentalCarType) {
	const previewAddress = address.split(',').splice(1, 2);
	const previewLocationInfo = [...previewAddress, rentalCompany];
	const previewDetailsInfo = [type, model, id, accessories[0]];

	return (
		<CarInfoWrapper >
			<CarImageWrapper>
				<CarImage src={img} alt={`a car of ${model} model`} />
			</CarImageWrapper>

			<CarNamePriceWrapper>
				<p>
					{make} <span>{model}</span>, {year}
				</p>
				<p>{rentalPrice}</p>
			</CarNamePriceWrapper>

			<DetailedInfoListsWrapper>
				<DetailedInfoList information={previewLocationInfo} />
				<DetailedInfoList information={previewDetailsInfo} />
			</DetailedInfoListsWrapper>

			<LearnMoreBtn type='button'>Learn more</LearnMoreBtn>
		</CarInfoWrapper>
	);
}

export default CarItem;
