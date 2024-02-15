import { RootState } from '../store/store';
import { favoritesSliceName } from './favoritesSlice';

export const selectFavorites = (state: RootState) =>
	state[favoritesSliceName].favorites;
