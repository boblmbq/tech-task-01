import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container';
import Header from '../Header';

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
