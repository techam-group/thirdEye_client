import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import { useStyles } from '../../styles/screens/segallery.styles'

const SEGallery = () => {
  const classes = useStyles()
  const [gallery, setGallery] = useState([])

  const renderGallery = gallery.length && gallery.map(item => (
    <div className={classes.imageHolder}>
      <img src={item.image} alt={item.title} />
    </div>
  ))

  return (
    <>
      {
        gallery.length > 0 && (
          <Grid item className={classes.main}>
            <section className={classes.gallery}>
              {renderGallery}
            </section>

            <section className={classes.segallery__buttons}>
              <Button>Save</Button>
              <Button>Cancel</Button>
            </section>
          </Grid>
        )
      }
    </>
  )
}

export default SEGallery