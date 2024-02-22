import { Link } from 'react-router-dom';
import Container from 'components/Container';

function Header() {
	return (
		<header>
			<Container>
				<nav>
					<ul>
						<li>
							<Link to='home'>home</Link>
						</li>
						<li>
							<Link to='catalog'>catalog</Link>
						</li>
						<li>
							<Link to='favorites'>favorites</Link>
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
