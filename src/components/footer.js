import React, { Component } from 'react';
import './footer.css'
import "./reset.css";

class Projects extends Component {
  render() {
    return (
      <footer>
        <div className="footerContent">
          <p>© 2018 - 2019 - Handmade with <span style={{ color: 'red' }}>❤</span> by me.</p>
        </div>
      </footer>
    )
  }
}

export default Projects;