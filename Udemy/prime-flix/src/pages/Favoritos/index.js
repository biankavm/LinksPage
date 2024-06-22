import { useEffect, useState } from 'react'; // o useEffect é usado para quando o componente for montado, buscar no localStorage
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import './favoritos.css'

function Favoritos(){

    const [filmes, setFilmes] = useState([]); 

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix"); // devolve a string com a lista de filmes
        setFilmes(JSON.parse(minhaLista) || []) // transforma em objeto json, (|| [] significa que se não tiver nada no localStorage, recebe array vazio)
    }, []);


    function excluirFilme(id){
        let filtroFilmes = filmes.filter((filme) => {
            return(filme.id != id); // retorna todos os filmes com exceção do que está sendo clicado
        });
        setFilmes(filtroFilmes); // remove da state
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes)); // remove do local storage
        toast.success("Filme removido com sucesso.")

    }

    return(
        <div className='meus-filmes'>
            <h1> Meus Filmes </h1>
            {filmes.length == 0 &&
            
                <span> Você não possui nenhum filme salvo :( </span>
            }
            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id}>
                             <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <span> {filme.title} </span>

                            <div> 
                                <Link to={`/filme/${filme.id}`}> Ver detalhes </Link>
                                <button onClick={() => excluirFilme(filme.id)}> Excluir </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}


export default Favoritos;