import { useParams, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import {toast} from 'react-toastify' // para personalização dos alertas (primeiro configurar na App.js)
import api from '../../services/api'
import './filme.css'

function Filme(){
    
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate(); // o navigate serve para redirecionar o usuário para outra página.

    useEffect(() => {
       async function carregaFilme(){
            await api.get(`/movie/${id}`, {
                params:
                {
                  api_key: '71131a81c0265bdc0aed3c0fbf1fc335',
                  language: 'pt-BR',
                }
            })
            .then((resposta) => { // se encontrou o filme, faz isso
                setFilme(resposta.data);
                setLoading(false);
            })
            .catch(() => { // se não encontrou o filme, faz isso
                 navigate("/", {replace: true}); // redireciona usuário para home '/', replace para a url '/'.
                 return;
            })
            
        }

        carregaFilme();

        return () => {
            console.log('desmontei')
        }

    }, [navigate, id]); // o navigate e o id no final é opcional, mais para não ter erro de dependencias.

    if (loading){
        return(
            <div className='filme-info'>
                <h1> Carregando detalhes... </h1>
            </div>
        )
    }

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");
        // verificar se a lista de filmes existe:
        let filmesSalvos = JSON.parse(minhaLista) || [] // o localStorage.getItem retorna uma string com o array de filmes salvos. o JSON.parse converte essa string de volta para um objeto javascript.
       
        // verificar se algum filme na lista filmesSalvos possui o mesmo ID do filme que está sendo visualizado (filme.id)
        const resFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id == filme.id) // o filme.id já está na lista? retorna True ou False.

        if (resFilme){
            // filme já está na lista
           toast.warn("Esse filme já está na sua lista.")
        }
        else{
            // filme ainda não está a lista, vamos adicionar
            filmesSalvos.push(filme); // push coloca na lista 
            localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos)); // converte novamente o json para uma string, para que possamos salvar no localStorage
            toast.success("Filme salvo com sucesso!")
        }
        return;
    }

    return(
        <div className='filme-info'>
            <h1> {filme.title} </h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/> 
            <h3> Sinopse </h3>
            <span> {filme.overview} </span>
            <br/>

            <strong> Avaliação: {filme.vote_average} / 10 </strong>

            <div className='area-botoes'>
                <button onClick={salvarFilme}> Salvar </button>
                <button> 
                    <a href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`} target='blank' rel='external'> Trailer </a>
                </button>
            </div>
        </div> 
    );
}

export default Filme;