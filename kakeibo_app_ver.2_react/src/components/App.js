import React from 'react';
import '../App.css';
import Header from './Header';
import Month from './Month';
import Main from './Main';
import { connect } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from '../reducers';

// import { increment,decrement } from '../actions/index';



class App extends React.Component{
  render() {
    return(
      <div>
        <h1>生活費を計算しよう</h1>
        <Header />
        <Month />
        <Main />
      </div>
    )
  }
}


export default App;