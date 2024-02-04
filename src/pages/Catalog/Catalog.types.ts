import { fetchingErrorType, rentalCarsType } from '../../types';

export type fetchedData = {
	data: rentalCarsType | undefined;
	error: fetchingErrorType | undefined;
	isLoading: boolean;
};
