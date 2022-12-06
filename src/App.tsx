import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import FavoritePage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/favorites' element={<FavoritePage />} />
			</Routes>
		</>
	);
}

export default App;
