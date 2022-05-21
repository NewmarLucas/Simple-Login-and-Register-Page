import React from 'react'

import { Box, Fade } from '@mui/material'
import { ImageSection, FormSkeleton } from '../../components'

import { useHooks } from './hooks'
import { useStyles } from './styles'
import image from '../../assets/image-2.jpeg'

const Login = () => {
  const { handleSubmit, handleChange, form, getFieldError, goToCadaster } =
    useHooks()
  const { styles } = useStyles()

  return (
    <Box sx={styles.container}>
      <Fade in={true}>
        <Box sx={styles.contentContainer}>
          <FormSkeleton
            submitButtonText='Login'
            handleSubmit={handleSubmit}
            form={form}
            getFieldError={getFieldError}
            handleChange={handleChange}
            goToCadaster={goToCadaster}
          />

          <ImageSection image={image} imageAlt="greece's temple" />
        </Box>
      </Fade>
    </Box>
  )
}

export default Login
