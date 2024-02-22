import Container from 'components/Container';
import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
	return (
		<>
			<Header />
			<section>
				<Container>
					<Suspense fallback='loading'>
						<Outlet />
					</Suspense>
				</Container>
			</section>
		</>
	);
}

export default SharedLayout;
