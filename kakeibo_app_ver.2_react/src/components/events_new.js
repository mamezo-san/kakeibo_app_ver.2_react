import React from 'react';
import { connect } from 'react-redux';
// import { postEvents } from '../actions';
import { Link } from "react-router-dom";

class EventsNew extends React.Component{
    render() {
        return(
            <React.Fragment>
              <div>foo</div>
          </React.Fragment>
        )
    }
}

// const mapDispatchToProps = ({
//   postEvents
// })

export default connect(null,null)(EventsNew) ;
