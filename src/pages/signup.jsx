import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Grid, Typography, Hidden, CssBaseline, FormGroup, TextField, FormHelperText, Button } from '@material-ui/core'
import { useStyles } from '../styles/auth-pages/login.styles'
import * as yup from 'yup'
import { Formik } from 'formik'

const initialState = {
  email: '',
  password: '',
  fullName: '',
  username: ''
}

const validateSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(4).required('Password is required'),
  fullName: yup.string().min(4).required('Full name is required'),
  username: yup.string().min(3).required('Username is required')
})

const useProps = {
  signup: true
}

const Signup = () => {
  const classes = useStyles(useProps)

  return (
    <Grid container>
      <CssBaseline />
      <Hidden smDown>
        <Grid item className={classes.imageHolder}></Grid>
      </Hidden>
      <Grid item className={classes.loginMain}>
        <section className={classes.header}>
          <Typography variant='h6'>Smart<span>Eyes</span></Typography>
          <Typography>register a new account</Typography>
        </section>
        <section className={classes.forms}>
          <Formik
            initialValues={initialState}
            validationSchema={validateSchema}
            onSubmit={() => { }}
            render={({
              errors,
              touched,
              handleBlur,
              handleSubmit,
              handleChange,
              values: { email, password, fullName, username }
            }) => (
                <form onSubmit={handleSubmit} autoComplete="off">
                  <FormGroup>
                    <TextField
                      required
                      fullWidth
                      name="fullName"
                      type="text"
                      value={fullName}
                      label="Fullname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.fullName | touched.fullName}
                    />
                    <FormHelperText className={classes.helperText}>
                      {
                        errors.fullName &&
                        touched.fullName &&
                        <Typography>{errors.fullName}</Typography>
                      }
                    </FormHelperText>
                  </FormGroup>

                  <FormGroup>
                    <TextField
                      required
                      fullWidth
                      name="username"
                      type="text"
                      value={username}
                      label="Username"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.username | touched.username}
                    />
                    <FormHelperText className={classes.helperText}>
                      {
                        errors.username &&
                        touched.username &&
                        <Typography>{errors.username}</Typography>
                      }
                    </FormHelperText>
                  </FormGroup>

                  <FormGroup>
                    <TextField
                      required
                      fullWidth
                      name="email"
                      type="email"
                      value={email}
                      label="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.email | touched.email}
                    />
                    <FormHelperText className={classes.helperText}>
                      {
                        errors.email &&
                        touched.email &&
                        <Typography>{errors.email}</Typography>
                      }
                    </FormHelperText>
                  </FormGroup>

                  <FormGroup>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      type="password"
                      label="Password"
                      value={password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.password | touched.password}
                    />
                    <FormHelperText className={classes.helperText}>
                      {
                        errors.password &&
                        touched.password &&
                        <Typography>{errors.password}</Typography>
                      }
                    </FormHelperText>
                  </FormGroup>


                  <FormGroup>
                    <Button type="submit" color="primary" variant="contained">Sign Up</Button>
                  </FormGroup>

                  <Typography className={classes.noAccount}>
                    Already have an account?

                    <Link to="/login">Login</Link>
                  </Typography>
                </form>
              )}
          />
        </section>
        <footer className={classes.footer}>
          <span>
            Built by <a href="https://twitter.com/tz_fayvor">Favour George</a> {' '} {moment().format('YYYY')}
          </span>
        </footer>
      </Grid>
    </Grid>
  )
}

export default Signup