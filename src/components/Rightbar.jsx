import {
   Avatar,
   Container,
   ImageList,
   ImageListItem,
   makeStyles,
   Typography,
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
   Container: {
      paddingTop: theme.spacing(10),
   },
}));

const Rightbar = () => {
   const classes = useStyles();
   return (
      <Container className={classes.container}>
         <Typography className={classes.title} gutterBottom>
            Online Friends
         </Typography>
         <AvatarGroup max={6} style={{ marginBottom: 20 }}>
            <Avatar
               alt="Remy Sharp"
               src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Avatar
               alt="Travis Howard"
               src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Avatar
               alt="Cindy Baker"
               src="https://material-ui.com/static/images/avatar/3.jpg"
            />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar
               alt="Trevor Henderson"
               src="https://material-ui.com/static/images/avatar/6.jpg"
            />
            <Avatar
               alt="Trevor Henderson"
               src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
               alt="Trevor Henderson"
               src="https://material-ui.com/static/images/avatar/8.jpg"
            />
         </AvatarGroup>
         <Typography className={classes.title} gutterBottom>
            Gallery
         </Typography>
         <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
            <ImageListItem>
               <img
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format"
                  alt=""
               />
            </ImageListItem>
            <ImageListItem>
               <img
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format"
                  alt=""
               />
            </ImageListItem>
            <ImageListItem>
               <img
                  src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format"
                  alt=""
               />
            </ImageListItem>
            <ImageListItem>
               <img
                  src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format"
                  alt=""
               />
            </ImageListItem>
            <ImageListItem>
               <img
                  src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=121&h=121&fit=crop&auto=format"
                  alt=""
               />
            </ImageListItem>
            <ImageListItem>
               <img
                  src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=121&h=121&fit=crop&auto=format"
                  alt=""
               />
            </ImageListItem>
         </ImageList>
         <Typography className={classes.title} gutterBottom>
            Categories
         </Typography>
      </Container>
   );
};

export default Rightbar;
