import { css } from "jquery";
import {Link} from "react-router-dom"
import './login.css'
function Login(){
  return(
    <div className="Login-area">
    
    <form>
      <h1>Login</h1>
      <input type="text" name="email" placeholder="Email"  required/>
      <input type="text" name="email" placeholder="senha" required/>
      <div className="button">
      <button>Logar</button>
      <button>cadastrar</button>
      </div>
    </form>
    
    </div>
  )

}
export default Login;