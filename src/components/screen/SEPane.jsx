import React, { useState } from 'react'
import clsx from 'clsx'
import { Grid, Typography, Divider } from '@material-ui/core'
import { BatteryStd } from '@material-ui/icons'
import { useStyles } from '../../styles/screens/sepane.styles'

const SEPane = () => {
  const classes = useStyles()
  const [isConnected, setConnect] = useState(false)
  const [status, setStatus] = useState(false)
  const [command, setCommand] = useState(false)

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
    </Grid >
  )
}

export default SEPane