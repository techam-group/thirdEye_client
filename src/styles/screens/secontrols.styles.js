import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  mainControl: {
    flexGrow: 1,
    width: '100%',
    height: '30%',
    padding: '1rem 2rem',

    [theme.breakpoints.down("md")]: {
      width: '100%'
    }
  }
}))