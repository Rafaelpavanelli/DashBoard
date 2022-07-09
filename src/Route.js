import {BrowserRouter,  Route,Routes} from "react-router-dom";
import Cadastrar from "./pages/Cadastro";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";




function RouteApp(){
  return(
   < BrowserRouter>
<Routes>
  <Route path="/navbar" element={<Navbar/>}/>
  <Route path="/DashBoard" element={<DashBoard/>}/>
  <Route path="/" element={<Login/>}/>
  <Route path="/Cadastrar" element={<Cadastrar/>}/>
 
</Routes>
</BrowserRouter>
  )
}
export default RouteApp;