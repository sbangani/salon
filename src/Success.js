import React, {Component} from 'react';
import './Success.css';
import './Salons';

class Success extends Component {
  render() {
    return(
      <div id="FinalPage">
        <div className="top-sec">
          <p> {this.props.name} </p>
        </div>

        <div className="Message">
          <p> Booked! :) </p>
        </div>

        <hr/>

        <p>history will go here</p>


      </div>
    );

  }
}


export default Success;
