import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from '../../styles/dashboard/takeOff.styles'
import SEScreen from '../screen/SEScreen'
import SEControls from '../screen/SEControls'
import SEPane from '../screen/SEPane'

const TakeOff = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <Grid item className={classes.main}>
        <SEScreen />
        <SEControls />
      </Grid>
      <Grid item className={classes.sidePane}>
        <SEPane />
      </Grid>
    </Grid>
  )
}

export default TakeOff