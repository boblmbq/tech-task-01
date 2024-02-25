import CarsList from 'components/CarsList/CarsList';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/Favorites';
import EmptyFavorites from 'components/EmptyFavorites/EmptyFavorites';
import CenteredContainer from 'components/Container/CenteredContainer/CenteredContainer';

function Favorites() {
	const favoriteCars = useSelector(selectFavorites);
	if (favoriteCars.length === 0) {
		return <CenteredContainer children={<EmptyFavorites />}/>
	}
	return <CarsList data={favoriteCars} />;
}

export default Favorites;
