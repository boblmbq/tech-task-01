import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
	return (
		<>
			<Header />
			<main>
				<section>
					<Container>
						<Outlet />
					</Container>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default SharedLayout;
