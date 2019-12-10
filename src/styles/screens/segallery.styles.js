import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  main: {
    padding: '0.5rem 1rem'
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '0.5rem',
    backgroundColor: '#E8E7E7',
    paddingLeft: '4px',
    paddingBottom: '2px',
    borderRadius: '3px',
    maxHeight: '15rem',
    overflowY: 'scroll',
  },
  imageHolder: {
    height: '2rem',
    width: '2rem',
    padding: '0.1rem',
    position: 'relative',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeInOut,
      duration: 0.2
    }),

    '& img': {
      width: '100%',
      height: '100%'
    },

    '&::after': {
      content: "''",
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.67)'
    },

    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.1)',
    }
  },
  segallery__buttons: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',

    '& button': {
      borderRadius: 0,
      padding: '0.3rem 2rem',
      color: 'white',

      '&:first-child': {
        backgroundColor: '#184233'
      },

      '&:last-child': {
        backgroundColor: '#9f2c2c'
      }
    }

  }
}))