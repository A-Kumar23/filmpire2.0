import { CssBaseline } from '@mui/material'
import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Router from './Router'
import useStyles from './AppStyle'

const App = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
    <CssBaseline />
    <Navbar/>
    <main className={classes.content}>
    <div className= {classes.toolbar}/>
      <Router/>
    </main>
    </div>
  )
}

export default App