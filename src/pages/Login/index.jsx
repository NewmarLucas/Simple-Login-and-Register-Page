import React, { useState } from 'react'

import {
  Box,
  Typography,
  TextField,
  Button,
  Slide,
  Fade,
  IconButton,
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

import { styles } from './styles'
import image from '../../assets/image-2.jpeg'
import logo from '../../assets/artyou_logo.png'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Box sx={styles.container}>
      <Fade in={true}>
        <Box sx={styles.contentContainer}>
          <Box bgcolor='#EFEEE7' sx={styles.content1}>
            <Box sx={styles.section1Container}>
              <Box sx={styles.section1Title}>
                <img src={logo} alt='ArtYou Logo' />
                <Typography variant='body2'>the culture platform</Typography>
              </Box>

              <Box sx={styles.inputContainer}>
                <form
                  onSubmit={() => {
                    alert('teste')
                  }}
                  style={styles.inputContent}
                >
                  <TextField
                    label='Email or Username'
                    fullWidth
                    variant='outlined'
                  />
                  <TextField
                    label='Password *'
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    variant='outlined'
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          edge='end'
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    }}
                  />
                  <Button
                    sx={styles.submitButton}
                    type='submit'
                    color='primary'
                    variant='contained'
                  >
                    Login
                  </Button>
                </form>
                <Button color='secondary' variant='text'>
                  I forgot my password
                </Button>
              </Box>
            </Box>

            <Box sx={styles.registerButtonContainer}>
              <Typography variant='body2'>Don't have an account? </Typography>
              <Button color='secondary' variant='text'>
                Register
              </Button>
            </Box>
          </Box>

          <Box sx={styles.content2}>
            <img src={image} alt="greece's temple" />
            <Box sx={styles.section2TextContainer}>
              <Slide direction='up' in={true} mountOnEnter unmountOnExit>
                <Typography variant='title'>
                  Powered by{' '}
                  <a
                    href='https://www.linkedin.com/in/newmarlucas/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Newmar Lucas
                  </a>
                </Typography>
              </Slide>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Box>
  )
}

export default Login
