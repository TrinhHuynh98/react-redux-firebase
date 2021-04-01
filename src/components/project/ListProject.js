import React from 'react';
import SummaryProject from './SummaryProject';
import { Link } from 'react-router-dom';

const ListProject = ( {projects} )  =>{
    
    return (
    <div>
    { projects && projects.map(project => {
        return (
            <Link to = {'/project/' + project.id}>
                 <SummaryProject project={project} key={project.id} />
            </Link>
        )
    })}
    </div>
    )
}
export default ListProject;