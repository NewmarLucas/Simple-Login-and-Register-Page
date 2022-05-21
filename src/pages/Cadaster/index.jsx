import React from 'react'

import { Box, Fade } from '@mui/material'
import { ImageSection, FormSkeleton } from '../../components'

import { useHooks } from './hooks'
import { useStyles } from './styles'
import image from '../../assets/image-3.jpeg'

const Cadaster = () => {
  const { handleSubmit, handleChange, form, getFieldError } = useHooks()
  const { styles } = useStyles()

  return (
    <Box sx={styles.container}>
      <Fade in={true}>
        <Box sx={styles.contentContainer}>
          <FormSkeleton
            submitButtonText='Cadastrar'
            handleSubmit={handleSubmit}
            form={form}
            getFieldError={getFieldError}
            handleChange={handleChange}
          />

          <ImageSection image={image} />
        </Box>
      </Fade>
    </Box>
  )
}

export default Cadaster
