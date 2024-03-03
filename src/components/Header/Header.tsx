import Container from 'components/Container';
import { Link } from 'react-router-dom';
import { LinkWrapper, Ul } from './Header.styled';

function Header() {
	return (
		<header>
			<Container>
				<nav>
					<Ul>
						<LinkWrapper>
							<Link to='/shr/catalog'>Catalog</Link>
						</LinkWrapper>
						<LinkWrapper>
							<Link to='/shr/favorites'>Favorites</Link>
						</LinkWrapper>
					</Ul>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
