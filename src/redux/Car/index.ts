import { fetchAllCars, fetchPaginatedCars } from './carOperations';
import {
	selectAllCars,
	selectCars,
	selectError,
	selectLoading,
	selectOptionsVariety,
} from './carSelectors';
import { clearPaginatedCars } from './carSlice';

export { default } from './carSlice';
export {
	clearPaginatedCars,
	fetchAllCars,
	fetchPaginatedCars,
	selectAllCars,
	selectCars,
	selectError,
	selectLoading,
	selectOptionsVariety,
};
