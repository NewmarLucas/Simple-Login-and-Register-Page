import React, { useState } from 'react'

import { Box, Typography, TextField, Button, IconButton } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

import logo from '../../assets/artyou_logo.png'
import { useStyles } from './styles'

export const FormSkeleton = (props) => {
  const { styles } = useStyles()

  const {
    handleSubmit,
    submitButtonText,
    form,
    getFieldError,
    handleChange,
    goToCadaster,
  } = props

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Box bgcolor='#EFEEE7' sx={styles.content1}>
      <Box sx={styles.section1Container}>
        <Box sx={styles.section1Title}>
          <img src={logo} alt='ArtYou Logo' />
          <Typography variant='body2'>a plataforma de cultura</Typography>
        </Box>

        <form onSubmit={handleSubmit} style={styles.inputContainer}>
          <TextField
            label='Nome'
            name='name'
            value={form.values.name}
            error={Boolean(getFieldError('name'))}
            helperText={getFieldError('name')}
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
            {submitButtonText}
          </Button>
        </form>
      </Box>

      {goToCadaster && (
        <Box sx={styles.registerButtonContainer}>
          <Typography variant='body2'>Não tem uma conta? </Typography>
          <Button onClick={goToCadaster} color='secondary' variant='text'>
            Registre-se
          </Button>
        </Box>
      )}
    </Box>
  )
}
