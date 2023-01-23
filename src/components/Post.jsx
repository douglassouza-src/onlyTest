import React from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';

const Post = () => {
  return (
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={<Avatar aria-label="recipe"> R </Avatar>}
      action={<IconButton aria-label="settings"><MoreVert /></IconButton>}
      title="Revista Placar"
      subheader="23, Janeiro 2023"/>
    <CardMedia component="img" image="https://i0.wp.com/e-marcas.com.br/wp-content/uploads/2012/02/flamengo_jogo_ronaldinho.jpg?fit=660%2C400&ssl=1" alt="News"/>
    <CardContent>
      <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur eos, perferendis, pariatur, est nostrum dolorum ad enim distinctio odit at voluptatibus atque velit! Alias vero asperiores officiis velit sit? Natus.</Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites"> <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} /></IconButton>
      <IconButton aria-label="share"><Share /></IconButton>
    </CardActions>
  </Card>
  )
}

export default Post;