import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import SharedLayout from './components/SharedLayout';
import Catalog from './pages/Catalog';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "favorites",
        element: <Catalog />,
      },
    ],
  },
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
