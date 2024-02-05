import { fetchingErrorType, RentalCarsType } from '../../types';

export type fetchedData = {
	data: RentalCarsType | undefined;
	error: fetchingErrorType | undefined;
	isLoading: boolean;
};
