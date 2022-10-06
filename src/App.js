import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/FixedLayout/Header';
import Home from './Components/Pages/Page_Home';
import Film from './Components/Pages/Page_Film';
import Session from './Components/Pages/Page_Session';
import Sucess from './Components/Pages/Page_Sucess';

import './App.css';


function App() {


	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/filme/:id' element={<Film />} />
				<Route path='/session/:id' element={<Session />} />
				<Route path='/sucesso' element={<Sucess />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
