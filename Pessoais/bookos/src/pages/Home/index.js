import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import api from '../../services/api'

function Home(){
    // definindo states
    const [livros, setLivros] = useState([]);
    
    return(
        <div>
            <h1> Opa! </h1>
        </div>
    );
}

export default Home;