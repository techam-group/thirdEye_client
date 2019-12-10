import React, { useState } from 'react'
import { Grid, Button, IconButton } from '@material-ui/core'
import { FiCamera, FiVideo } from 'react-icons/fi'
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdRotateLeft, MdRotateRight, MdFlightTakeoff, MdFlightLand } from 'react-icons/md'
import { GiRapidshareArrow, GiReturnArrow } from 'react-icons/gi'

import { useStyles } from '../../styles/screens/secontrols.styles'

const SEControls = () => {
  const [flightMode, setFlightMode] = useState(false)
  const classes = useStyles()

  const handleFlightMode = () => setFlightMode(!flightMode)

  return (
    <Grid item className={classes.mainControl}>
      <div>
        <Button className='art'>
          <MdRotateLeft />
        </Button>
        <Button className='capture'>
          <IconButton>
            <FiCamera />
          </IconButton>
        </Button>
        <Button className='stream'>
          <IconButton>
            <FiVideo />
          </IconButton>
        </Button>
        <Button className='rt'>
          <MdRotateRight />
        </Button>

        <div className='center'>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='btns'>
            <Button className='l'>
              <IoIosArrowBack />
            </Button>
            <Button className='r'>
              <IoIosArrowForward />
            </Button>
            <Button className='c' onClick={handleFlightMode}>
              {
                !flightMode ?
                  <MdFlightTakeoff /> :
                  <MdFlightLand />
              }
            </Button>
            <div className='ring'></div>
            <Button className='u'>
              <IoIosArrowUp />
            </Button>
            <Button className='d'>
              <IoIosArrowDown />
            </Button>
          </div>
        </div>


        <Button className='fl'>
          <GiReturnArrow />
        </Button>
        <Button className='emagency'>Emergency</Button>
        <Button className='fr'>
          <GiRapidshareArrow />
        </Button>
      </div>
    </Grid>
  )
}

export default SEControls