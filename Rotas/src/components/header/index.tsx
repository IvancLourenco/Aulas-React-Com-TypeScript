import { Link } from "react-router";
import "./header.css"

export function Header(){
    return(
        <header>
            <h2>Header da página</h2>

            <div>
                    <Link to="/"> Home</Link>
                    <Link to="/contato"> Contato</Link>
                    <Link to="/sobre">Sobre</Link>
            </div>

        </header>
    )
}