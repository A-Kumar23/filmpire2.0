import React from 'react'
import { Link, useParams } from 'react-router-dom';
import useStyles from './MovieInformationStyle.ts';
import genreIcons from "../../assets/genres";
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCatagory';
import { useGetMovieByIdQuery, useGetRecommendationQuery, useGetSimilarQuery } from '../../service/TMDB';
import MovieIcon from '@mui/icons-material/Movie';
import { Box, Button, ButtonGroup, CircularProgress, Grid, Rating, Typography } from '@mui/material';
import { Language, Theaters } from '@mui/icons-material';
import MovieList from '../MovieList/MovieList';

const MovieInformation = () => {

const {classes} = useStyles();
const {id} = useParams();
const { data, isFetching, error} = useGetMovieByIdQuery(id);
console.log(data,'data');
console.log(isFetching, 'isFetching');
const dispatch = useDispatch();
const { data: recommendations, isFetching: isRecommendationFetching } = useGetRecommendationQuery(id);
const { data: similar, isFetching: isSimilarFetching } = useGetSimilarQuery(id);
console.log(similar, 'rec');
console.log(isSimilarFetching, 'isFetching');
if(isFetching) {
  <Box display='flex' justifyContent='center'>
    <CircularProgress size='8rem'/>
  </Box>
}
if(error) {
  <Box display='flex' justifyContent='center'>
    <Link to='/'>Eroor Plese Go Back </Link>
  </Box>
}
  return (
     <Grid container className={classes.containerSpaceAround}>
     <Grid item sm={12} lg={4}>
      <img 
        className={classes.poster}
        src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
        alt={data?.title}

      />
     </Grid>
     <Grid item container direction='column' lg={7}>
      <Typography variant='h3' align='center' gutterBottom>
        {data?.title}({data?.release_date.split('-')[0]})
      </Typography>
      <Typography variant='h5' align='center' gutterBottom>
        {data?.tagline}
      </Typography>
      <Grid item container className={classes.containerSpaceAround}>
      <Box display='flex' align='center'>
        <Rating readOnly value={data?.vote_average / 2}/>
        <Typography variant='subtitle1' gutterBottom style={{marginLeft: '10px'}}>
          {data?.vote_average.toFixed(1)} / 10 
        </Typography>
      </Box>
      <Typography variant='h6' align='center' gutterBottom>
        { data?.runtime}min 
        {data?.spoken_languages.length > 0 ? ` / ${data?.spoken_languages[0].name}` : '' }
      </Typography>
      </Grid>
      <Grid item className={classes.genreContainer}>
      
        {
          data?.genres?.map((genre) =>(
            <Link key={genre.name} className={classes.links} to='/' onClick={ () => dispatch(selectGenreOrCategory(genre.id))}>
            <img src={genreIcons[genre.name.toLowerCase()]} className={classes.genreImage} height={30} />
            <Typography color='textPrimary' variant='subtitle1'>
              {genre?.name}
            </Typography>
            </Link>
            
          ))
        }
      </Grid>
      <Typography variant='h5' gutterBottom style={{marginTop: '10px'}}>
      Overview
      </Typography>
      <Typography style={{marginBottom: '10px'}}>
        { data?.overview}
      </Typography>
      <Typography variant='h5' gutterBottom >
        Top Cast
      </Typography>
      <Grid item container spacing={2}>
        {
          data && data.credits.cast.map((character, i) => (
            character.profile_path && (
            <Grid key={i} item xs={4} md={2}  style={{textDecoration: 'none'}} underline="hover" component={Link} to='/'>
              <img className={classes.castImage} 
              src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} 
              alt={character.name}
              />
              <Typography color='textPrimary'  >{character?.name}</Typography>
              <Typography color='textSecondary' >{character.character.split('/')[0]}</Typography>
            </Grid>)
          )).slice(0,6)
        }
      </Grid>
      <Grid item container style={{marginTop: '2rem'}}>
        <div className={classes.buttonContainer}>
        <Grid item xs={12} sm={6} className={classes.buttonContainer}>
        <ButtonGroup size='medium' variant='outlined'>
        <Button target='blank' rel='noopener noreferrer' href={data?.homepage} endIcon={ <Language/>}>WebSite</Button>
        <Button target='blank' rel='noopener noreferrer' href={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={ <MovieIcon/>}>IMDB</Button>
        <Button onClick={() => ('')} href="#" endIcon={ <Theaters/>}>Trailers</Button>
        </ButtonGroup>
        </Grid>
        </div>
      </Grid>
     </Grid>
     <Box marginTop='5rem' width='100%'>
        <Typography variant='h3' gutterBottom align='center'>You May Also Like</Typography>
     
        {
          recommendations ? <MovieList movies={recommendations}/> : <Box>Sorry</Box>
        }
     </Box>
     <Box marginTop='5rem' width='100%'>
        <Typography variant='h3' gutterBottom align='center'>similar</Typography>
     
        {
          recommendations ? <MovieList movies={similar} /> : <Box>Sorry</Box>
        }
     </Box>
     </Grid>
  )
}

export default MovieInformation