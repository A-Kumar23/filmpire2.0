import { Grid, Grow, Rating, Tooltip, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import useStyle from "./MovieStyle.ts"

const Movie = ({ movie, i }) => {

  const { classes } = useStyle();
  return (
    <Grid item xs={12} sm={6} md={6} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.link} to={`/movie/${movie.id}`}>
          {movie.poster_path
            ? <img alt={movie.title} className={classes.image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /> :
            <img alt={movie.title} className={classes.image} src={
              `https://www.fillmurry.com/200/300`
            } />
          }
          <Typography className={classes.title} variant='h6'>
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
          <Rating readOnly value={movie.vote_average / 2} precision={0.1}/>

            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  )
}

export default Movie