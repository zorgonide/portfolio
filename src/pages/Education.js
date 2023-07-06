import React from "react";

function EduBlock(props) {
  let { university, time, degree, grade } = props.education;
  return (
    <div className="education-block">
      <h4 className="weight-bold">{university}</h4>
      <span className="education-date">{time}</span>
      <p className="italic">{degree}</p>
      <ul>
        <li>{grade}</li>
      </ul>
    </div>
  );
}

export default EduBlock;
