import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={ month: '1'};
  }
  render() {
    return(
    <React.Fragment>
      <div>
        <h2>{ this.state.month }月</h2>
        <button onClick= {()=>
        { this.setState({ month: '1' })}
        }>1月</button>
        <button onClick= {()=>
        { this.setState({ month: '2' })}
        }>2月</button>
        <button onClick= {()=>
        { this.setState({ month: '3' })}
        }>3月</button>
      </div>
    </React.Fragment>
    )
  }
}

export default App;
