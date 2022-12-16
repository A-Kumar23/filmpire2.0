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
                    query: ({ genreIdOrCategoryName, page}) => { 
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
                })

            }
        )
    }
)

export const {
    useGetMovieQuery,
    useGetGenresQuery,
} = tmbdAPI;