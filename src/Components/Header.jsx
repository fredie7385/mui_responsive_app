import { Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../App";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    toolbar: {
      background: "purple",
      color: "#dfdfdf",
    },
    avatar: {
      marginRight: theme.spacing(2),
    },
  };
});

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Toolbar className={classes.toolbar}>
      <Avatar
        className={classes.avatar}
        src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={props.handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h5" sx={{ flexGrow: 1 }} component="div">
      _Web App_
      </Typography>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness4Icon />
        ) : (
          <Brightness7Icon />
        )}
      </IconButton>
    </Toolbar>
  );
}
