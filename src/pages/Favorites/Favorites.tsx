import { useSelector } from 'react-redux';
import CarsList from '../../components/CarsList/CarsList';
import { selectFavorites } from '../../redux/carSlice/carSelectors';

function Favorites() {
	const favoriteCars = useSelector(selectFavorites);
	console.log(favoriteCars);
	return <CarsList data={favoriteCars} />;
}

export default Favorites;
