import React, { Component } from 'react';
import './hobbies.css'

class Projects extends Component {
    render() {
        return (
            <section id="hobbies" className="hobbies" style={{}}>
                <div className="hobbiesContent">
                    <h2>Goût prononcé pour...</h2>
                    <div className="ligneHauteHobbies">
                        <div className="colonneLigneHauteHobbies colonneHobby">
                            <div className="hobby hobbyDigital">
                                <h3>Le secteur du digital</h3>
                            </div>
                        </div>
                        <div className="colonneLigneHauteHobbiesDouble">
                            <div className="colonneDoubleLarge colonneHobby">
                                <div className="hobby hobbyJapon" style={{ width: '100%' }}>
                                    <h3>Le japon et sa culture</h3>
                                </div>
                            </div>
                            <div className="colonneDoubleLarge colonneHobby">
                                <div className="hobby hobbyPlongee" style={{ width: '100%' }}>
                                    <h3>La plongée sous-marine</h3>
                                </div>
                            </div>
                        </div>
                        <div className="colonneLigneHauteHobbies colonneHobby">
                            <div className="hobby hobbyPhoto">
                                <h3>La photographie</h3>
                            </div>
                        </div>
                        <div className="colonneLigneHauteHobbies colonneHobby">
                            <div className="hobby hobbyDessin">
                                <h3>Les arts</h3>
                            </div>
                        </div>
                    </div>
                    <div className="ligneBasseHobbies">
                        <div className="colonneLigneBasseHobbies colonneHobby">
                            <div className="hobby hobbyNewtech">
                                <h3>Les nouvelles technologies</h3>
                            </div>
                        </div>
                        <div className="colonneLigneBasseHobbies colonneHobby">
                            <div className="hobby hobbyVoyage">
                                <h3>Le voyage et le tourisme</h3>
                            </div>
                        </div>
                        <div className="colonneLigneBasseHobbies colonneHobby">
                            <div className="hobby hobbyJv">
                                <h3>Les jeux vidéo</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Projects; 