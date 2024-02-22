import { useSelector } from 'react-redux';
import CarsList from 'components/CarsList/CarsList';
import { selectFavorites } from '../../redux/Favorites';

function Favorites() {
	const favoriteCars = useSelector(selectFavorites);
	return <CarsList data={favoriteCars} />;
}

export default Favorites;
