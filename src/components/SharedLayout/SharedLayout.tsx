import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { SectionStyled } from './SharedLayout.styled';

function SharedLayout() {
	return (
		<>
			<Header />
			<main>
				<SectionStyled>
					<Container>
						<Outlet />
					</Container>
				</SectionStyled>
			</main>
			<Footer />
		</>
	);
}

export default SharedLayout;
