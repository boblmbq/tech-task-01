import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { store } from './redux/store/store';
import { router } from './router';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

console.log('index.tsx');

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
