import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { readEvents } from '../actions/index';
import reducers from '../reducers';

class EventIndex extends React.Component{
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event =>(
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

    render() {
      const props =this.props
        return(
            <React.Fragment>
              <table>
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
                </thead>

                <tbody>
                {this.renderEvents()}
                </tbody>
              </table>
          </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({events: state.eventIndex})
const mapDispatchToProps = ({
  readEvents
})

export default connect(mapStateToProps,mapDispatchToProps)(EventIndex) ;
