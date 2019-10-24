import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Paper, Typography } from '@material-ui/core'

export default () => (
  <Grid container>
    <Paper>
      <Typography>
        404
        <span>Page does not exist</span>
      </Typography>
      <Link to="/">Home</Link>
    </Paper>
  </Grid>
)