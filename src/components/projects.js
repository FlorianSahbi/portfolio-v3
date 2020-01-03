import React from 'react';
import classes from './projects.module.css';
import projects from "../data/p.json";
import "./reset.css";

const Card = (props) => {
  return (
    <div className={classes.projectCardContainer}>
      <div className={classes.projectCardTitle}>
        <h2>{props.name}</h2>
        {props.url &&
          <a href={props.url} target="_blank">See</a>
        }
      </div>
    </div>
  )
};

export const Projects = () => {
  return (
    <section className={classes.projectsContainer}>
      <div className={classes.wrapper}>
        <div className={classes.gridList}>
          {projects.map(project => {
            return (
              <div className={classes.contcont}>
                <Card name={project.formattedName} url={project.url} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects;
