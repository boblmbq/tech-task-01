import CarModal from 'components/CarModal/CarModal';
import { DetailedInfoListsWrapper } from 'components/CarsList/CarsList.styled';
import DetailedInfoList from 'components/DetailedInfoListWrapper/DetailedInfoListWrapper';
import Modal from 'components/Modal/Modal';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import ButtonHeart from 'icons/ButtonHeart/ButtonHeart';
import { useState } from 'react';
import { RentalCar } from 'types';
import { addToFavorites, selectFavorites } from '../../redux/Favorites/';
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

function CarItem(car: RentalCar) {
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
