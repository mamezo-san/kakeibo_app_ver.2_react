import React from 'react';

class Month extends React.Component{
    constructor(props){
        super(props);
        this.state={ month: '1月'};
      }
    
      handleClick(month){
        this.setState({ month: month });
      }
    
    render() {
      console.log(this.props.name)
        return(
            <React.Fragment>
              <div>
                <h2>{this.state.month}</h2>
                <button onClick={()=> 
                { this.handleClick('1月')}}>
                  1月
                </button>
                <button onClick={()=> 
                { this.handleClick('2月')}}>
                  2月
                </button>
              </div>
          </React.Fragment>
        )
    }
}

export default Month ;
