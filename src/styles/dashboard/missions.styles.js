import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: 'auto',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '4rem',

    '& h6': {
      padding: theme.spacing(2),
      color: 'grey',
      fontWeight: 'bold',
    },

    '& p': {
      color: 'grey',
      fontSize: '0.85rem'
    }
  }
}))