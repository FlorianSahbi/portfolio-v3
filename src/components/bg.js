import React from 'react';
import './bg.css'

const Bg = (props) => {
    const { formattedName, description, url, buttonLabel, type, duree, dateDebut, dateFin, preview, alt, display, onClose } = props;

    return (
        <div className={display ? "layers" : "layers pointer"}>



            <div className={display ? "backgroundLayer showBg" : "backgroundLayer hideBg pointer"}></div>


            <div className={display ? "layer showTopLeftPanel" : "layer hideTopLeftPanel"}>
                <h1 className="title">{formattedName}</h1>
                <span className="separator"></span>

                <div className="button">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {buttonLabel}
                    </a>
                </div>


            </div>

            <div className={display ? "layer showTopRightPanel" : "layer hideTopRightPanel"}>
                <img alt={alt} src={preview} />
                <div className="close" onClick={onClose}>X</div>


            </div>

            <div className={display ? "layer showBotRightPanel" : "layer hideBotRightPanel"}>
                <p className="description">{description}</p>
            </div>

            <div className={display ? "layer showBotLeftPanel" : "layer hideBotLeftPanel"}>
                {/* {previews.map(p => <div className="lesImg"><img alt={alt} src={p} /></div>)} */}

                {/* <div className="lesImg"><img alt={alt} src={url} /></div>
                <div className="lesImg"><img alt={alt} src={url} /></div>
                <div className="lesImg"><img alt={alt} src={url} /></div> */}
            </div>
        </div>
    )
}

export default Bg;
