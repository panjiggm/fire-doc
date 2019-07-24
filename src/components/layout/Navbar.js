import React from 'react';
import {Link} from 'react-router-dom'
import SignInLink from './SginInLink'
import SignOutLink from './SignOutLink' 
import { connect } from 'react-redux'

const Navbar = props => {
   const { auth } = props
   const links = auth.uid ? <SignInLink/> : <SignOutLink/>
   return ( 
      <nav className="nav-wrapper grey darken-3">
         <div className="container">
            <Link to="/" className="brand-logo" > FireDoc </Link>
            { auth.isLoaded && links }
         </div>
      </nav>
    );
}

const mapStateToProps = state => {
   return {
      auth: state.firebase.auth
   }
}
 
export default connect(mapStateToProps)(Navbar)