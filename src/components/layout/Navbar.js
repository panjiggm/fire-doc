import React from 'react';
import {Link} from 'react-router-dom'
import SignInLink from './SginInLink'
import SignOutLink from './SignOutLink' 
import { connect } from 'react-redux'

const Navbar = props => {
   const { auth, profile } = props
   const links = auth.uid ? <SignInLink profile={profile} /> : <SignOutLink/>
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
   console.log(state)
   return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
   }
}
 
export default connect(mapStateToProps)(Navbar)