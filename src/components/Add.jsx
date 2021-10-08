import {
   Button,
   Container,
   Fab,
   FormControlLabel,
   FormLabel,
   makeStyles,
   MenuItem,
   Modal,
   Radio,
   RadioGroup,
   Snackbar,
   TextField,
   Tooltip,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
   fab: {
      position: 'fixed',
      bottom: 20,
      Rightbar: 30,
   },
   container: {
      width: 500,
      height: 550,
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
         width: '100vw',
         height: '100vh',
      },
   },
   form: {
      padding: theme.spacing(2),
   },
   item: {
      marginBottom: theme.spacing(4),
   },
}));

const Add = () => {
   const classes = useStyles();
   const [open, setOpen] = useState(false);
   const [create, setCreate] = useState(false);

   return (
      <>
         <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
            <Fab color="secondary" className={classes.fab}>
               <AddIcon />
            </Fab>
         </Tooltip>
         <Modal open={open}>
            <Container className={classes.container}>
               <form className={classes.form} autoComplete="off">
                  <div className={classes.item}>
                     <TextField
                        label="Title"
                        size="small"
                        style={{ width: '100%' }}
                     />
                  </div>
                  <div className={classes.item}>
                     <TextField
                        multiline
                        rows={4}
                        defaultValue="Tell your life"
                        variant="outlined"
                        label="Description"
                        size="small"
                        style={{ width: '100%' }}
                     />
                  </div>
                  <div className={classes.item}>
                     <TextField select label="bisibility" value="Public">
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                        <MenuItem value="Unlisted">Unlisted</MenuItem>
                     </TextField>
                  </div>
                  <div>
                     <FormLabel conponent="legend">Who Can Coments?</FormLabel>
                     <RadioGroup>
                        <FormControlLabel
                           value="Public"
                           control={<Radio size="small" />}
                           label="Public"
                        />
                        <FormControlLabel
                           value="Only my Fried"
                           control={<Radio size="small" />}
                           label="Only my Fried"
                        />
                        <FormControlLabel
                           value="Nobody"
                           control={<Radio size="small" />}
                           label="Nobody"
                        />
                        <FormControlLabel
                           value="Custom"
                           disabled
                           control={<Radio size="small" />}
                           label="Custom(Primeum) "
                        />
                     </RadioGroup>
                  </div>
                  <div className={classes.item}>
                     <Button
                        variant="outlined"
                        color="primary"
                        style={{ marginRight: 25 }}
                        onClick={() => {
                           setCreate(alert('Create'));
                           setOpen(false);
                        }}
                     >
                        Create
                     </Button>
                     <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => setOpen(false)}
                     >
                        Cancel
                     </Button>
                  </div>
               </form>
            </Container>
         </Modal>
      </>
   );
};

export default Add;
