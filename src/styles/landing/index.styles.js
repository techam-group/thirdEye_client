import { makeStyles } from '@material-ui/core/styles'
import LeadImage from '../../assets/dji_mavicpro.jpg'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flexDirection: 'column'
  },
  jumbotron: {
    height: '85vh',
    backgroundImage: `url(${LeadImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 8)
  },
  sme__cta: {
    width: '35%',
    color: '#4D4D4D',

    '& h5': {
      textTransform: 'capitalize'
    }
  },
  lead: {
    fontSize: 'smaller',
    padding: theme.spacing(1, 0),
    color: 'grey'
  },
  spacer: {
    margin: theme.spacing(2, 0)
  },
  button: {
    backgroundColor: '#090e1a',
    color: '#FEFEFE',
    padding: theme.spacing(1, 4),
    borderRadius: 0,

    '&:hover': {
      backgroundColor: '#CE2D2D',
    }
  }
}))