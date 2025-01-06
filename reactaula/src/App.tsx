import{ useState } from "react";
import './App.css'
import logoImg from "./assets/logo.png"

function App() {
  const [textofrase, setTextofrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id:1,
      nome:"Motivação	",
      frases: [
        "Se você não tentar você não ganha",
        "Se liga nessa play",
        "Marcos vai jogar de Homem-aranha",
        "To AFK base não tem Healer"

      ]
    },
    {
      id:2,
      nome:"Bom dia",
      frases:[
        "Bom dia ponte da bandeirantes",
        "Você tem 2 minutinhos e coisa rapida?",
        "Aqui não esta funcionando",
        "Você consegue colocar esse botão na cor roxa?"
      ]
    }
  ]
  function handleSwitchCategory(index:number){
    setCategoriaSelecionada(index);
  }
  function gerarFrase(){
    const numeroAleatorio =Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextofrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`);
  }

  return (
   
      <div className="container">
        <img src={logoImg} alt="logo frases" className= "logo" />

        <h2 className="title">Categorias</h2>
        <section className="category-area">
          {allFrases.map(( item, index ) => (
            <button 
            key={item.id}
            className="category-button"
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={ () => handleSwitchCategory(index)}
            >

              {item.nome}
            
            </button>
          ) )}
        
        </section>

        <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

       {textofrase !== "" &&  <p className="textoFrase">{textofrase}</p>}
        
      </div> 
     
    
  )
}

export default App
