import { makeStyles } from "@material-ui/styles";
import LoginImage from '../../assets/monitor.jpg'
import SignupImage from '../../assets/dronedrop2019.jpg'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  imageHolder: {
    backgroundImage: props => props.signup ? `url(${SignupImage})` : `url(${LoginImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh',
    width: '55%'
  },
  loginMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    height: '100vh'
  },
  header: {
    marginBottom: '2rem',
    textAlign: 'center',

    '& h6': {
      fontWeight: 600,
      color: 'grey',
      textTransform: 'uppercase',

      '& span': {
        color: '#3C393D'
      }
    },
    '& p': {
      fontSize: '0.85rem',
      color: 'grey'
    }
  },
  forms: {
    width: '70%',
    marginBottom: '3rem',

    '& button': {
      margin: '1.5rem 0'
    },
  },
  helperText: {
    paddingBottom: '1rem',
    color: '#fd2b2b',

    '& p': {
      fontSize: '0.85rem',
    }
  },
  noAccount: {
    display: 'flex',
    justifyContent: 'end',
    color: 'grey',
    fontSize: '0.85rem',

    '& a': {
      color: 'inherit',
      paddingLeft: '0.65rem',
      fontWeight: 600
    }
  },
  footer: {
    color: 'grey',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',

    '& a': {
      color: 'inherit'
    }
  }
}))