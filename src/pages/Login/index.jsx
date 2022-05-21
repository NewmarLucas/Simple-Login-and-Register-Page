import React from 'react'

import { Box, Typography, TextField, Button } from '@mui/material'
import { styles } from './styles'
import image from '../../assets/image-2.jpeg'
import logo from '../../assets/artyou_logo.png'

const Login = () => {
  return (
    <Box sx={styles.container}>
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
                <TextField label='Password *' fullWidth variant='outlined' />
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
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
