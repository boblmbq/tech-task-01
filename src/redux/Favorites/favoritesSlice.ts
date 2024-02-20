import { createSlice } from '@reduxjs/toolkit';
import { RentalCarType, RentalCarsType } from '../../types';

export interface initialStateType {
	favorites: RentalCarsType | never;
}

export const favoritesSliceName = 'favorites';

const initialState: initialStateType = { favorites: [] };

const favoritesSlice = createSlice({
	name: favoritesSliceName,
	initialState,
	reducers: {
		addToFavorites(
			{ favorites },
			{ payload }: { payload: { carItem: RentalCarType } }
		) {
			const favoriteCarIndex = favorites.findIndex(element => {
				return element.id === payload.carItem.id;
			});

			if (favoriteCarIndex === -1) {
				favorites.push(payload.carItem);
			} else {
				favorites.splice(favoriteCarIndex, 1);
			}
		},
	},
});

export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice;
