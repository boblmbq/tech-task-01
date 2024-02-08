import { RentalCarsType } from '../types';

export type ReduxStateType = {
	paginatedCars: null | RentalCarsType;
	allCars: [] | RentalCarsType;
	favorites: [] | RentalCarsType;
	currentPage: number;
};
