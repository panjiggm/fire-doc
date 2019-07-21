import React from 'react'

const ProjectDetails = props => {
   const id = props.match.params.id
   return (
      <div className="container section project-details">
         <div className="card z-depth-0">
            <div className="card-content">
               <span className="card-title">Doc Title - {id}</span>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, nemo id incidunt eligendi voluptatum perferendis aliquid porro vitae itaque expedita temporibus magni reprehenderit dolorem architecto ipsum dolores dicta est esse!</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
               <div>Posted By PanjiGGM</div>
               <div>2ns July, 4am</div>
            </div>
         </div>
      </div>
   )
}

export default ProjectDetails