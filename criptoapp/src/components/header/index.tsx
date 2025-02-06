import styles from "./header.module.css"
import logoimg from "../../assets/logo.svg"
import { Link } from "react-router"

export function Header(){
    return(
        <header className={styles.container}>
            <Link to="/">
            <img src={logoimg} alt="Logo criptoApp" />
            </Link>
            
        </header>
        
    )
}