import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import './project.css'





export const Project = (props) => {
    const { formattedName, description, url, buttonLabel, type, duree, dateDebut, dateFin, preview, alt } = props;


    return (
        <div className="project">
            <div className="leftColumn">
                <h2>{formattedName}</h2>
                <p>{description}</p>
                {(url && <a href={url} target="blank" className="buttonProject">
                    {buttonLabel}
                </a>)}
            </div>

            <div className="rightColumn">
                {/* <span className="closeProjectButton" onClick={() => this.props.showProjectsNav()}>fermer</span> */}
                <span>
                    <i className="fa fa-info-circle"></i>
                    {type} | {duree} |  {dateDebut} / {dateFin}
                </span>
                <img className="projectImage" src={preview} alt={alt} />
            </div>
        </div>
    )

}

export default Project;
