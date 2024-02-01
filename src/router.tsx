import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import { lazy } from 'react';

const SharedLayout = lazy(() => import('./components/SharedLayout'));
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <SharedLayout />,
		errorElement: <Navigate to='/' />,
		children: [
			{
				index: true,
				element: <Home />,
			},
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