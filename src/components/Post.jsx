import {
   Button,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   Container,
   makeStyles,
   Typography,
} from '@material-ui/core';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
   media: {
      height: 250,
   },
   card: {
      marginBottom: theme.spacing(5),
   },
}));

const Post = () => {
   const classes = useStyles();
   return (
      <>
         <Card className={classes.card}>
            <CardActionArea
               className={classes.media}
               image="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
               title="My Post"
            >
               <CardContent>
                  <Typography gutterBottom variant="h6">
                     Post
                  </Typography>
                  <Typography variant="body2">
                     <img
                        src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"
                        alt=""
                     />
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Button size="small" color="primary">
                  Share
               </Button>
               <Button size="small" color="primary">
                  Learn More
               </Button>
            </CardActions>
         </Card>
      </>
   );
};

export default Post;
