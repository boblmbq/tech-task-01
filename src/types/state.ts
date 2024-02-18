import { RentalCarsType } from '../types';

export interface ReduxStateType {
	paginatedCars: null | RentalCarsType;
	allCars: [] | RentalCarsType;
	favorites: [] | RentalCarsType;
	currentPage: number;
}
