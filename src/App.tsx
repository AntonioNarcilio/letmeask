import { ThemeProvider } from 'styled-components';
// import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { GlobalStyle } from './styles/global';

// import dracula from './styles/themes/dracula';
import nlw from './styles/themes/nlw';

function App() {
  return (
    <>
      <ThemeProvider theme={nlw}>
        <GlobalStyle />
        <NewRoom />
      </ThemeProvider>
    </>
  );
}

export default App;
