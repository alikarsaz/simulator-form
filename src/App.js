import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './Container/Layout/Layout'
import './Bootstrap/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className=" container" >

            <Layout />

        </div>
      </div>
    );
  }
}

export default App;
