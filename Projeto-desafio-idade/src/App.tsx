import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState<string>(""); // Nome do usuário
  const [dataDeNascimento, setDataDeNascimento] = useState<string>(""); // Data de nascimento
  const [idade, setIdade] = useState<number | null>(null); // Idade calculada

  // Função para calcular a idade
  function calcularIdade(dataDeNascimento: string) {
    const anoReferencia = 2025;

    // Garantir que a data seja válida
    const nascimento = new Date(dataDeNascimento);
    if (isNaN(nascimento.getTime())) {
      alert("Data inválida!");
      return;
    }

    const anoNascimento = nascimento.getFullYear();
    const idadeCalculada = anoReferencia - anoNascimento;

    setIdade(idadeCalculada);

    console.log("Ano de Nascimento:", anoNascimento);
    console.log("Idade Calculada:", idadeCalculada);
  }

  // Função de validação e execução do cálculo
  function handleRegister() {
    if (!input) {
      alert("Digite seu nome.");
      return;
    }
    if (!dataDeNascimento) {
      alert("Digite sua data de nascimento.");
      return;
    }

    // Chama a função de cálculo de idade
    calcularIdade(dataDeNascimento);
  }

  return (
    <div className="container">
      <h1>Descubra sua idade</h1>
      <section className="sessao-input">
        <input
          placeholder="Digite seu nome"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="date"
          placeholder="Digite sua data de nascimento"
          value={dataDeNascimento}
          onChange={(e) => setDataDeNascimento(e.target.value)}
        />
        <button onClick={handleRegister}>Calcular Idade</button>
      </section>

      {/* Exibir a idade ou mensagem de erro */}
      {idade !== null ? (
        <p className="resposta">Sua idade em 2025 será: {idade} anos</p>
      ) : (
        <p className="resposta">Por favor, calcule sua idade.</p>
      )}
    </div>
  );
}

export default App;
