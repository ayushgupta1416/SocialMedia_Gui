import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import Navbar from './components/navbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/';
import themeFile from './utility/theme';
import jwtDecode from 'jwt-decode';
import AuthRoute from './utility/AuthRoute'
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

let authenticated;
const token = localStorage.FBtoken;

if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login'
    authenticated = false;
  }
  else {
    authenticated = true;
  }
}

const theme = createMuiTheme(themeFile);
console.log(theme);
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Router>
            <div className="container">
              <Navbar />
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute exact path="/login" component={login} authenticated={authenticated} />
                <AuthRoute exact path="/signup" component={signup} authenticated={authenticated} />
              </Switch>
            </div>
          </Router>

        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
