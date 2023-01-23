import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs:'none', sm:'block'} }} mr={300} >
    <Box position='fixed' width={300} mr={300} >
      <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Favorites</Typography>
        <AvatarGroup max={9}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/6.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/7.jpg" />
        <Avatar alt="Agnes Walker" src="" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://yt3.googleusercontent.com/UEe3cgNxlqAr2rVTpNfWgNzNNGSh3QUmzrb_PQWKOYkTuVvHBrQxTfj3E5RCCzMhzS1v-4oVXQ=s900-c-k-c0x00ffffff-no-rj" alt='img'  />
          </ImageListItem>
          <ImageListItem>
            <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt593f82e467bba7b1/60dc800420a5380ed1a63258/e0c5eb888dd8ab03c02e6fafe5e0c2222bc5cfae.jpg" alt='img'  />
          </ImageListItem>
          <ImageListItem>
            <img src="https://imgresizer.eurosport.com/unsafe/2560x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2022/07/29/3424481-69874788-2560-1440.jpg" alt='img'  />
          </ImageListItem>
          <ImageListItem>
            <img src="https://s2.glbimg.com/FZqmxg_G30mdnTs090NS-jJ5o44=/0x0:1170x663/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/r/9/AEd3tgTKWnRcJe4Fnueg/whatsapp-image-2022-12-31-at-13.44.41.jpeg" alt='img'  />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Latest Conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>




      </Box>
    </Box>
  );
};

export default Rightbar;