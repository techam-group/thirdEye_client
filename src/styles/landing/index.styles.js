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
    padding: theme.spacing(0, 8),
    width: '100%'
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
  },
  sme__navs: {
    width: '40rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: '-74px',
    height: '6.5rem',
    padding: theme.spacing(0, 2),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    '& li': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textTransform: 'uppercase',

      '&:nth-child(1)': {
        color: '#CE2D2D',

        '& .MuiIconButton-root': {
          color: '#ff5d79d6'
        }
      },

      '&:nth-child(2)': {
        color: '#0581b9',

        '& .MuiIconButton-root': {
          color: '#00b0ffb0',
        }
      },

      '&:nth-child(3)': {
        color: '#ec0ebf',

        '& .MuiIconButton-root': {
          color: '#ec0ebfab',
        }
      }
    }
  },
  sme__flightCover: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(17)
  }
}))