import React from 'react';

class Categori extends React.Component{
    constructor(props){
        super(props);
            this.state={};
    }
    render(){
        return(
            <React.Fragment>
                <div>{this.props.name}</div>
                <div>{this.props.money}円</div>
            </React.Fragment>
        )
    }
}

export default Categori;