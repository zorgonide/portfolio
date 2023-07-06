import React from "react";

function Project(props) {
  let { title, description, image, link } = props.project;
  return (
    <div className="project shadow-large">
      <div className="project-image">
        <img src={image} height="180px" width="300px" />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a target="_blank" href={link}>
          View Project
        </a>
      </div>
    </div>
  );
}

export default Project;
