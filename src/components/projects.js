import React, { useState } from 'react';
import './projects.css'
import Background from '../components/bg'
import appartooPreview from "../images/previews/previewAppartoo1.png"
import cirisiPreview from "../images/previews/previewCirisi.png"
import floriansahbiPreview from "../images/previews/previewFloriansahbi.png"
import lagalopeePreview from "../images/previews/previewLagalopee.png"
import lareinettePreview from "../images/previews/previewLareinette.png"
import oddmushroomshopPreview from "../images/previews/previewOddMushroom.png"
import swdvPreview from "../images/previews/previewSWDV.png"
import appartooPreview1 from "../images/previews/previewAppartoo1.png"
import appartooPreview2 from "../images/previews/previewAppartoo2.png"
import appartooPreview3 from "../images/previews/previewAppartoo3.png"
import appartooPreview4 from "../images/previews/previewAppartoo4.png"
import p from "../data/p.json"

export const Projects = () => {
    const [projects, setProjects] = useState(p)
    const [id, setId] = useState(2)
    const [navIsDisplayed, setNavIsDisplayed] = useState(true)
    const previews = [appartooPreview, cirisiPreview, floriansahbiPreview, lagalopeePreview, lareinettePreview, oddmushroomshopPreview, swdvPreview]
    const screenshots = [appartooPreview1, appartooPreview2, appartooPreview3, appartooPreview4, appartooPreview4]
    const [display, setDisplay] = useState(false)

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
                // url={url}
                url="https://pm1.narvii.com/6028/1cd74bdfd4df659edfdb17712e560c672cc37c5f_hq.jpg"
                buttonLabel={buttonLabel}
                type={type}
                duree={duree}
                dateDebut={dateDebut}
                dateFin={dateFin}
                preview={preview}
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
                                    preview={previews[i]}
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
