import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  c = 'John' ;
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5} country="us" category="science"/>
      </div>
    )
  }
}
