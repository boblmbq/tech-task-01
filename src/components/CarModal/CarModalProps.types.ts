import { RentalCar } from 'types/Car';

export type CarModalProps = {
	carInfo: RentalCar;
	handleToggleModalClick: () => void;
};
