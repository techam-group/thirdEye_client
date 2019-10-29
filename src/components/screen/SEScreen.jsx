import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from '../../styles/screens/sescreen.styles'

const SEScreen = () => {
  const classes = useStyles()

  return (
    <Grid item className={classes.screenHolder}>
      <p>screen view</p>
    </Grid>
  )
}

export default SEScreen