import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Mail, Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding:'0 10px',
  borderRadius: '5px',
  width:'40%'
}));

const Icons = styled('box')(({ theme }) => ({
  display:'flex', 
  alignItems:'center', 
  gap:'15px',
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display:{xs:'none', sm:'block' }}} >ToDoList</Typography>
        <MenuIcon sx={{ display: {xs: 'block', sm:'none'}}} />
        <Search><InputBase placeholder='pesquisar...'/></Search>
        <Icons>
          <Badge badgeContent={1} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={5} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:'20', height:'20'}}  alt="R10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIZmPS3oz2rdxALMFiLRmYMs6COAkbYaugA&usqp=CAU" onClick={e=>setOpen(true)} />
        </Icons>
      </StyledToolbar>
      <Menu 
        id='demo-position-menu'
        aria-label='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;