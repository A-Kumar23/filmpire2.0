import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useGetMovieQuery } from '../../service/TMDB'
import MovieList from '../MovieList/MovieList';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';

const Movies = () => {
  const [page, setPage] = useState(1)
  const  {genreIdOrCategoryName, searchQuery}  = useSelector((state) => state.currentGenreOrCatagory); 
  const { data, error, isFetching } = useGetMovieQuery({genreIdOrCategoryName, page, searchQuery});

  if(isFetching) {
    return (
      <Box display='flex' justifyContent='center'>
          <CircularProgress size='5rem'/>
      </Box>
    )
  }
  if(!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt='20px'>
          <Typography variant='h4'>No Movie Found</Typography>
      </Box>
    )
  }

  if(error) {
    return ('Error: ')
  }
  
  return (
    <div>
      <MovieList movies={data}/>
      <Pagination currentPage={page} setPage={setPage} totalPage={data.total_page}/>
    </div>
  )
}

export default Movies