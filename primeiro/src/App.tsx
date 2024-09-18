import { Header } from './components/header'
import {Aluno} from './components/aluno'
import {Footer} from './components/footer'

export default function App(){
    return (
      <div>
       
       <Header title='Alunos do React + TypeScript' />

        <Aluno nome="Kamila" idade={35}/>
        <Aluno nome="Fabiana" idade={42}/>
        <Aluno nome="Ivan" idade={26}/>

        <Footer/>
      </div>
    )
}

