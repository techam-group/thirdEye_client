import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  paneHolder: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: '#d2d2d2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    // alignItems: 'center',
    paddingTop: '6.8rem',

    // [theme.breakpoints.down("md")]: {
    //   width: '100%'
    // }
  },
  sepane__header: {
    backgroundColor: '#181d28',
    color: '#54a6b5',
    height: '5.5rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 1rem'
  },
  batteryHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  paneInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '3rem'
  },
  paneInfo_cmd: {
    '& p': {
      fontSize: '0.85rem',
      color: 'grey',

      '& span': {
        color: '#54a6b5'
      }
    }
  },
  connection: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',

    '& span': {
      fontSize: '0.85rem',
      padding: '0.7rem'
    },
  },
  status: {
    width: '0.6rem',
    height: '0.6rem',
    borderRadius: '50%',
    backgroundColor: '#ec2222'
  },
  statusColor: {
    backgroundColor: '#0aee0a'
  },
  response: {
    // width: '20%',

    '& p': {
      fontSize: '0.85rem',
      color: 'grey',

      '& span': {
        color: '#54a6b5'
      }
    }
  },
  sepane__inputsHolder: {
    padding: '0.95rem 1rem',

    '& .MuiFormGroup-root': {
      marginBottom: '1.5rem',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',

      '& .MuiInputLabel-root': {
        fontSize: '0.85rem',
      },
    }
  },
  inputControls: {
    display: 'flex',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'space-around',

    '& .MuiIconButton-root': {
      padding: '3px',
      color: '#B9B9B9',

      '&:hover': {
        color: 'grey'
      }
    },

    '& .MuiInput-root': {
      width: '40%'
    },

    '& .MuiInput-underline::after': {
      borderBottom: '1px solid grey'
    },

    '& .MuiInput-underline:hover:not(.Mui-disabled)::before': {
      borderBottom: '2px solid grey'
    },

    '& .MuiInputBase-input': {
      fontSize: '0.85rem',
      color: 'grey'
    },

    '& .MuiInputAdornment-root': {
      '& p': {
        fontSize: '0.85rem',
        color: '#acacac'
      }
    }
  }
}))