import { useState } from 'react';
import { RentalCarType } from '../../types';
import CarModal from '../CarModal/CarModal';
import { DetailedInfoListsWrapper } from '../CarsList/CarsList.styled';
import DetailedInfoList from '../DetailedinfoListWrapper/DetailedInfoListWrapper';
import { Modal } from '../Modal/Modal';
import {
	CarImage,
	CarImageWrapper,
	CarInfoWrapper,
	CarNamePriceWrapper,
	CarNameYearText,
	LearnMoreBtn,
} from './CarItem.styled';

function CarItem(car: RentalCarType) {
	const {
		id,
		year,
		make,
		model,
		type,
		img,
		accessories,
		rentalPrice,
		rentalCompany,
		address,
	} = car;
	const previewAddress = address.split(',').splice(1, 2);
	const previewLocationInfo = [...previewAddress, rentalCompany];
	const previewDetailsInfo = [type, model, id, accessories[0]];
	const [isOpen, setIsOpen] = useState(false);

	const handleLearnMoreClick = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<>
			<CarInfoWrapper>
				<CarImageWrapper>
					<CarImage src={img} alt={`a car of ${model} model`} />
				</CarImageWrapper>

				<CarNamePriceWrapper>
					<CarNameYearText>
						{make} <span>{model}</span>, {year}
					</CarNameYearText>
					<p>{rentalPrice}</p>
				</CarNamePriceWrapper>

				<DetailedInfoListsWrapper>
					<DetailedInfoList information={previewLocationInfo} />
					<DetailedInfoList information={previewDetailsInfo} />
				</DetailedInfoListsWrapper>

				<LearnMoreBtn type='button' onClick={() => handleLearnMoreClick()}>
					Learn more
				</LearnMoreBtn>
			</CarInfoWrapper>

			<Modal isOpen={isOpen}>
				<CarModal carInfo={car} handleLearnMoreClick={handleLearnMoreClick} />
			</Modal>
		</>
	);
}

export default CarItem;
