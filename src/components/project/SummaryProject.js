import React from 'react';

const SummaryProject = ({project}) =>{
    return (
    <div>
    <div className="project-list section">
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
            </div>
        </div>
    </div>
    </div>
    )
}
export default SummaryProject;