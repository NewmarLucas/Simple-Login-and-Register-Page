import React from 'react'

import { Box, Typography, Slide } from '@mui/material'

import { styles } from './styles'

export const ImageSection = ({ image }) => {
  return (
    <Box sx={styles.container}>
      <img src={image} alt="greece's temple" />
      <Box sx={styles.bottomContent}>
        <Slide direction='up' in={true} mountOnEnter unmountOnExit>
          <Typography variant='title'>
            Desenvolvido por{' '}
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
  )
}
