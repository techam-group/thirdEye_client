import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from '../../styles/sm-layouts/smlayouts.styles'

export default ({ children }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      {children}
    </Grid>
  )
}