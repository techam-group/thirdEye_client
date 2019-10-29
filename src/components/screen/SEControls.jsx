import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from '../../styles/screens/secontrols.styles'

const SEControls = () => {
  const classes = useStyles()

  return (
    <Grid item className={classes.mainControl}>
      <Typography>controls here</Typography>
    </Grid>
  )
}

export default SEControls