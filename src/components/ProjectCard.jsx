import React, { Component } from 'react';
import "../style/components/ProjectCard.css";

export default class ProjectCard extends Component {
  render() {
    const 
    { 
      projectScreenshot,
      projectName,
      projectDescription,
      projectDeployUrl,
      projectRepoUrl, 
    } = this.props;
  
    return (
      <div className="project-card-content">
        <a className="screenshot" href={ projectDeployUrl }>
          <img src={ projectScreenshot } alt="project-screenshot" />
        </a>
        <div className="project-details">
          <h2>{ projectName }</h2>
          <p>{ projectDescription }</p>
          <a href={ projectDeployUrl } target="_blank" rel="noreferrer" >
            <p> Deploy </p>
          </a>
          <a href={ projectRepoUrl } target="_blank" rel="noreferrer">
            <p> Repositório - GitHub </p>
          </a>
        </div>
      </div>
    )
  }
}
