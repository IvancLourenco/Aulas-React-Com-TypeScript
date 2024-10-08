import { useState } from 'react'


function App() {
  const[input,setInput] = useState("");
  const[tasks, setTasks] = useState(['Estudar Typescript com React',
  'Comprar massa de pastel', 
  'Estudar ingles de noite'
])

function handleRegister(){
  if(!input){
    alert("Digite algo")
    return
  }
  setTasks(tarefas => [...tarefas, input])
  setInput("")
}

  return (
  <div>
    <h1>Lista De Tarefas</h1>
    <input
    placeholder='Digite uma tarefa'
    value={input}
    onChange={(e) => setInput(e.target.value)} />

    <button onClick={handleRegister} >Adicionar Tarefas</button>

    <hr />
    {tasks.map((item, index ) => (
      <section key={item}>
        <span>{item}</span>
        <button>Excluir</button>
      </section>
    ) )}
  </div>
  )
}

export default App
