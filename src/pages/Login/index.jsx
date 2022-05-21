import React, { useState } from 'react'

import {
  Box,
  Typography,
  TextField,
  Button,
  Fade,
  IconButton,
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { ImageSection } from '../../components'

import { useHooks } from './hooks'
import { styles } from './styles'
import image from '../../assets/image-2.jpeg'
import logo from '../../assets/artyou_logo.png'

const Login = () => {
  const { handleSubmit, handleChange, form, getFieldError, goToCadaster } =
    useHooks()
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
                <Typography variant='body2'>a plataforma de cultura</Typography>
              </Box>

              <form onSubmit={handleSubmit} style={styles.inputContainer}>
                <TextField
                  label='Email'
                  name='email'
                  value={form.values.email}
                  error={Boolean(getFieldError('email'))}
                  helperText={getFieldError('email')}
                  onChange={handleChange}
                  fullWidth
                  variant='outlined'
                />
                <TextField
                  label='Senha'
                  fullWidth
                  sx={{ mt: '10px' }}
                  name='password'
                  value={form.values.password}
                  error={Boolean(getFieldError('password'))}
                  helperText={getFieldError('password')}
                  onChange={handleChange}
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
            </Box>

            <Box sx={styles.registerButtonContainer}>
              <Typography variant='body2'>Não tem uma conta? </Typography>
              <Button onClick={goToCadaster} color='secondary' variant='text'>
                Registre-se
              </Button>
            </Box>
          </Box>

          <ImageSection image={image} />
        </Box>
      </Fade>
    </Box>
  )
}

export default Login
