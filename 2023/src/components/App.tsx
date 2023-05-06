import React from 'react';
import './App.scss';
import { useAppSelector } from '../state';
import LoginPage from './login-page/LoginPage';
import CollectionPage from './collection-page/CollectionPage';
import Header from './header/Header';

function App() {
	const isLoggedIn: boolean = useAppSelector(state => state.login.isLoggedIn);

	let page = <LoginPage />;
	if (isLoggedIn) {
		page = <CollectionPage />;
	}

	return (
		<div className="App">
			<Header />
			{ page }
		</div>
	);
}

export default App;
