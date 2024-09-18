import './header.css';

interface HeaderProps{
    title?: string;
}

export function Header({title = "Curso React + TypeScript 2"}: HeaderProps){
    return(
        <header className='header'>
            <h1 className='title'>{title}</h1>

            <hr />
        </header>
        
    )
}