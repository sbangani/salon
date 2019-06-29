import React, {Component} from 'react';
import './Header.css';
import Background from './img/nwele1.jpg';
import Services from './Services.js';

const myStyles = {
backgroundImage: `url( ${Background} )`,
//backgroundColor: 'white',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
 backgroundPosition: '50% 55%',
//opacity:'0.75'
}

class Header extends Component {
  render(){
    return (
      <header style={myStyles} >
        <div>
        <h1>{this.props.title} </h1>
        <p>random paragraph</p>
      </div>
        <div className="dropdown">
          <button class="dropbtn">{this.props.a }
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
          <div id="container">
            <div className="Menu">
              <h5> hair </h5>
              <ul>
                  <li><a href="">Wash and Go</a></li>
                  <li><a href="">Wash and Style</a></li>
                  <li><a href="">Style</a></li>
                  <li><a href="">Relax</a></li>
                  <li><a href="">Blow-dry</a></li>
                  <li><a href="">Chemical Blow-dry</a></li>
                  <li><a href="">Special Styling</a></li>
                  <li><a href="">Extensions</a></li>
                  <li><a href="">Braids</a></li>
                  <li><a href="">Wig</a></li>
                  <li><a href="">Weave</a></li>
                  <li><a href="">Colouring/Tint/Highlights</a></li>
                  <li><a href="">perm</a></li>
                  <li><a href="">Scalp and Hair Treatment</a></li>
              </ul>
            </div>

            <div className="Menu">
              <h5> Nails </h5>
              <ul><li><a href="">Nail Attachments</a></li>
                  <li><a href="">Keratin Treatment</a></li>
                  <li><a href="">Manicure</a></li>
                  <li><a href="">Pedicure</a></li>
                  <li><a href="">Colouring and Accessories</a></li>
                </ul>
            </div>

            <div className="Menu">
              <h5> face </h5>
              <ul><li><a href="">Facials</a></li>
                  <li><a href="">Eyebrows and Facial Grooming</a></li>
                  <li><a href="">Face Beat</a></li>
                  <li><a href="">Treatment (Face Masks)</a></li>
                </ul>
            </div>
          </div>

          </div>
        </div>
      </header>


    );
  }

};

export default Header
