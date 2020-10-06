
import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
    padding: '6px 12px',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  button:{
    margin: theme.spacing(1),
    marginLeft  :'0px',
  },

  active:{
    display:'block'  
  },
  inactive:{
    display:'none', 
  },

}));