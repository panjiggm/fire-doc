import React from 'react';
import  { NavLink } from 'react-router-dom'

const SignInLink = () => {
   return ( 
      <ul className="right">
         <li><NavLink to="/create">New Doc</NavLink></li>
         <li><NavLink to="/">Log Out</NavLink></li>
         <li><NavLink to="/" className="btn btn-floating pink lighten-1" >PG</NavLink></li>
      </ul>
    );
}
 
export default SignInLink;