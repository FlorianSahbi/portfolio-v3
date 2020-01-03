import React, { Component } from 'react';
import classes from './header.module.css';
import "./reset.css";

class Header extends Component {
  render() {
    return (

      <header className={classes.homeContainer}>
        <div className={classes.wrapper}>
          <div className={classes.gridContainer}>
            <h1>Sahbi<br />Florian</h1>
            <h2>Développeur web</h2>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
