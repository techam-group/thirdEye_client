import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

    '& .MuiAppBar-colorPrimary': {
      backgroundColor: 'transparent',

      '&:hover': {
        backgroundColor: '#FFFFFF45'
      }
    },

    '& .MuiPaper-elevation4': {
      boxShadow: 'none'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform: 'uppercase',
    color: 'grey',

    '& span': {
      color: '#3c393d'
    }
  },
  login: {
    color: 'inherit',

    '& button': {
      borderRadius: 0,

      '&:hover': {
        backgroundColor: '#CE2D2D',
      }
    }
  }
}));