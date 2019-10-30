import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  paneHolder: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: '#d2d2d2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
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
  }
}))