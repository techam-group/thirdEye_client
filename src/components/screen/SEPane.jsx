import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from '../../styles/screens/sepane.styles'

const SEPane = () => {
  const classes = useStyles()

  return (
    <Grid item className={classes.screenHolder}>
      <p>side pane</p>
    </Grid>
  )
}

export default SEPane