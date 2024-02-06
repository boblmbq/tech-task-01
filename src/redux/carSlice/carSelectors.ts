import { LIMIT } from '../../api/params';
import { ReduxStateType } from '../../types/state';

export const selectPaginatedCars = (state: ReduxStateType) =>
	state.paginatedCars;
export const selectAllCars = (state: ReduxStateType) => state.allCars;
export const selectMaxPage = (state: ReduxStateType) =>
	Math.ceil(state.allCars.length / LIMIT);
export const selectCurrentPage = (state: ReduxStateType) => state.currentPage;
