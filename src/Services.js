import React, {Component} from 'react';
import './Services.css'

class Services extends Component {
  constructor(props){
    super(props);
    this.state = {
      salons:[],
      services:[],
      isLoaded: false,
    }
  
  
  }


  componentDidMount() {
    fetch('http://lutheranhymnals.co.za/salon/salonUserApi/jwtApp/public/index.php/entityByService?serviceID=1')
      .then(res => res.json())
      .then(json =>{
        
          this.setState({
            isLoaded: true,
            salons: json.entity,
          })
      });

      fetch('http://lutheranhymnals.co.za/salon/salonUserApi/jwtApp/public/index.php/serviceAll')
      .then(res => res.json())
      .then(json =>{
        
          this.setState({
            isLoaded: true,
            services: json.services,
          })
      });


  }


  render() {
    var { isLoaded, salons,services } = this.state;
    return(
            <div className = "services">
            <div className="dropbut">
              <button class="dropbtn">{this.props.p}
                <i class="fa fa-caret-up"></i>
              </button>
              <div class="dropbut-content">
              <div id="container">

              
                <div className="Menu">
                  <h5> hair </h5>

                  
                  <ul>
                  {services.map(item => {

                    if(item.categoryID==1){
                      return <li><a href="">{item.name}</a></li>;
                    }
                  })}
                    
                   
                  </ul>
                </div>

                <div className="Menu">
                  <h5> Nails </h5>
                  <ul>
                    {services.map(item => {

                      if(item.categoryID==2){
                        return <li><a href="">{item.name}</a></li>;
                      }
                    })}
                    
                   </ul>
                </div>

                <div className="Menu">
                  <h5> face </h5>
                  <ul>
                    {services.map(item => {

                      if(item.categoryID==3){
                        return <li><a href="">{item.name}</a></li>;
                      }
                    })}
                    
                   </ul>
                </div>
              </div>

              </div>
            </div>

            <div id="text-section">
              <p>Salons near me</p>
            </div>

            <hr/>

            <div id="salon-list">
              {/* <h4>YOU WILL HAVE TO ADD THE SAL0N LIST HERE, PLEASE TRY TO STYLE IT :)</h4> */}
              {salons.map(item => {
                  return <p>{item.headerName}<br/>Service:{item.serviceName}<br/>Price:{item.price}<br/></p>;
                })}
            </div>

            <hr/>


            </div>



    );
  }

}

export default Services;
