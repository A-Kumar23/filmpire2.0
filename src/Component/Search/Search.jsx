import { SearchOutlined } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import useStyles from './SearchStyle.ts'
import { searchMovie } from '../../features/currentGenreOrCatagory';
const Search = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [query, setQuery] = useState('')
    const handleKey = (event) => {
      if( event.key === 'Enter' ) {
          dispatch(searchMovie(query))
      }
    }
    
  return (
    <div className={classes.searchContainer}>
    <TextField onKeyDown={ handleKey }
    value={query}
    onChange= {(e) => setQuery(e.target.value)}
    variant="standard"
    InputProps={{ 
      className: classes.input,
      startAdornment: (
        <InputAdornment position='start' >
          <SearchOutlined/>
        </InputAdornment>
      )
      }}
    
    >
    </TextField>
    </div>
  )
}

export default Search