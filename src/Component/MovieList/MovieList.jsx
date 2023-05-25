
import { Grid } from '@mui/material'
import React from 'react'
import Movie from "../Movie/Movie"
import useStyles from './MovieListStyle.ts'

const MovieList = ( { movies, numberOfMovie } ) => {
    const {classes} = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
            {
              movies.results.slice(0, numberOfMovie).map((movie, i) => (
                <Movie key={i} movie={movie} i={i} /> 
              )).slice(0,18)
            }
    </Grid>
  )
}

export default MovieList
{/* <Movie key={i} movie={movie} i={i} /> */}