import React, { Component } from 'react';
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
   state = {  }
   render() { 
      const { projects } = this.props

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

const mapStateToProps = state => ({
   projects: state.project.projects
})
 
export default connect(mapStateToProps)(Dashboard)