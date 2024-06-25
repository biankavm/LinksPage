import {Link} from 'react-router-dom'
import './header.css'
function Header(){
    return(
        <header>
            <Link to='/' className='title'> Bookos </Link>
            <Link to='/favoritos' className='favoritos'> Meus Livros </Link>

            <div className='infos'>
                <Link to='/sobre' className='sobre'> Sobre </Link> |
                
                <Link to='/contato' className='contato'> Contato </Link>
            </div>
            
        </header>
    );
}

export default Header;