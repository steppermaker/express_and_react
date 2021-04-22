import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from '@material-ui/styles';
import {
  ThemeProvider as StyledThemeProvider
} from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import theme from './theme';
import MyForm from './components/MyForm';
import MyFormLog from './components/MyFormLog';
import MyFormRedux from './components/MyFormRedux';
import Count from './components/Count'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Router>
              <App>
                <Route exact path='/' component={MyFormRedux} />
                <Route path='/count' component={Count} />
                <Route path='/myform' component={MyForm} />
                <Route path='/myformlog' component={MyFormLog} />
              </App>
            </Router>
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();