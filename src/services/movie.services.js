import axios from 'axios'

const headers = {
    'X-RapidAPI-Key': 'e2593c173emshecc51b5dce7b240p132ec5jsn98ebe2c78b9e',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
}

export class MovieService {



    static async getMovies(page) {
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles',
            params: {
                page
            },
            headers
        };
        try {
            const response = await axios.request(options);
            console.log(response.data.results);
            if (response.data) {
                console.log('im here')
                return response.data.results
            }
        } catch (error) {
            console.error(error)
        }
    }

    static async getMovie(id) {
        const options = {
            method: 'GET',
            url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
            headers
        };
        try {

            const response = await axios.request(options);
            if (response.data) {
                return response.data.results
            }
        } catch (error) {
            console.error(error)
        }
    }
}