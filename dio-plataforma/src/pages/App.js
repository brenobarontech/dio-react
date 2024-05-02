
import { Home }  from './home/index'
import  { Login } from './login/index'
import  { Feed } from './feed/index'
import  { Cadastro } from './cadastro/index'
import  { Teste } from './index'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
   
	<Router>
		<Routes>
			<Route path="/" element={<Home />}  /> 
			<Route path="/login" element={ <Login /> } />	
			<Route path="/feed" element={<Feed />} />			
			<Route path="/cadastro" element={<Cadastro />} />			
			<Route path="/teste" element={<Teste />} />			
		</Routes>
	</Router>
  );
}

export default App;
