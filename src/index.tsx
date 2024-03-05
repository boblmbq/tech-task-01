import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { store } from './redux/store/store';
import { router } from './router';

const persistedStore = persistStore(store);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistedStore}>
			<RouterProvider router={router} />
		</PersistGate>
	</Provider>
);
