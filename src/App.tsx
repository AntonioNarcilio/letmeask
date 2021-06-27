import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/Room/NewRoom';
import { Room } from './pages/Room/Room';
import { AdminRoom } from './pages/Room/AdminRoom';
import { Contact } from './pages/Others/Contact';
import { NotFound } from './pages/Error/404';

import { AuthContextProvider } from './contexts/AuthContext';
import { GlobalStyle } from './styles/global';

import { ThemeSwitchContextProvider } from './contexts/ThemeSwitchContext';
import { ModalYesNoProvider } from './contexts/ModalYesNoContext';

function App() {
  return (
    <ThemeSwitchContextProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <ModalYesNoProvider>
            <GlobalStyle />
            <Switch>

              <Route path="/" exact component={Home} />
              <Route path="/rooms/new" component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />
              <Route path="/admin/rooms/:id" component={AdminRoom} />
              <Route path="/info" component={Contact} />

              <Route component={NotFound} />

            </Switch>
          </ModalYesNoProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeSwitchContextProvider>
  );
}

export default App;
