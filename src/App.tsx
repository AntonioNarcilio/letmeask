import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';
import { GlobalStyle } from './styles/global';

// import dracula from './styles/themes/dracula';
import nlw from './styles/themes/nlw';
import { Contact } from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={nlw}>

      <BrowserRouter>
        <AuthContextProvider>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/info" component={Contact} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
