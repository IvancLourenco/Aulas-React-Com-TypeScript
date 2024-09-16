export default function App(){
    return (
      <div>
        <h1>Meu primeiro Projeto</h1>

        <Aluno nome="Kamila"/>
        
        <Aluno nome="Ivan"/>
      </div>
    )
}

interface AlunoProps{
  nome: string;
}

function Aluno({nome}: AlunoProps){
  return (
    <h1>Aluno:{nome}</h1>
  )
}