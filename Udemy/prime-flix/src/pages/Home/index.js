import { useEffect, useState } from "react"; // useEffect serve para toda vez que o site for aberto, carregar os filmes da API
                                            //  useState guarda os filmes numa state
import './home.css'
import {Link} from 'react-router-dom'
import api from '../../services/api'
function Home(){
    // definindo states
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       async function carregaFilmes(){
        const resposta = await api.get('movie/now_playing', {
            params: {
                api_key: '71131a81c0265bdc0aed3c0fbf1fc335',
                language: 'pt-BR',
                page: 1,
            }
        }) // await espera o resultado da requisição para prosseguir. 
        //console.log(resposta.data.results.slice(0, 10)) //-> pega os primeiros 10 resultados dos dados da resposta
        setFilmes(resposta.data.results.slice(0, 10));
        setLoading(false);
       }

       carregaFilmes();
        

    }, []);

    if (loading){
        
        return(
            <div className="loading">
                <h1> Carregando filmes... </h1>
            </div>
        )
    }

    return(

        <div className="container">
            <div className="lista-filmes">
               {filmes.map( (filme) => {
                
                return(
                    <article key={filme.id} className="post">
                        <strong className="titulo"> {filme.title }</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} className="imagem"/> 
                        <Link to={`/filme/${filme.id}`} className="link"> Acessar </Link>

                    </article>

                )



               })}
            </div>
        </div>
    );
}

export default Home;