import { TextField } from '@mui/material';
import React, { useState } from 'react'
import useStyles from './SearchStyle.ts'
const Search = () => {
    console.log('Search.....');
    const classes = useStyles();
    const [query, setQuery] = useState('')
    const handleKey = (event) => {}
    
  return (
    <div className={classes.searchContainer}>
    <TextField onKeyDown={ handleKey }
    value={query}
    onChange= {(e) => setQuery(e.target.value)}
    variant="standard"
    Input={{ className: classes.input,}}
    >

    </TextField>
    </div>
  )
}

export default Search