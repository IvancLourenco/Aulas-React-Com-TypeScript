import { useState, useEffect, useRef } from 'react'


function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);

  const[input,setInput] = useState("");
  const[tasks, setTasks] = useState<string[]>([])

  const [editTask, setEditTask] = useState({
  enabled: false,
  task:''
})

useEffect(() => {
  const tarefasSalvas = localStorage.getItem("@cursoreact")
  if (tarefasSalvas) {
    setTasks(JSON.parse(tarefasSalvas))
  }
  
  
},[])

useEffect(() => {
  if(firstRender.current) {
    firstRender.current= false;
    return;
  }

  localStorage.setItem("@cursoreact", JSON.stringify(tasks))
  console.log("UseEffect foi chamado")

},[tasks]);

function handleRegister(){
  if(!input){
    alert("Digite algo")
    return
  }
    if(editTask.enabled){
      handleSaveEdit();
      return;
    }


  setTasks(tarefas => [...tarefas, input])
  setInput("")
 
}
function handleSaveEdit(){
  const findIndexTask = tasks.findIndex(task => task === editTask.task)
  const allTasks = [...tasks];
  allTasks[findIndexTask] = input;
  setTasks(allTasks);

  setEditTask({
    enabled: false,
    task: ''
  })
  setInput("")
 
}

function handleDelete(item:string){
  const removeTask = tasks.filter(task => task !== item)
  setTasks(removeTask)
  
}

function handleEdit(item:string){
  inputRef.current?.focus()

  setInput(item)
  setEditTask({
    enabled: true,
    task: item
  })
}

  return (
  <div>
    <h1>Lista De Tarefas</h1>
    <input
    placeholder='Digite uma tarefa'
    value={input}
    onChange={(e) => setInput(e.target.value)}
    ref={inputRef}
    />

    <button onClick={handleRegister}>{editTask.enabled ? "Atualizar tarefa" : "Adicionar tarefa"}</button>

    <hr />
    {tasks.map((item) => (
      <section key={item}>
        <span>{item}</span>
        <button onClick={() => handleEdit(item)}>Editar</button>
        <button onClick={() => handleDelete(item)}>Excluir</button>
      </section>
    ) )}
  </div>
  )
}

export default App
