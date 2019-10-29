import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  mainControl: {
    flexGrow: 1,
    width: '70%',
    height: '55vh',
    backgroundColor: 'tomato',

    [theme.breakpoints.down("md")]: {
      width: '100%'
    }
  }
}))