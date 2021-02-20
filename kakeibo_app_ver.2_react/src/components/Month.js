import React from 'react';
import { connect } from 'react-redux';
import { increment,decrement,handleClick1,handleClick2 } from '../actions/index';

class Month extends React.Component{
    render() {
      const props =this.props
        return(
            <React.Fragment>
              <div>
                <h2>{props.value}月</h2>
                <button onClick={props.increment}>+1</button>
                <button onClick={props.decrement}>-1</button>
                <br></br>
                <button onClick={props.handleClick1}>1月</button>
                <button onClick={props.handleClick2}>2月</button>
              </div>
          </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({value: state.monthCount.value })
const mapDispatchToProps =dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  handleClick1: () => dispatch(handleClick1()),
  handleClick2: () => dispatch(handleClick2())
})

export default connect(mapStateToProps,mapDispatchToProps)(Month) ;
