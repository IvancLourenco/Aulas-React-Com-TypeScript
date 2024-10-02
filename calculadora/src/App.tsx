
import './App.css'
import logoImg from './assets/logo.png'

function App() {
  
 return (
    <>
      <div>
       <main className='container'>
        <img
        className='logo' 
        src={logoImg}
         alt="Logo da calculadora de Gasolina x Alcool" />
         <h1 className='title'>Qual a melhor opção?</h1>

         <form  className='form'>
          <label>Alcool(preço por litro): </label>
          <input
            className='input'
            type="number"
            placeholder='4,90' 
            min="1"
            step="0.01"
            required
            />

          <label>Gasolina(preço por litro): </label>
          <input
            className='input'
            type="number"
            placeholder='4,90' 
            min="1"
            step="0.01"
            required
            />

          <input className='button' type="submit" value="Calcular" />
         </form>

       </main>
      </div>
      
    </>
  )
}

export default App
