import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import Salons from './Salons';
import Success from './Success';
import DatePicker from './DatePicker';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

class Syp extends Component {
  render() {
      return(
        <div>
          <Navigation Logotitle="Nwele"/>
          <Header title="What Are You interested In Doing?" a="select whatever"/>
          <Services p="select whatever"/>
          <Salons/>
          <Success name="Nwele"/>

        </div>
      );
  }
}

ReactDOM.render(<Syp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
