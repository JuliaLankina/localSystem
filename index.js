import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './styles.css';
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './store'

const app = 
        <React.StrictMode>
          <Provider store={store}>
              <Main />
          </Provider>       
        </React.StrictMode>

ReactDOM.render(
  app,
  document.getElementById('root')
);

reportWebVitals();
