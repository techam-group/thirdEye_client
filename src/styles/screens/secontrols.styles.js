import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  mainControl: {
    flexGrow: 1,
    width: '100%',
    height: '30%',
    padding: '0.2rem 2rem',

    [theme.breakpoints.down("md")]: {
      width: '100%'
    },
    '& > div': {
      backgroundColor: '#f5fdff',
      display: 'flex',
      justifyContent: 'center',
      minWidth: '500px',
      height: '100%',
      position: 'relative',

      '& > button': {
        position: 'absolute',
        border: 'none',
        background: '#181d28',
        color: 'white',
        height: '50px',
        width: '60px',
        borderRadius: '3px',
        '&:hover': { backgroundColor: '#1c2a39' }
      },
      '@media (max-width: 900px)': {
        '& > button': {
          top: '5% !important',
          margin: '0 5%'
        },
        '& > div': {
          margin: ' 12% 0 0 00 '
        },
        '& > .emagency': {
          left: ' unset !important ',
          width: 'max-content !important '
        }
      },
      '& > .art': {
        top: '2%',
        left: '27%',
        borderRadius: '24px 3px 3px 3px',

        '& svg': {
          fontSize: '1.3rem'
        }
      },
      '& > .rt': {
        top: '2%',
        right: '27%',
        borderRadius: '3px 24px 3px 3px',

        '& svg': {
          fontSize: '1.3rem'
        }
      },
      '& > .fl': {
        bottom: '10%',
        left: '22%',
        borderRadius: '3px 3px 3px 24px'
      },
      '& > .fr': {
        bottom: '10%',
        right: '22%',
        borderRadius: '3px 3px 24px 3px'
      },
      '& > .emagency': {
        height: '38px',
        bottom: 0,
        right: '0',
        left: '0',
        width: '34%',
        margin: 'auto',
      },
      '& > .capture': {
        top: '33%',
        left: '20%',
        borderRadius: '16px 3px 3px 16px',
        margin: 'auto',

        '& svg': {
          color: '#f9f9f9'
        }
      },
      '& > .stream': {
        top: '33%',
        right: '20%',
        borderRadius: '3px 16px 16px 3px',
        margin: 'auto',

        '& svg': {
          color: '#f9f9f9'
        }
      },
      '& > .center': {
        height: '152px',
        width: '165px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',

        '& > .line1': {
          height: '100%',
          width: '3px',
          border: '0.2px solid #192533',
          transform: ' rotate(45deg)',
          position: 'absolute',
        },
        '& > .line2': {
          height: '100%',
          width: '3px',
          border: '0.2px solid #192533',
          transform: ' rotate(-45deg)',
          position: 'absolute',
        },
        '& > .btns': {
          backgroundColor: '#181d28',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          borderRadius: '50%',

          '& > button': {
            border: 'none',
            position: 'absolute',
            color: 'white',
            margin: 'auto',
            zIndex: '2',
            backgroundColor: '#192533',
            '&:hover ': {
              backgroundColor: '#1c2a39',
              cursor: 'pointer'
            }
          },
          '& > .c': {
            top: '0',
            left: '0',
            right: '0',
            position: 'absolute',
            height: '65px',
            width: '65px',
            bottom: '0',
            zIndex: '5',
            borderRadius: '50%',
            backgroundColor: '#181d28',

            '& svg': {
              fontSize: '1.3rem '
            }
          },
          '& > .ring': {
            backgroundColor: '#181d28',
            borderRadius: '50%',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            margin: 'auto',
            height: '20px',
            width: '20px',
            position: 'absolute',
            zIndex: '3',
          },
          '& > .l': {
            top: '0',
            left: '0',
            height: '3rem',
            width: '4rem',
            bottom: '0',
            borderRadius: '30px 0 0 30px',

            '& svg': {
              fontSize: '1.3rem',
              marginLeft: '-0.5rem'
            }
          },
          '& > .r': {
            top: '0',
            right: '0',
            bottom: '0',
            height: '3rem',
            width: '4rem',
            borderRadius: '0 30px 30px 0',

            '& svg': {
              fontSize: '1.3rem',
              marginRight: '-0.5rem'
            }
          },
          '& > .u': {
            top: '0',
            right: '0',
            left: '0',
            height: '4rem',
            width: '3rem',
            borderRadius: '30px  30px 0 0',

            '& svg': {
              fontSize: '1.3rem',
              marginTop: '-1rem'
            }
          },
          '& > .d': {
            bottom: '0',
            right: '0',
            left: '0',
            height: '4rem',
            width: '3rem',
            borderRadius: '0 0 30px  30px',

            '& svg': {
              fontSize: '1.3rem',
              marginBottom: '-1rem'
            }
          }
        }
      }
    }
  },
}))