import Container from 'components/Container';
import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
	return (
		<>
			{/* <Header /> */}
			<main>
				<section>
					<Container>
						<Suspense fallback='loading'>
							<Outlet />
						</Suspense>
					</Container>
				</section>
			</main>
		</>
	);
}

export default SharedLayout;
