import { RentalCarType } from '../../types';
import DetailedInfoList from '../DetailedinfoListWrapper/DetailedInfoListWrapper';
import {
	CarImage,
	CarImageModalWrapper,
	CarModalCloseButton,
	CarModalWrapper,
	CarNameYearText,
} from './CarModal.styled';

type CarModalProps = {
	carInfo: RentalCarType;
	handleLearnMoreClick: () => void;
};

function CarModal({ carInfo, handleLearnMoreClick }: CarModalProps) {
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
	} = carInfo;
	const previewAddress = address.split(',').splice(1, 2);
	const placeTypeInfo = [
		...previewAddress,
		`Id: ${id}`,
		`Year: ${year}`,
		`Type: ${type}`,
	];
	const detailInfo = [
		`Fuel Consumption: ${fuelConsumption}`,
		`Engine Size: ${engineSize}`,
	];

	return (
		<CarModalWrapper>
			<CarModalCloseButton onClick={() => handleLearnMoreClick()}>
				close
			</CarModalCloseButton>

			<CarImageModalWrapper>
				<CarImage src={img} alt='' />
			</CarImageModalWrapper>

			<CarNameYearText>
				{make} <span>{model}</span>, {year}
			</CarNameYearText>

			<DetailedInfoList information={placeTypeInfo} />
			<DetailedInfoList information={detailInfo} />

			<p></p>
			<DetailedInfoList information={accessories} />
			<DetailedInfoList information={functionalities} />

			<p></p>
			<ul></ul>

			<button>Rental car</button>
		</CarModalWrapper>
	);
}

export default CarModal;

// {
//     "id": 9582,
//     "year": 2008,
//     "make": "Buick",
//     "model": "Enclave",
//     "type": "SUV",

//     "img": "https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg",

//     "description": "The Buick Enclave is a stylish and spacious SUV known 		for its comfortable ride and luxurious features.",

//     "fuelConsumption": "10.5",
//     "engineSize": "3.6L V6",
//     "accessories": [
//       "Leather seats",
//       "Panoramic sunroof",
//       "Premium audio system"
//     ],
//     "functionalities": [
//       "Power liftgate",
//       "Remote start",
//       "Blind-spot monitoring"
//     ],
//     "rentalPrice": "$40",
//     "rentalCompany": "Luxury Car Rentals",
//     "address": "123 Example Street, Kiev, Ukraine",
//     "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",

//     "mileage": 5858
//   }
