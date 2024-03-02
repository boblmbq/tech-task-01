import Arrow from 'icons/Arrow';
import { Link } from 'react-router-dom';
import { AdText } from './ChooseFirstCar.styled';
function ChooseFirstCar() {
	return (
		<AdText>
			Choose your first car <Arrow /> <Link to='/shr/catalog'>Catalog</Link>
		</AdText>
	);
}

export default ChooseFirstCar;
