import { Link } from "react-router"

export function Sobre(){
    return (
        <div>
            <h1>Pagina Sobre</h1>

            <Link to='/'>home</Link><br />
            <Link to="/contato">Sobre</Link>
            
        </div>
    )

}