
// TMDB 


const API_KEY = '7d223957fdc67146992babd39bd497a2';
const API_BASE =  'https://api.themoviedb.org/3';
// const API_URL = API_BASE + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc' + API_KEY;
/*
 - originais do Prime Video
 - recomendados
 - em alta 
 - ação
*/
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
        getHomeList: async() => {
                return [
                    {
                    slug: 'originals',
                    title: 'Assista a seguir',
                    items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'trending',
                    title: 'Series Amazon Originals e exclusivas',
                    items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'toprated',
                    title: 'Filmes que achamos que você vai curtir',
                    items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'action',
                    title: 'Ação',
                    items:await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'comedy',
                    title: 'Comédia',
                    items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'horror',
                    title: 'Terror',
                    items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'romance',
                    title: 'Romance',
                    items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'documentary',
                    title: 'Documentario',
                    items:await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
                },
            ]
        },

        // getInfantilList: async() => {
        //     return [
        //       {
        //         slug: 'originals',
        //         title: 'Assista a seguir',
        //         items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        //       },
        //     ]
        //   },


        



        getMovieInfo : async (movieId, type) =>{
            let info = {};
            if(movieId) {
                switch(type){
                    case 'movie':
                        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                     case 'tv':
                        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                    default:
                        info = null;
                    break;
                }
            }
    
             return info;
        }
    }
    


   

