import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useStyles } from '../../styles/screens/secontrols.styles'

const SEControls = () => {
  const classes = useStyles()

  return (
    <Grid item className={classes.mainControl}>
      <div>
        <Button className='art'>AR</Button>
        <Button className='capture'>Capture</Button>
        <Button className='stream'>Stream</Button>
        <Button className='rt'>Ro</Button>

        <div className='center'>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='btns'>
            <Button className='l'> L </Button>
            <Button className='r'> R</Button>
            <Button className='c'>C</Button>
            <div className='ring'></div>
            <Button className='u'>U</Button>
            <Button className='d'>D</Button>
          </div>
        </div>


        <Button className='fl'>FL</Button>
        <Button className='emagency'>Emergency</Button>
        <Button className='fr'>FR</Button>
      </div>
    </Grid>
  )
}

export default SEControls