import { RentalCars } from 'types/Car';

export interface carInitialState {
	cars: RentalCars | never;
	allCars: RentalCars | never;
	loading: boolean;
	error: null | string;
}
