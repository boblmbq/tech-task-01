import { useState } from 'react';
import ButtonHeart from '../../icons/ButtonHeart/ButtonHeart';
import { addToFavorites } from '../../redux/Favorites/favoritesSlice';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { selectFavorites } from '../../redux/Favorites/favoritesSelectors';
import { RentalCarType } from '../../types';
import CarModal from '../CarModal/CarModal';
import { DetailedInfoListsWrapper } from '../CarsList/CarsList.styled';
import DetailedInfoList from '../DetailedInfoListWrapper/DetailedInfoListWrapper';
import { Modal } from '../Modal/Modal';
import {
	CarImage,
	CarImageWrapper,
	CarInfoWrapper,
	CarNamePriceWrapper,
	CarNameYearText,
	FavoriteButton,
	HighlightedText,
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
	const previewInfo = [
		...previewAddress,
		rentalCompany,
		type,
		model,
		id,
		accessories[0],
	];
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useAppDispatch();
	const favoriteCars = useAppSelector(selectFavorites);

	const isFavorite = favoriteCars.some(favoriteCar => favoriteCar.id === id);

	const handleToggleModalClick = () => {
		setIsOpen(prev => !prev);
	};

	const handleAddToFavorites = () => {
		dispatch(addToFavorites({ carItem: car }));
	};

	return (
		<>
			<CarInfoWrapper>
				<div>
					<CarImageWrapper>
						<FavoriteButton onClick={() => handleAddToFavorites()}>
							<ButtonHeart isFavorite={isFavorite} />
						</FavoriteButton>
						<CarImage src={img} alt={`a car of ${model} model`} />
					</CarImageWrapper>

					<CarNamePriceWrapper>
						<CarNameYearText>
							{make} <HighlightedText>{model}</HighlightedText>, {year}
						</CarNameYearText>
						<p>{rentalPrice}</p>
					</CarNamePriceWrapper>

					<DetailedInfoListsWrapper>
						<DetailedInfoList information={previewInfo} />
					</DetailedInfoListsWrapper>
				</div>

				<LearnMoreBtn type='button' onClick={() => handleToggleModalClick()}>
					Learn more
				</LearnMoreBtn>
			</CarInfoWrapper>

			{isOpen && (
				<Modal handleClose={handleToggleModalClick}>
					<CarModal
						carInfo={car}
						handleToggleModalClick={handleToggleModalClick}
					/>
				</Modal>
			)}
		</>
	);
}

export default CarItem;
