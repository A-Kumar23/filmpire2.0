import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useStyles from './SidebarStyle.ts';
import { useGetGenresQuery } from '../../service/TMDB';
import genreIcons from "../../assets/genres";
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCatagory';
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Box, CircularProgress } from '@mui/material';

const Sidebar = ({ setMobileOpen }) => {
  const catagories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];
  
    const  {genreIdOrCategoryName}  = useSelector((state) => state.currentGenreOrCatagory);
  const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
  const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
  const theme = useTheme();
  const { classes } = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={'/'} className={classes.imageLink} >
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt={'Logo'}
        ></img>
      </Link>
      <Divider />

      <List>
        <ListSubheader>Catagories</ListSubheader>
        {
          catagories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to='/'>
              <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
              <ListItemIcon>
                  <img src={genreIcons[label.toLowerCase()]} className={classes.genreImage} height={30} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          ))
        }
      </List>
      <Divider />

      <List>
        <ListSubheader>Genres</ListSubheader>
        {
           isFetching ? (
            <Box display='flex' justifyContent='center'>
              <CircularProgress/>
            </Box>
          ): data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.links} to='/'>
              <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
                <ListItemIcon>
                  <img src={genreIcons[name.toLowerCase()]} className={classes.genreImage} height={30}
                  
                   />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          
          )) 
        }
      </List>
    </div>
  )
}

export default Sidebar