import { Link } from "react-router"

export function Contato(){
    return(
        <div>
            <h1> Bem vindo a pagina contatos</h1>
            <h3>Telefone:(xx)xxxx-xxxxx</h3>

            <Link to='/'>home</Link><br />
            <Link to="/sobre">Sobre</Link>
            
        </div>
    )
}