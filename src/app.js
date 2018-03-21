// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import Indi from './components/Indi';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

ReactDOM.render(<Indi />, document.getElementById('app'));
  
if (module.hot) {
    module.hot.accept()
    }