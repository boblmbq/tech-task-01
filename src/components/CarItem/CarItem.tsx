import { useState } from 'react';
import { RentalCarType } from '../../types';
import { DetailedInfoListsWrapper } from '../CarsList/CarsList.styled';
import DetailedInfoList from '../CarsList/DetailedInfoListWrapper';
import {
	CarImage,
	CarImageWrapper,
	CarInfoWrapper,
	CarNamePriceWrapper,
	LearnMoreBtn,
} from './CarItem.styled';
import { Modal } from '../Modal/Modal';

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
		// dispatch(toggleModal(car));
		setIsOpen(prev => !prev);
	};

	return (
		<>
			<CarInfoWrapper>
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

				<LearnMoreBtn type='button' onClick={() => handleLearnMoreClick()}>
					Learn more
				</LearnMoreBtn>
			</CarInfoWrapper>
			<Modal isOpen={isOpen} car={car} />
		</>
	);
}

export default CarItem;
