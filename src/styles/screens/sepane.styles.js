import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  screenHolder: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: '#515151',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& p': {
      color: 'rgba(113, 113, 113, 0.87)'
    },

    // [theme.breakpoints.down("md")]: {
    //   width: '100%'
    // }
  }
}))