import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './state';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const rootElement: HTMLElement = document.getElementById('root');
const root: Root = createRoot(rootElement);
root.render(
	<Provider store={ store }>
		<App />
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Change `unregister` to `register` to enable the service worker.
// If enabled, the app will be available offline. However, any
// updates to the app will require users to open, then refresh the app.
serviceWorkerRegistration.unregister();
