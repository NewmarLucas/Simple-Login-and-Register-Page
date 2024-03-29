import { useTheme } from '@mui/material/styles'

export const useStyles = () => {
  const theme = useTheme()

  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    contentContainer: {
      width: '90%',
      height: 600,
      maxWidth: 960,
      display: 'flex',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
      borderRadius: '2rem',
      overflow: 'hidden',
      [theme.breakpoints.down('md')]: {
        width: '95%',
        maxWidth: 400,
      },
    },
  }

  return { styles }
}