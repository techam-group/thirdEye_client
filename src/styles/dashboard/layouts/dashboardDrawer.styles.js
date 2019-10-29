import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: '#181d28',
    color: '#fcfcfc',
    width: drawerWidth,

    '& .MuiList-root': {
      '& a': {
        color: '#90d1dd',
        textDecoration: 'none'
      }
    },

    '& .MuiListItemIcon-root': {
      color: '#54a6b5'
    },

    '& .MuiList-root:last-child': {
      position: 'absolute',
      bottom: 0,
      display: 'flex',
      justifyContent: 'start',
      width: '100%',
      backgroundColor: '#141821',
      paddingLeft: '4rem',

      '& button': {
        color: '#54a6b5',
        textTransform: 'capitalize'
      }
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: '#141821',

    '& .MuiIconButton-label': {
      color: '#fcfcfc'
    }
  },
}));