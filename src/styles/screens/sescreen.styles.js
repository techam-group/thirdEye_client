import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  screenHolder: {
    flexGrow: 1,
    width: '100%',
    height: '55%',
    marginTop: '6.8rem',
    backgroundColor: '#2d2d2d',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& p': {
      color: 'rgba(113, 113, 113, 0.87)'
    },

    [theme.breakpoints.down("md")]: {
      width: '100%'
    }
  }
}))