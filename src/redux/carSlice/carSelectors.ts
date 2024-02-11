import { LIMIT } from '../../api/params';
import { InitialStateType } from './carSlice';

export const selectPaginatedCars = (state: InitialStateType) =>
	state.paginatedCars;
export const selectAllCars = (state: InitialStateType) => state.allCars;
export const selectMaxPage = (state: InitialStateType) =>
	Math.ceil(state.allCars.length / LIMIT);
export const selectCurrentPage = (state: InitialStateType) => state.currentPage;
