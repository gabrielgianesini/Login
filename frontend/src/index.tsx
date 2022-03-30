import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { RoutesApp } from './routes';

ReactDOM.render(
    <React.StrictMode>
      <RoutesApp />
    </React.StrictMode>,
  document.getElementById('root')
);

//new app
reportWebVitals();
