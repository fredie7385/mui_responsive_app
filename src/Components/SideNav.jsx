import { Drawer } from "@mui/material";
import React from "react";

export default function SideNav(props) {
  return (
    <>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={props.container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
            display: 'flex',
            justifyContent:'space-between',
            gap: '100px',
            background:'#333',
            color: '#dfdfdf',
          },
        }}
      >
        {props.drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
            display: 'flex',
            justifyContent:'space-between',
            gap: '100px',
            background:'#333',
            color: '#dfdfdf',
          },
        }}
        open
      >
        {props.drawer}
      </Drawer>
    </>
  );
}
