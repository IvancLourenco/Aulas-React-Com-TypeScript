import styles from "./home.module.css"
import {BsSearch} from "react-icons/bs"
import{Link} from "react-router"

export function Home(){
  return(
    <main className={styles.container}>
      <form className={styles.form}>
        <input
         type="text"
         placeholder="Digite o nome da moeda... Ex bitcoin"
        />
        <button type="submit">
          <BsSearch size={30} color="#fff"/>
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
            <th scope="col">Mudança 24 horas</th>
          </tr>
        </thead>

        <tbody id="tbody">
          <tr className={styles.tr}>
            <td className={styles.tdlabel} data-Label= "Moeda">
             <div className={styles.name}>
             <Link to={"/detail/bitcoin"}>
              <span>Bitcoin</span> | BTC
             </Link>
             </div>
            </td>

            <td className={styles.tdlabel} data-Label= "Valor mercado">
              1T
            </td>

            <td className={styles.tdlabel} data-Label= "Preço">
              8.000
            </td>

            <td className={styles.tdlabel} data-Label= "Volume">
              2B
            </td>

            <td className={styles.tdlabel} data-Label= "Mudança 24 horas">
               <span>1.20</span>
            </td>

          </tr>
        </tbody>
      </table>
    </main>
  )
}