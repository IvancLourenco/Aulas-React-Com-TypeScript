import { Link } from "react-router"

export function Home(){
    return (
        <div>
            <h1>Bem vindo a Page home</h1>

            <Link to="/sobre">Sobre</Link>
            <br />
            <Link to="/contato">Contato</Link><br />
            <Link to="/produto">Produto</Link>
        </div>
    )

}