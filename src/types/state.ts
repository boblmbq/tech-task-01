import { RentalCarsType } from './RentalCarsType';

export type ReduxStateType = {
	paginatedCars: null | RentalCarsType;
	allCars: [] | RentalCarsType;
	favorites: [] | RentalCarsType;
	currentPage: number;
};
