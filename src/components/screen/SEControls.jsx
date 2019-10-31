import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from '../../styles/screens/secontrols.styles'

const SEControls = () => {
  const classes = useStyles()

  return (
    <Grid item className={classes.mainControl}>
      <div>
        <button className='art'>AR</button>
        <button className='caption'>Capture</button>
        <button className='Stream'>Stream</button>
        <button className='rt'>Ro</button>

        <div className='center'>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='btns'>
            <button className='l'> L </button>
            <button className='r'> R</button>
            <button className='c'>C</button>
            <div className='ring'></div>
            <button className='u'>U</button>
            <button className='d'>D</button>
          </div>
        </div>


        <button className='fl'>FL</button>
        <button className='emagency'>Emergency</button>
        <button className='fr'>FR</button>
      </div>
    </Grid>
  )
}

export default SEControls