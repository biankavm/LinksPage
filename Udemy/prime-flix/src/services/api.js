//Ao invés de usar o fetch para realizar as requisições HTTP, usaremos o AXIOS. Para isso, temos que instalá-lo com npm install axios.
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'

});

export default api;