import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import MovieDescription from "./Components/MovieDescription/MovieDescription";
import NavBar from "./Components/NavBar/NavBar";

const Home = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/movie/:id' element={<MovieDescription />} />
			</Routes>
		</div>
	);
};

export default Home;
