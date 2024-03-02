import { Suspense, lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const SharedLayout = lazy(() => import('./components/SharedLayout'));
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Navigate to='/' />,
	},
	{
		path: '/shr',
		element: (
			<Suspense fallback="loading">
				<SharedLayout />
			</Suspense>
		),
		errorElement: <Navigate to='/' />,
		children: [
			{
				path: 'catalog',
				element: <Catalog />,
			},
			{
				path: 'favorites',
				element: <Favorites />,
			},
		],
	},
]);
