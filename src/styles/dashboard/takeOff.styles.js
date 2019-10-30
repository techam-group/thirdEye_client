import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: 'auto',
    marginTop: '-4.4rem',
    marginLeft: '-1.48rem',
    display: 'flex',

    // [theme.breakpoints.down('md')]: {
    //   marginRight: '-2rem'
    // }
  },
  main: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column'
  },
  sidePane: {
    width: '25%',
    height: '100%'
  }
}))