import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  mainControl: {
    flexGrow: 1,
    width: '100%',
    height: '30%',
    padding: '1rem 2rem',

    [theme.breakpoints.down("md")]: {
      width: '100%'
    },
    '& > div': {
      backgroundColor: '#f5fdff',
      display: 'flex',
      justifyContent: 'center',
      minWidth: '500px',
      height: '300px',
      position: 'relative',
      '& > button': {
        position: 'absolute',
        border: 'none',
        background: '#181d28',
        color: 'white',
        height: '50px',
        width: '60px',
        borderRadius: '10px',
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
        top: '10%',
        left: '25%',
        borderRadius: '30px 10px 10px 10px',
      },
      '& > .rt': {
        top: '10%',
        right: '25%',
        borderRadius: '10px 30px 10px 10px',
      },
      '& > .fl': {
        bottom: '10%',
        left: '22%',
      },
      '& > .fr': {
        bottom: '10%',
        right: '22%',
      },
      '& > .emagency': {
        bottom: '10%',
        right: '0',
        left: '0',
        width: '34%',
        margin: 'auto',
      },
      '& > .caption': {
        top: '30%',
        left: '15%',
        borderRadius: '30px 10px 10px 10px',
        margin: 'auto',
      },
      '& > .Stream': {
        top: '30%',
        right: '15%',
        borderRadius: '10px 30px 10px 10px',
        margin: 'auto',
      },
      '& > .center': {
        height: '200px',
        width: ' 200px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: '10px',
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
            height: '50px',
            width: '50px',
            bottom: '0',
            zIndex: '5',
            borderRadius: '50%',
          },
          '& > .ring': {
            backgroundColor: '#181d28',
            borderRadius: '50%',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            margin: 'auto',
            height: '100px',
            width: '100px',
            position: 'absolute',
            zIndex: '3',
          },
          '& > .l': {
            top: '0',
            left: '0',
            height: '72px',
            width: '63px',
            bottom: '0',
            borderRadius: '30px 0 0 30px',
          },
          '& > .r': {
            top: '0',
            right: '0',
            bottom: '0',
            height: '72px',
            width: '63px',
            borderRadius: '0 30px 30px 0',
          },
          '& > .u': {
            top: '0',
            right: '0',
            left: '0',
            height: '63px',
            width: '72px',
            borderRadius: '30px  30px 0 0',
          },
          '& > .d': {
            bottom: '0',
            right: '0',
            left: '0',
            height: '63px',
            width: '72px',
            borderRadius: '0 0 30px  30px',
          }

        }
      }
    }
  },
}))