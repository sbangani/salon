import React, {Component} from 'react';
import './DatePicker.css';

class DatePicker extends Component {
  render() {
    return(
      <div id="DateSec">
        <div className="top-sec">
          <p> {this.props.name} </p>
        </div>

        <div className="DatePickerContainer">
        <div className="DatePickerContainer_Title">{"March"}</div>
        <div className="SomeMonth">  </div>
        </div>
      </div>
    );

  }
}


export default DatePicker;
