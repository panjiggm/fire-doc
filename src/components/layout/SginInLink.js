import React from 'react';
import  { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/auth'

const SignInLink = props => {
   return ( 
      <ul className="right">
         <li><NavLink to="/create">New Doc</NavLink></li>
         <li><a onClick={props.signOut}>Log Out</a></li>
         <li><NavLink to="/" className="btn btn-floating pink lighten-1" >{ props.profile.initials }</NavLink></li>
      </ul>
    );
}
 
export default connect(null, { signOut })(SignInLink);