import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import useStyles from './NavbarStyle.ts'
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Drawer } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search/Search';
const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const { classes } = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)')
  const theme = useTheme();
  // const isAuthenticated = true;
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          {isMobile &&
            <IconButton
              color='inherit'
              edge='start'
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          }
          <IconButton
            color='inherit'
            sx={{ ml: 1 }}
            onClick={() => { }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search/>}
          {/* <div>
            {!isAuthenticated ? (
              <Button>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color='inherit'

                className={classes.linkButton}
                onClick={() => { }}
              >
                {!isMobile && <>My Movie &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt='Profile picture'
                  src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                >

                </Avatar>
              </Button>
            )}
          </div> */}
          {isMobile && <Search/>}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {
            isMobile ? (
              <Drawer
                variant='temporary'
                anchor='right'
                open={mobileOpen}
                onClose={ () => setMobileOpen((prevMobileOpen) => !prevMobileOpen) }
                classes={{ paper: classes.drawerPaper }}
                ModelProps={{ keepMounted: true }}
              >
                <Sidebar setMobileOpen = {setMobileOpen}/>
              </Drawer>
            ) : (
              <Drawer
              variant='permanent'
              open
              classes={{ paper: classes.drawerPaper }}
              >
                <Sidebar setMobileOpen = {setMobileOpen}></Sidebar>
              </Drawer>
            )
          }
        </nav>
      </div>
    </div>
  )
}

export default Navbar