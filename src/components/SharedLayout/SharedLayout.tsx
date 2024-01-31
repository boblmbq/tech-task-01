import { Outlet } from 'react-router-dom';
import Container from '../Container';
import Header from '../Header';

function SharedLayout() {
	return (
		<>
			<Header />

			<section>
				<Container>
					<Outlet />
				</Container>
			</section>
		</>
	);
}

export default SharedLayout;
