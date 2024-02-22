import { fetchingErrorType, RentalCars } from '../../types';

export type fetchedData = {
	data: RentalCars | undefined;
	error: fetchingErrorType | undefined;
	isLoading: boolean;
};
