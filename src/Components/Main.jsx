import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Header, SideNav } from "./Components";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Avatar, Typography } from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const location = useLocation();
  const path = location.pathname;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationMenuItems = [
    { title: "Home", path: "/", icon: <HomeIcon color="secondary" /> },
    { title: "About", path: "/about", icon: <InfoIcon color="secondary" /> },
    { title: "Contact", path: "/contact", icon: <MailIcon  color="secondary"/> },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          alignItems: "center",
        }}
      >
        <Avatar
          component={Link}
          src="https://images.pexels.com/photos/6214730/pexels-photo-6214730.jpeg?auto=compress&cs=tinysrgb&w=600"
          sx={{
            cursor: "pointer",
            width: "79px",
            height: "62px",
            marginTop: "-4rem",
            position: "relative",
          }}
          to={"/"}
        />
        <Typography color={"primary"} variant="h5">
          Richard Rick
        </Typography>
        <Typography color={"secondary"} variant="body1">
          FullStack Developer
        </Typography>
      </Box>
      <Divider />
      <List>
        {navigationMenuItems.map((item, index) => (
          <ListItem
            disablePadding
            component={Link}
            to={item.path}
            key={item.title}
            button
            selected={item.path === path}
            onClick={handleDrawerToggle}
          >
            <ListItemButton>
              <ListItemIcon >{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Header handleDrawerToggle={handleDrawerToggle} />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <SideNav
          container={container}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
          drawer={drawer}
        />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
