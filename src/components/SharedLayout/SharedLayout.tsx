import Container from 'components/Container';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
	return (
		<>
			{/* <Header /> */}
			<main>
				<section>
					<Container>
							<Outlet />
					</Container>
				</section>
			</main>
		</>
	);
}

export default SharedLayout;
