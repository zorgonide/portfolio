import React from "react";
import "../experience.scss";
import { Experience } from "../data/data";
function Experiences() {
  return (
    <div className="timeline">
      <ul>
        {Experience.map((experience, i) => {
          return (
            <li key={i}>
              <div className="date">{experience.time}</div>
              <div className="title">{experience.role}</div>
              <div className="company">{experience.company}</div>
              <div className="descr">{experience.description}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experiences;
