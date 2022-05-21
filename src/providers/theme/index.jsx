import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

import { palette } from './pallete'
import { typography } from './typography'
import { components } from './components'

export const CustomThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette,
    typography,
    components,
    spacing: 8,
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
