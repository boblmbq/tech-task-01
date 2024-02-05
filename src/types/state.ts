import { RentalCarsType } from './rentalCarsType';

export type ReduxStateType = {
	paginatedCars: null | RentalCarsType;
	allCars: [] | RentalCarsType;
	favorites: [] | RentalCarsType;
	currentPage: number;
};
