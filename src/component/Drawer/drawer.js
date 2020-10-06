import React,{useEffect,useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer({student}) {

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  useEffect(() => {
    
    if(student.hasOwnProperty('name'))
    setState({ ...state, ['right']: 'open' });
    else
    setState({ ...state, ['right']: false });

  }, [student]);
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem button key={student.name}>
                Name: {student.name}
          </ListItem>
          <ListItem button key={student.age}>
           Age: {student.age}
          </ListItem>
          <ListItem button key={student.name}>
            Gender: {student.gender}
          </ListItem>
          <ListItem button key={student.name}>
          Sports: {student.sports}
          </ListItem>
      </List>
     
     
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
       </React.Fragment>
      ))}
    </div>
  );
}
