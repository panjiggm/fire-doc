import React, { Component } from 'react';
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
   state = {  }

   
   render() { 
      const { projects, auth } = this.props
      if (!auth.uid && auth.isLoaded === true) return <Redirect to='/signin' />

      return ( 
         <div className="dashboard container">
            <div className="row">
               <div className="col s12 m7">
                  <ProjectList projects={projects} />
               </div>
               <div className="col s12 m3 offset-m1">
                  <Notifications />
               </div>
            </div>
         </div>
       );
   }
}

const mapStateToProps = (state) => {
   return {
     projects: state.firestore.ordered.projects,
     auth: state.firebase.auth
   }
 }
 
 export default compose(
   connect(mapStateToProps),
   firestoreConnect([
     { collection: 'projects' }
   ])
 )(Dashboard)