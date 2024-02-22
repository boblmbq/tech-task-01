import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filterInitialState } from 'types/Filter';

const initialFilterState: filterInitialState = {
	onFilter: false,
	brand: undefined,
	price: undefined,
	mileageFrom: undefined,
	mileageTo: undefined,
};

export const filterName = 'filter';

const filterSlice = createSlice({
	name: filterName,
	initialState: initialFilterState,
	reducers: {
		addFilters(state, action: PayloadAction<filterInitialState>) {
			state.brand = action.payload.brand;
			state.price = action.payload.price;
			state.mileageFrom = action.payload.mileageFrom;
			state.mileageTo = action.payload.mileageTo;
			state.onFilter = action.payload.onFilter;
		},
	},
});

export const { addFilters } = filterSlice.actions;

export default filterSlice;
