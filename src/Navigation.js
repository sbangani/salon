import React, { Component } from 'react';
import './App.css';
import './Navigation.css';
import Toggle from './Toggle.js';
///import {Layout, Header, Drawer, Content} from 'react-mdl';

class Navigation extends Component {
  render() {

    function toogleSidebar(){
    			document.getElementById("sidebar").classList.toggle('active');
    		}

    //const sections = ['Home', 'About', 'Services', 'Portfolio', 'contact'];
  //  const navLinks = sections.map( section =>{
    //  return (
    //    <li><a href={'#' + section}>{section}</a></li>
  //    )


    return (

        <nav>

		<div id="sidebar">
    <h2 className = "logo"> {this.props.Logotitle} </h2>
    <div id="sidebar-cont">
			<div className="toogle-btn" onClick={toogleSidebar}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<ul>
				<li><img id="pro-img" src="nwele1.jpg"/></li>
				<li>Home</li>
				<li>This</li>
        <li>Profile</li>
        <li>Settings</li>
				<li>About</li>
        <li>Log Out</li>
			</ul>
		</div>
	</div>
        </nav>

    );
  }
}

export default Navigation;
