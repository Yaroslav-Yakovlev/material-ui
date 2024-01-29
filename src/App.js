import { ThemeProvider } from '@mui/material';
import theme from './styles';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
    </ThemeProvider>
    );
}

export default App;
