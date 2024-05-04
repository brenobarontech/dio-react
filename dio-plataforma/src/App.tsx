
import { Home }  from './pages/home/index'
import  { Login } from './pages/login/index'
import  { Feed } from './pages/feed/index'
import  { Cadastro } from './pages/cadastro/index'
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
	<>
		<Router>
			<Routes>
				<Route path="/" element={<Home/>} /> 
				<Route path="/login" element={ <Login /> } />	
				<Route path="/feed" element={<Feed />} />			
				<Route path="/cadastro" element={<Cadastro />} />			
				
			</Routes>
		</Router>	
	</>
   
  );
}

export default App;
