import React from 'react';
import './bg.css'

const Bg = (props) => {
    const { formattedName, description, url, buttonLabel, type, duree, dateDebut, dateFin, preview, alt, display, onClose } = props;

    return (
        <div className={display ? "layers" : "layers pointer"}>
            <div className={display ? "backgroundLayer showBg" : "backgroundLayer hideBg pointer"}></div>


            <div className={display ? "layer showTopLeftPanel" : "layer hideTopLeftPanel"}>
                <h1 className="title">{formattedName}</h1>
                {/* <h2>{type}</h2> */}
                <div className="close" style={{ cursor: "pointer" }} onClick={onClose}>X</div>
            </div>

            <div className={display ? "layer showTopRightPanel" : "layer hideTopRightPanel"}>
                <img alt={alt} src={url} />
            </div>

            <div className={display ? "layer showBotRightPanel" : "layer hideBotRightPanel"}>
                <p className="description">{description}</p>
            </div>

            <div className={display ? "layer showBotLeftPanel" : "layer hideBotLeftPanel"}>
                <div className="lesImg"><img alt={alt} src={url} /></div>
                <div className="lesImg"><img alt={alt} src={url} /></div>
                <div className="lesImg"><img alt={alt} src={url} /></div>
                <div className="lesImg"><img alt={alt} src={url} /></div>
            </div>
        </div>
    )
}

export default Bg;
