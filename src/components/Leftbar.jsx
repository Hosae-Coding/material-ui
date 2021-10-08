import { List, makeStyles } from '@material-ui/core';
import { Container, Typography } from '@material-ui/core';
import {
   Bookmark,
   Home,
   ListAlt,
   Person,
   PlayCircleOutline,
   TabletMac,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
   Container: {
      height: '100vh',
      color: 'white',
      paddingTop: theme.spacing(10),
      backgroundColor: theme.palette.primary.main,
      position: 'sticky',
      top: 0,
      [theme.breakpoints.up('sm')]: {
         backgroundColor: 'White',
         color: '#555',
         border: '1px solid #ece7e7',
      },
   },
   item: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(5),
      [theme.breakpoints.up('sm')]: {
         marginBottom: theme.spacing(3),
         cursor: 'pointer',
      },
      text: {
         fontWeight: 500,
         [theme.breakpoints.down('sm')]: {
            display: 'none',
         },
      },
      icon: {
         marginRight: theme.spacing(1),
         [theme.breakpoints.up('sm')]: {
            fontSize: '18px',
         },
      },
   },
}));

const Leftbar = () => {
   const classes = useStyles();
   return (
      <Container className={classes.Container}>
         <div className={classes.item}>
            <Home className={classes.text} />
            <Typography className={classes.text}>Homepage</Typography>
         </div>
         <div className={classes.item}>
            <Person className={classes.text} />
            <Typography className={classes.text}>friend</Typography>
         </div>
         <div className={classes.item}>
            <ListAlt className={classes.text} />
            <Typography className={classes.text}>News</Typography>
         </div>
         <div className={classes.item}>
            <PlayCircleOutline className={classes.text} />
            <Typography className={classes.text}>Video</Typography>
         </div>
         <div className={classes.item}>
            <TabletMac className={classes.text} />
            <Typography className={classes.text}>Device</Typography>
         </div>
         <div className={classes.item}>
            <Bookmark className={classes.text} />
            <Typography className={classes.text}>Memory</Typography>
         </div>
      </Container>
   );
};

export default Leftbar;
