import { IconButton, Switch, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react'
import { Context } from '../App';

export default function Header(props) {

  let{toggleDarkMode} =useContext(Context);


  return (
    <Toolbar>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={props.handleDrawerToggle}
      sx={{ mr: 2, display: { sm: 'none' } }}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h5" sx={{flexGrow:1}} component="div">
      My web App
    </Typography>
    <Switch onChange={()=>toggleDarkMode()} label='dark mode'/>
  </Toolbar>
  )
}
