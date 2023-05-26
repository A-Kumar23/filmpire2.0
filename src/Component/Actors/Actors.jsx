import { ArrowBack } from '@mui/icons-material';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import {  useParams,  } from 'react-router-dom';
import { useGetPersonDetailsQuery, useGetMovieByActorIdQuery } from '../../service/TMDB'
import MovieList from '../MovieList/MovieList';
import useStyles from './ActorsStyle.ts';

const Actors = () => {
  
  const {classes} = useStyles()
  
  const {id} = useParams();
  const { data, isFetching, error } = useGetPersonDetailsQuery(id);
  const [page, setPage] = useState(1)
  const { data: movies} = useGetMovieByActorIdQuery(id, page)
  const date = new Date(data?.birthday).toDateString();
  
  console.log(setPage);
  if (isFetching) {
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress size='4rem' />
      </Box>
    )

  }
  if (error) {
    return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Button 
        startIcon={<ArrowBack/>} onclick={() => ('.')}
      >Go Back</Button>
    </Box>
    )
      ;
  }
  return (
    <>
    <Grid container spacing={3} >
       <Grid item lg={5} xl={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
          alt={data?.name}

        />
      </Grid>
      <Grid item container lg={7} xl={8} className={classes.container}>
        <Typography variant='h2' align='center' gutterBottom >
          { data?.name}
        </Typography>
        <Typography variant='h5' align='center' gutterBottom >
          Born: {date}
        </Typography>
        <Typography variant='body1' align='justify' gutterBottom >
          { data?.biography || 'No Biography Available'}
        </Typography>
        <Box marginTop={'4rem'} display='flex' justifyContent={'space-around'}>
          <Button variant='contained' color='primary' target='_blank' href={`https://www.imdb.com/name/${data?.imdb_id}`}>
            IMDB
          </Button>
        </Box>
      </Grid>
    </Grid>
    { console.log(page, 'page number') }
    <Box margin={'2rem 0'}>
      <Typography variant='h2' gutterBottom align='center'>Movies</Typography>
      { movies && <MovieList movies={movies} />}
      
    </Box>
    </>
  )
}

export default Actors