import React from 'react'
import { Grid, Typography, Button, CssBaseline } from '@material-ui/core'

import LandingHeader from '../components/header/LandingHeader'

import { useStyles } from '../styles/landing/index.styles'

export default () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <LandingHeader />

      <Grid item className={classes.jumbotron}>
        <div className={classes.sme__cta}>
          <Typography variant="h5">
            Ultra Surveillance with latest drone technology
          </Typography>
          <Typography className={classes.lead}>
            future proof your security protocol
          </Typography>
          <div className={classes.spacer} />
          <Button variant="contained" className={classes.button}>Get Started</Button>
        </div>
      </Grid>
    </Grid>
  )
}