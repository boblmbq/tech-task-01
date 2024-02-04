import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
	currentPage: 1,
	maxPage: 1,
};

export const carSlice = createSlice({
	name: 'carSlice',
	initialState,
	reducers: {},
});
