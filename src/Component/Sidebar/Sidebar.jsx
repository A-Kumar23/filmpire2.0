import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useStyles from './SidebarStyle';
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';

const Sidebar = ({ setMobileOpen }) => {
  const catagories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];
  const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Horror', value: 'horror' },
    { label: 'Animation', value: 'animation' },
    { label: 'Action', value: 'action' },
    { label: 'Fantasy', value: 'fantasy' },
  ];
  // const demoCategories = ['Comedy', 'Horror', 'Animation', 'Action', 'Fantasy']
  const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
  const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
  const theme = useTheme();
  const { classes } = useStyles();
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
              <ListItemButton onClick={() => { }}>
                {/* <ListItemIcon>
                  <img src={blueLogo} className={classes.genreImage} height={30} />
                </ListItemIcon> */}
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
          demoCategories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to='/'>
              <ListItemButton onClick={() => { }}>
                {/* <ListItemIcon>
                  <img src={blueLogo} className={classes.genreImage} height={30} /> 
                </ListItemIcon>*/}
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          ))
        }
      </List>
    </div>
  )
}

export default Sidebar