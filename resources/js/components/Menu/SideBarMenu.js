import { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@/components/Menu/SideBarItem';
import MenuIcon from '@mui/icons-material/Menu';


export default function SideBarMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={handleDrawerToggle}
    >
      <MenuIcon />
      <Drawer
        anchor="left"
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <MenuItem />
      </Drawer>
    </IconButton>
  );
}
