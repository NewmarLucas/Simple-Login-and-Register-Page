import Routes from './routes'
import { CustomThemeProvider } from './providers';

function App() {
  return (
    <CustomThemeProvider>
      <Routes />
    </CustomThemeProvider>
  )
}

export default App;
