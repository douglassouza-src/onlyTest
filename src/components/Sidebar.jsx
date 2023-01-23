import { Groups, Home, ModeNight, Pages, Person,  Settings, Shop, Source } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';

const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={1} sx={{ display: { xs:'none', sm:'block'} }}>
      <Box position='fixed'>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'><ListItemIcon><Home /></ListItemIcon><ListItemText primary="Homepage" /></ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'><ListItemIcon><Pages /></ListItemIcon><ListItemText primary="Pages" /></ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'><ListItemIcon><Groups /></ListItemIcon><ListItemText primary="Groups" /></ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'><ListItemIcon><Shop /></ListItemIcon><ListItemText primary="Marketplace" /></ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'><ListItemIcon><Source /></ListItemIcon><ListItemText primary="Friends" /></ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'><ListItemIcon><Settings /></ListItemIcon><ListItemText primary="Settings" /></ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'><ListItemIcon><Person /></ListItemIcon><ListItemText primary="Profile" /></ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'><ListItemIcon><ModeNight /></ListItemIcon><Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')} /></ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;