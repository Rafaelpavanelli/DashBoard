import Logar from "../../Components/Logar"
import {Link} from "react-router-dom"
import logo from "./image/unnamed.png"

import './login.css'
import { useState } from "react"
function Login(){
  const[Email,setEmail]=useState('')
  const[Senha,setSenha]=useState('')
  
  return(
    <div className="Login-area">
    <div>
      
    </div>
    <form>
    <img src={logo}/>
      <h1>Login</h1>
      <input type="text" name="email" placeholder="Email"  onChange={e => setEmail(e.target.value)} />
      <input type="text" name="email" placeholder="senha"  onChange={e => setSenha(e.target.value)}/>
      <div className="button">
      <button id="button1" onClick={Logar(Email,Senha)}
        
      >Login</button>
      
    <Link  id="button2" to={"/Cadastrar"}>Cadastrar</Link>

     
      </div>
    </form>
    
    </div>
  )

}
export default Login;