import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () =>{
  return(
     <ul style={{display: "flex"}}>
      <li style={{marginLeft: "10px",listStyle: "none"}}><Link to = "/">Home</Link></li>
      <li style={{marginLeft: "10px",listStyle: "none"}}><Link to= "/about">About</Link></li>
      <li style={{marginLeft: "10px",listStyle: "none"}}><Link to= "/contact">Contact</Link></li>
      <li style={{marginLeft: "10px",listStyle: "none"}}><Link to = "/services">Services</Link></li>
      <li style={{marginLeft: "10px",listStyle: "none"}}><Link to = "/servicesDetail/:23">ServicesDetail</Link></li>
     </ul>

  );
};
export default Nav;
