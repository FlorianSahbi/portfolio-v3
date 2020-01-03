import React, { Component } from 'react';
import classes from './hobbies.module.css';
import "./reset.css";

class Projects extends Component {
  render() {
    return (
      <section className={classes.hobbiesContainer}>
        <div className={classes.wrapper}>
          <div className={classes.gridContainer}>
            <div className={`${classes.digit} ${classes.hobby}`}>
              <h3>Le secteur du digital</h3>
            </div>
            <div className={`${classes.japan} ${classes.hobby}`}>
              <h3>Le japon et sa culture</h3>
            </div>
            <div className={`${classes.dive} ${classes.hobby}`}>
              <h3>La plongée sous-marine</h3>
            </div>
            <div className={`${classes.photo} ${classes.hobby}`}>
              <h3>La photographie</h3>
            </div>
            <div className={`${classes.art} ${classes.hobby}`}>
              <h3>Les arts</h3>
            </div>
            <div className={`${classes.tech} ${classes.hobby}`}>
              <h3>Le secteur du digital</h3>
            </div>
            <div className={`${classes.travel} ${classes.hobby}`}>
              <h3>Le voyage et le tourisme</h3>
            </div>
            <div className={`${classes.game} ${classes.hobby}`}>
              <h3>Les jeux vidéo</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;
