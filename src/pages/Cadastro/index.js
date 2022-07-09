import "./cadastro.css"
import {Link} from "react-router-dom"
function Cadastrar(){
  return(
    <div className="Cadastro-area">
  <form>
    
      <h1>Cadastrar</h1>
      <input type="email" name="email" placeholder="Email"  />
      <input type="password" name="Password" placeholder="Password" />
      <input type="text" name="Nome" placeholder="nome" />
      <input type="sobrenome" name="sobrenome" placeholder="sobrenome" />
      <div className="button">
      <button id="button1">Cadastrar</button>
      <Link to="/" id="button1">Voltar</Link>
      
   

     
      </div>
    </form>
    
    </div>
  )}

export default Cadastrar;