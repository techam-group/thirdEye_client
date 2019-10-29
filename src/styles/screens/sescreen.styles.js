import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  screenHolder: {
    flexGrow: 1,
    width: '70%',
    height: '55vh',
    backgroundColor: 'blue',

    [theme.breakpoints.down("md")]: {
      width: '100%'
    }
  }
}))