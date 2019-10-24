import { makeStyles } from '@material-ui/core/styles'
import LeadImage from '../../assets/dji_mavicpro.jpg'
import DeployImage from '../../assets/drone_mission.jpg'
import ControlImage from '../../assets/control.png'
import MonitorImage from '../../assets/monitor.jpg'

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
  },
  sme__flightDetails: {
    width: '75%',
    margin: '0 auto',

    '& section': {
      marginBottom: theme.spacing(4),

      '& [data-sme-title]': {
        color: '#373737',
        fontWeight: 600
      },

      '& [data-sme-lead]': {
        fontSize: '0.7rem',
      }
    }
  },
  sme__flightDetails_card: {
    display: 'flex',
    width: '100%',
    marginBottom: theme.spacing(8),

    '& .MuiCard-root': {
      width: '35%',
      display: 'flex',
      alignItems: 'center',
      color: 'grey',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,

      '& .MuiCardContent-root': {
        '& h6': {
          paddingBottom: theme.spacing(2),
          color: '#4d4d4d'
        },

        '& p': {
          fontSize: '0.89rem',
          lineHeight: '1.78'
        },

        '& button': {
          margin: '0 auto',
          background: '#CE2D2D',
          color: 'white',
          borderRadius: 0,
          marginTop: theme.spacing(1)
        }
      }
    }
  },
  sme__flightDetails_deploy: {
    '& [data-sme-image]': {
      backgroundImage: `url(${DeployImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      width: '60%',
      height: '18rem'
    },
  },
  sme__flightDetails_monitor: {
    '& [data-sme-image]': {
      backgroundImage: `url(${MonitorImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      width: '60%',
      height: '18rem'
    },

    '& .MuiCard-root': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    }
  },
  sme__flightDetails_control: {
    '& [data-sme-image]': {
      backgroundImage: `url(${ControlImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      width: '60%',
      height: '18rem'
    },
  }
}))