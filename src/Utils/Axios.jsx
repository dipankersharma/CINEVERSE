import axios from "axios";

const instance = axios.create(
    {
        baseURL:'https://api.themoviedb.org/3/',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWMyNTNmY2UwMzI0NTQ1YWUxNDYzNDQxZTU4MjMzNiIsInN1YiI6IjY2NTMwMjI3MTU2NDlkYzBjYjM0ZGU1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EbSr-dfQ32qM9mA65pF-4DHpDpzKMpFqPJ26K1i0bKc'
          }
    }
)

export default instance;