import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tmbdApiKey = process.env.REACT_APP_TMBD_KEY;

export const tmbdAPI = createApi(
    {
        reducerPath: 'tmbdAPI',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
        endpoints: (builder) => (
            {

                // Get Genres
                getGenres: builder.query(
                    {
                        query: () => `genre/movie/list?api_key=${tmbdApiKey}`,
                    }
                ),
                // Get Movie by Type
                getMovie: builder.query({
                    query: ({ genreIdOrCategoryName, page, searchQuery}) => { 

                        // Get Movie by searchQuery
                        if(searchQuery) {
                            return `search/movie?query=${searchQuery}&page=${page}&api_key=${tmbdApiKey}`;
                        }

                        // Get Movie by category name
                        if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                            return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmbdApiKey}`;
                        }
                        //  Get Movie by genre name
                       
                        if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                            return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmbdApiKey}`;
                        }
                        // Get Popular Movie 
                        return `movie/popular?page=${page}&api_key=${tmbdApiKey}`},
                }),
                // Get Movie

                getMovieById: builder.query({
                    query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmbdApiKey}`
                }),

                // Get Recommendation Movie
                getRecommendation: builder.query({
                    query: (id) => `movie/${id}/recommendations?api_key=${tmbdApiKey}`
                    
                }),

                // Get similar Movie
                getSimilar: builder.query({
                    query: (id) => `movie/${id}/similar?api_key=${tmbdApiKey}` 
                }),

                // Get person Details

                getPersonDetails: builder.query({
                    query: (id) => `person/${id}?api_key=${tmbdApiKey}`
                }),

                //Get movie by actors id
                getMovieByActorId: builder.query({
                    query: (id, page) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmbdApiKey}`, 
                })
            }
        )
    }
)

export const {
    useGetMovieQuery,
    useGetGenresQuery,
    useGetMovieByIdQuery,
    useGetRecommendationQuery,
    useGetSimilarQuery,
    useGetPersonDetailsQuery,
    useGetMovieByActorIdQuery,
} = tmbdAPI;