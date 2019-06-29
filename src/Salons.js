import React, {Component} from 'react';
import './Salons.css'

class Salons extends Component {

    constructor(props){
      super(props);
      this.state = {
        items:[],
        isLoaded: false,
      }
    
    
    }
    
    componentDidMount() {
      fetch('http://lutheranhymnals.co.za/salon/salonUserApi/jwtApp/public/index.php/serviceByEntity?entityID=1')
        .then(res => res.json())
        .then(json =>{
          
            this.setState({
              isLoaded: true,
              items: json,
            })
        });
    }

  render() {

    var { isLoaded, items } = this.state;
    
      if(!isLoaded){
        return <div>Loading....</div>
      }else {

    return(
            <div className = "salons">

              <div className="top-sec">
              
               
                   <p>{items.entity.headerName}</p>
              
              </div>

              <div className="desc">
              <p>{items.entity.description}</p>
              </div>

              <div className="Services">
              <h5> SERVICES </h5>
              {/* <p> I wanted to add a list of here but I figured you might want to Add</p>
              <p> the items on a different structure, these are just dummy styles </p> */}

              
                {items.service.map(item => {
                  return <p>{item.serviceName}</p>;
                })}
              


              </div>
              <button id="continue" onclick="location.href='./DatePicker'">Continue</button>

            </div>



    );
 }
}

}

export default Salons;
