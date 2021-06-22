import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';

// import dracula from './styles/themes/dracula';
import nlw from './styles/themes/nlw';

function App() {
  return (
    <>
      <ThemeProvider theme={nlw}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
