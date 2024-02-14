import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
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
		</header>
	);
}

export default Header;
