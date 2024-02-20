import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface initialFilterStateType {
	onFilter: boolean;
	brand: string | undefined;
	price: number | undefined;
	mileageFrom: number | undefined;
	mileageTo: number | undefined;
}

const initialFilterState: initialFilterStateType = {
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
		addFilters(state, action: PayloadAction<initialFilterStateType>) {
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
