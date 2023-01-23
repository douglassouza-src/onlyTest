import { Avatar, Box, Button, ButtonGroup, CssBaseline, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';


const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap:'10px',
  marginBottom: '20px',
});



const Add = () => {
  const [open, setOpen] = useState (false)
  return (
    <>
      <Tooltip onClick={(e) => setOpen(true)} sx={{position: 'fixed', bottom: 20, left: {xs: 'calc(50%)', md: 30}}}><Fab color="primary" aria-label="add"><AddIcon /></Fab></Tooltip>
      <StyledModal open={open} onClose={(e) => setOpen(false)} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
      <Box width={400} height={280}  p={3} borderRadius={5} bgcolor={'background.default'} ><CssBaseline />
        <Typography variant='h6' color='gray' textAlign='center'>Create post</Typography>
        <UserBox>
          <Avatar sx={{width:'20', height:'20'}}  alt="R10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIZmPS3oz2rdxALMFiLRmYMs6COAkbYaugA&usqp=CAU" onClick={e=>setOpen(true)} />
          <Typography fontWeight={500} variant='span'>Ronaldinho</Typography>
        </UserBox>
          <TextField display='flex' sx={{width:'100%'}} id='standard-multiline-static' rows={4} placeholder="Whats on your mind?" variant='standard'></TextField>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" sx={{mt: 10}}>
            <Button>Post</Button>
            <Button color={'error'}>Cancel</Button>
          </ButtonGroup>
        </Box>      
      </StyledModal>
    </>
  )
}

export default Add;