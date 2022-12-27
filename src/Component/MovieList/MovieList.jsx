import { Grid } from '@mui/material'
import React from 'react'
import Movie from "../Movie/Movie"
import useStyles from './MovieListStyle.ts'

const MovieList = ( {movies} ) => {
    const {classes} = useStyles();
    console.log(movies.results);
  return (
    <Grid container className={classes.moviesContainer}>
            {
              movies.results.map((movie, i) => (
                <Movie key={i} movie={movie} i={i} /> 
              ))
            }
    </Grid>
  )
}

export default MovieList
{/* <Movie key={i} movie={movie} i={i} /> */}