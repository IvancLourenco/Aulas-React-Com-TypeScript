import { FormEvent, useState, useEffect } from "react"
import styles from "./home.module.css"
import {BsSearch} from "react-icons/bs"
import{Link, useNavigate} from "react-router"

interface CoinProps{
  id:string;
  name:string;
  symbol:string;
  priceUsd:string;
  vwap24Hr:string;
  changePercent24Hr:string;
  rank:string;
  supply:string;
  maxSupply:string;
  marketCapUsd:string;
  volumeUsd24Hr:string;
  explorer:string;
}

interface DataProp{
  data:CoinProps[]
}

export function Home(){
  const [input, setInput] = useState("")
  const [ coins, setCoins] = useState<CoinProps[]>([]);

  const navigate= useNavigate()

  useEffect(()=> { 
    getData();
  },[])

  async function getData(){
    fetch("https://api.coincap.io/v2/assets?limit=10&offset=0")
    .then(response => response.json())
    .then((data:DataProp) => {
      const coinsData = data.data;

      const price = Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
      })

      const formatedResult = coinsData.map((item) => {
        const formated = {
          ...item,
          formatedPrice:price.format(Number(item.priceUsd)),
          formatedMarket:price.format(Number(item.marketCapUsd))
        }
        return formated;
      })
      console.log(formatedResult);
    })
  }

  function handleSubmit(e: FormEvent){
    e.preventDefault();

    if(input === "") return;

    navigate(`/detail/${input}`)

  }

  function handleGetMore(){
    alert("Teste")
  }

  return(
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
         type="text"
         placeholder="Digite o nome da moeda... Ex bitcoin"
         value={input}
         onChange={(e) => setInput(e.target.value) }
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

            <td className={styles.tdLoss} data-Label= "Mudança 24 horas">
               <span>1.20</span>
            </td>

          </tr>
        </tbody>
      </table>

      <button className={styles.buttonMore} onClick={handleGetMore}>
        Carregar mais
      </button>
    </main>
  )
}