import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { AuthContextProvider } from './contexts/AuthContext';
import { GlobalStyle } from './styles/global';

// import dracula from './styles/themes/dracula';
import nlw from './styles/themes/nlw';

function App() {
  return (
    <ThemeProvider theme={nlw}>

      <BrowserRouter>
        <AuthContextProvider>
          <GlobalStyle />
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </AuthContextProvider>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
