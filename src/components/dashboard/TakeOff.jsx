import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from '../../styles/dashboard/takeOff.styles'
import SEScreen from '../screen/SEScreen'
import SEControls from '../screen/SEControls'

const TakeOff = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <SEScreen />
      <SEControls />
    </Grid>
  )
}

export default TakeOff