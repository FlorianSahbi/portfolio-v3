import React, { Component } from 'react';
import './skills.css';
import axios from 'axios';
// import DevIcon from "devicon-react-svg";

// const devIconStyle = {
//     position: "absolute",
//     fill: "white",
//     border: "5px #770000 double",
//     borderRadius: "50%",
//     width: "130px",
//     height: "130px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "2em"
// }


class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSkill: 0,
            error: null,
            isLoaded: false,
            skills: []
        }
    }

    async componentDidMount() {
    }

    renderSkillButtons() {
        return this.state.skills.map(skill => (
            // eslint-disable-next-line eqeqeq
            <div className={'skillButton ' + (this.state.activeSkill == skill._id ? 'activeButton' : '')}
                onClick={() => this.showSkill(skill._id)}>
                <h3>{skill.name}</h3>
            </div>
        ));
    }

    renderSkill(skillId) {
        return (
            <div className="skill">
                <div className="skillPreview">
                    {/* <DevIcon icon={this.state.skills[skillId].svg} style={devIconStyle} /> */}
                </div>
                <div className="skillTexte">
                    <text>{this.state.skills[skillId].description}</text>
                </div>
            </div>
        )
    }

    showSkill(skillId) {
        this.setState({
            activeSkill: skillId
        })
    }

    render() {
        if (this.state.skills.length > 0) {
            return (
                <section id="competences" className="competences">
                    <div className="skillsWrapper">
                        <div className="skillsNav">
                            {this.renderSkillButtons()}
                        </div>

                        <div className="skillDescription">
                            {this.renderSkill(this.state.activeSkill)}
                        </div>
                    </div>

                </section>
            )
        } else {
            return (
                <section id="competences" className="competences">
                    <div className="skillsWrapper">
                    </div>
                </section>
            )
        }
    }
}

export default Projects;