import React, { useState } from 'react'
import clsx from 'clsx'
import { Grid, Typography, Divider, InputLabel, FormGroup, IconButton, Input, InputAdornment } from '@material-ui/core'
import { BatteryStd } from '@material-ui/icons'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useStyles } from '../../styles/screens/sepane.styles'

const SEPane = () => {
  const classes = useStyles()
  const [isConnected, setConnect] = useState(false)
  const [status, setStatus] = useState(false)
  const [command, setCommand] = useState(false)
  let [distance, setDistance] = useState(10)
  let [degree, setDegree] = useState(10)

  const handleChange = ({ target: { name, value } }) => {
    if (name === "distance") setDistance(value)
    if (name === "degree") setDegree(value)
  }

  const handleIncrease = (el) => {
    if (el === 1) setDistance(distance++)
    if (el === 2) setDegree(distance++)
  }

  const handleDecrease = (el) => {
    if (el === 1) setDistance(distance--)
    if (el === 2) setDegree(distance--)
  }

  return (
    <Grid item className={classes.paneHolder}>
      <section className={classes.sepane__header}>
        <div className={classes.batteryHolder}>
          <div className={classes.connection}>
            <div className={
              clsx(classes.status,
                { [classes.statusColor]: isConnected }
              )}
            />
            {
              isConnected ?
                <span>Connected</span> :
                <span>Disconnected</span>
            }
          </div>
          <BatteryStd />
        </div>
        <Divider style={{ width: '100%' }} />
        <div className={classes.paneInfo}>
          <div className={classes.paneInfo_cmd}>
            <Typography>cmd: <span>{command ? command : 'none'}</span></Typography>
          </div>
          <div className={classes.response}>
            <Typography>Response: <span>{status ? 'ok' : 'caution'}</span>
            </Typography>
          </div>
        </div>
      </section>

      <section className={classes.sepane__inputsHolder}>
        <FormGroup>
          <InputLabel>Distance:</InputLabel>
          <div className={classes.inputControls}>
            <IconButton onClick={() => handleDecrease(1)}> {/* Change this line to use Ref */}
              <MdKeyboardArrowLeft />
            </IconButton>
            <Input
              name="distance"
              value={distance}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">cm</InputAdornment>
              }
            />
            <IconButton onClick={() => handleIncrease(1)}> {/* Change this line to use Ref */}
              <MdKeyboardArrowRight />
            </IconButton>
          </div>
        </FormGroup>

        <FormGroup>
          <InputLabel>Degree:</InputLabel>
          <div className={classes.inputControls}>
            <IconButton onClick={() => handleDecrease(2)}> {/* Change this line to use Ref */}
              <MdKeyboardArrowLeft />
            </IconButton>
            <Input
              name="degree"
              value={degree}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">deg</InputAdornment>
              }
            />
            <IconButton onClick={() => handleIncrease(2)}> {/* Change this line to use Ref */}
              <MdKeyboardArrowRight />
            </IconButton>
          </div>
        </FormGroup>
      </section>
    </Grid >
  )
}

export default SEPane