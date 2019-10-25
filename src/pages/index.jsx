import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button, CssBaseline, Hidden, Paper, ListItem, IconButton, Card, CardContent } from '@material-ui/core'
import { FlightTakeoff, TrackChanges, GpsFixed } from '@material-ui/icons'
import clsx from 'clsx'
import LandingHeader from '../components/header/LandingHeader'

import { useStyles } from '../styles/landing/index.styles'
import moment from 'moment'

export default () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <LandingHeader />

      <div className={classes.sme__flightCover}>
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

        <Hidden smDown>
          <Paper elevation={3} className={classes.sme__navs}>
            <ListItem>
              <IconButton>
                <FlightTakeoff />
              </IconButton>
              Deploy
            </ListItem>
            <ListItem>
              <IconButton>
                <TrackChanges />
              </IconButton>
              Monitor
            </ListItem>

            <ListItem>
              <IconButton>
                <GpsFixed />
              </IconButton>
              Control
            </ListItem>
          </Paper>
        </Hidden>
      </div>

      <div className={classes.sme__flightDetails}>
        <section>
          <Typography variant="h6" data-sme-title>Easy 1-2-3</Typography>
          <Typography data-sme-lead>Jump start your security protocols now</Typography>
        </section>

        <Grid item>
          <div className={clsx(classes.sme__flightDetails_card, classes.sme__flightDetails_deploy)}>
            <div data-sme-image />
            <Card>
              <CardContent>
                <Typography variant="h6">Deploy SmartEyes</Typography>
                <Typography>
                  We take you through simple steps to deploy your first single SmartEye and to deploying a cluster of SmartEyes. All you need to know is carefully documented in simple communication.
                </Typography>
                <Button fullWidth>Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item>
          <div className={clsx(classes.sme__flightDetails_card, classes.sme__flightDetails_monitor)}>
            <Card>
              <CardContent>
                <Typography variant="h6">Monitor SmartEyes</Typography>
                <Typography>
                  Monitor SmartEyes once in the air, experience a whole new power over your data feed in real-time. Capture moments, save video streams and do a lot more.
                </Typography>
                <Button fullWidth>Learn More</Button>
              </CardContent>
            </Card>
            <div data-sme-image />
          </div>
        </Grid>
        <Grid item>
          <div className={clsx(classes.sme__flightDetails_card, classes.sme__flightDetails_control)}>
            <div data-sme-image />
            <Card>
              <CardContent>
                <Typography variant="h6">Control SmartEyes</Typography>
                <Typography>
                  Take control and pilot your crusade, SmartEyes auto-pilot can be disabled so you take your operations by the wheels. Do it your own way.
                </Typography>
                <Button fullWidth>Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </div>

      <Grid item className={classes.sme__missions}>
        <section data-sme-mission>
          <Typography variant="h6">Get More From SmartEyes</Typography>
          <Typography data-sme-lead>
            SmartEyes missions, scheduled perimeter checks and health-mainteance protocols
          </Typography>
          <Button className={classes.button}>Go Missions</Button>
        </section>
      </Grid>

      <Grid item className={classes.sme__footer}>
        <footer>
          <Link to="/">
            <Typography variant="h6" data-sme-footerTitle>
              Smart<span>Eyes</span>
            </Typography>
          </Link>

          <span>
            Built by <a href="https://twitter.com/tz_fayvor">Favour George</a> {moment().format('YYYY')}
          </span>

          <Button>Get in touch</Button>
        </footer>
      </Grid>
    </Grid>
  )
}