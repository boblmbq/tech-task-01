import Extras from 'components/Extras';
import MainCarDetails from 'components/MainCarDetails/';
import RentalConditions from 'components/RentalConditions/';
import ButtonClose from 'icons/ButtonClose/ButtonClose';
import { RentalCar } from 'types';
import {
	CarImage,
	CarModalCloseButton,
	CarModalImageWrapper,
	CarModalInnerWrapper,
	CarModalWrapper,
	RentalCarModalButton,
} from './CarModal.styled';

type CarModalProps = {
	carInfo: RentalCar;
	handleToggleModalClick: () => void;
};

function CarModal({ carInfo, handleToggleModalClick }: CarModalProps) {
	const {
		id,
		img,
		make,
		model,
		year,
		type,
		address,
		fuelConsumption,
		engineSize,
		accessories,
		functionalities,
		description,
		rentalConditions,
		rentalPrice,
		mileage,
	} = carInfo;
	const previewAddress = address.split(',').splice(1, 2);
	const mainCarInfo = [
		...previewAddress,
		`Id: ${id}`,
		`Year: ${year}`,
		`Type: ${type}`,
		`Fuel Consumption: ${fuelConsumption}`,
		`Engine Size: ${engineSize}`,
	];
	const functionalitiesAccessories = [...functionalities, ...accessories];

	return (
		<CarModalWrapper>
			<CarModalCloseButton onClick={() => handleToggleModalClick()}>
				<ButtonClose />
			</CarModalCloseButton>

			<CarModalImageWrapper>
				<CarImage src={img} alt='' />
			</CarModalImageWrapper>

			<CarModalInnerWrapper>
				<MainCarDetails
					make={make}
					year={year}
					model={model}
					mainCarInfo={mainCarInfo}
					description={description}
				/>

				<Extras extrasInfo={functionalitiesAccessories} />

				<RentalConditions
					conditions={rentalConditions}
					mileage={mileage}
					rentalPrice={rentalPrice}
				/>

				<RentalCarModalButton>Rental car</RentalCarModalButton>
			</CarModalInnerWrapper>
		</CarModalWrapper>
	);
}

export default CarModal;
