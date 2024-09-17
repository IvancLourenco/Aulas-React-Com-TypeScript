export default function App(){
    return (
      <div>
        <h1>Meu primeiro Projeto</h1>

        <Aluno nome="Kamila" idade={35}/>
        
        <Aluno nome="Ivan" idade={26}/>
      </div>
    )
}

interface AlunoProps{
  nome: string;
  idade: number;
}

function Aluno({nome, idade}: AlunoProps){
  return (
    <><h1>Aluno:{nome}</h1>
    <h3>Idade:{idade}</h3></>
  )
}