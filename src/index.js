import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import bookStore from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={bookStore}>
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
