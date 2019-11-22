import React, { useState } from 'react';
import './projects.css'
import Background from '../components/bg'
import appartooPreview from "../images/previews/appartoo/appartoo.png"
import cirisiPreview from "../images/previews/cirisi/cirisi.png"
import floriansahbiPreview from "../images/previews/floriansahbi/floriansahbi.png"
import lagalopeePreview from "../images/previews/lagalopee/lagalopee.png"
import lareinettePreview from "../images/previews/lareinette/lareinette.png"
import oddmushroomshopPreview from "../images/previews/oddmushroom/oddMushroom.png"
import swdvPreview from "../images/previews/swdv/swdv.png"
import siogamePreview from "../images/previews/siogame/siogame.png"
import nendoroidsPreview from "../images/previews/nendoroids/nendoroids.png"

import appartooPreview1 from "../images/previews/appartoo/appartoo.png"
import appartooPreview2 from "../images/previews/appartoo/appartoo2.png"
import appartooPreview3 from "../images/previews/appartoo/appartoo3.png"
import appartooPreview4 from "../images/previews/appartoo/appartoo4.png"

import p from "../data/p.json"

const obj = {
    appartoo: appartooPreview1,
    cirisi: cirisiPreview,
    floriansahbi: floriansahbiPreview,
    lagalopee: lagalopeePreview,
    lareinette: lareinettePreview,
    nendoroids: nendoroidsPreview,
    oddmushroom: oddmushroomshopPreview,
    siogame: siogamePreview,
    swdv: swdvPreview,
}

export const Projects = () => {
    const [projects, setProjects] = useState(p)
    const [id, setId] = useState(2)
    const [navIsDisplayed, setNavIsDisplayed] = useState(true)
    const previews = [appartooPreview, cirisiPreview, floriansahbiPreview, lagalopeePreview, lareinettePreview, oddmushroomshopPreview, swdvPreview]
    const [display, setDisplay] = useState(false)
    
    const screenshots = [appartooPreview1, appartooPreview2, appartooPreview3, appartooPreview4]

    const handleProjectSelected = (id) => {
        setId(id);
        setDisplay(true)
        console.log(id)
    }

    const showProject = (projectId) => {
        const { _id, formattedName, description, url, buttonLabel, type, duree, dateDebut, dateFin, preview, alt } = p[id];
        return (
            <Background
                id={_id}
                formattedName={formattedName}
                description={description}
                url={url}
                buttonLabel={buttonLabel}
                type={type}
                duree={duree}
                dateDebut={dateDebut}
                dateFin={dateFin}
                preview={obj[preview]}
                alt={alt}
                display={display}
                onClose={closeModal}
            />
        );
    }

    const closeModal = () => {
        setDisplay(false)
    }

    const ProjectCard = (props) => {
        return (
            <li onClick={() => handleProjectSelected(props.id)}>
                <h2>
                    {props.formattedName}
                </h2>
                <div className="filter"></div>
                <img className="navButton" src={props.preview} alt={props.alt} />
            </li>
        )
    }

    const renderProjectNav = () => {
        return (
            <nav className={"projectNav"}>
                <ul>
                    {
                        p.map((project, i) => {
                            return (
                                <ProjectCard
                                    key={project._id}
                                    id={project._id}
                                    preview={obj[project.preview]}
                                    alt={project.alt}
                                    formattedName={project.formattedName}
                                />
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }

    return (
        <section id="projets" className="projets">
            <div className="projectsWrapper">
                {renderProjectNav()}
                {showProject()}
            </div>
        </section >
    )
}

export default Projects;
