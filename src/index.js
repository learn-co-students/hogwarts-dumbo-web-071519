import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';



import {BrowserRouter as Router} from 'react-router-dom';






document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
    <App/>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})




