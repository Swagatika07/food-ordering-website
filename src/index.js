import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { StrictMode } from 'react';
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initialState';
import reducer from './context/reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
  <Router>
  <StateProvider initialState={initialState} reducer={reducer}>
  <App />
  </StateProvider>
  </Router>
  </StrictMode>
  
);
// ReactDOM.render(<Router>
//   <App/>
//   </Router>, 
//   document.getElementById("root"));