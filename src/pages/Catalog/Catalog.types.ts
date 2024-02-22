import { RentalCars } from 'types/Car';
import { fetchingErrorType } from 'types/Error';


export type fetchedData = {
	data: RentalCars | undefined;
	error: fetchingErrorType | undefined;
	isLoading: boolean;
};
