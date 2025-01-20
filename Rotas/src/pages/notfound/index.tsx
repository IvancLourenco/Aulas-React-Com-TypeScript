import { Link } from "react-router"

export function Notfound(){
    return(
        <div>
            <h1>Ops essa página nao existe!!</h1>
            <Link to="/">Acessar a pagina home</Link>
        </div>
    )
}