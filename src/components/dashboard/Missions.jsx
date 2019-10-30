import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from '../../styles/dashboard/missions.styles'

const Missions = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <main className={classes.main}>
        <Typography variant="h6">SmartEyes Drone Mission</Typography>
        <Typography>This feature is currently unavaialble</Typography>
      </main>
    </Grid>
  )
}

export default Missions