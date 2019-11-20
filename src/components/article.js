import React from "react"
import './article.css';

export const Article = (props) => {

    const hide = {
        transform: "translateY(1000px)",
    }

    const handleClick = () => {
        props.onCloseEvent();
    }

    return (
        <div className="article-popup" onClick={() => handleClick()} style={props.display ? {} : hide}>
            <img src={props.preview} alt="blabla" />
            <div className="article-popup-content">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <div className="article-popup-previews">
                    {props.screenshots && props.screenshots.map((screen, i) => {
                        return (
                            <div key={`jvgreiogjr${i}`}>
                                <img src={screen} alt={i} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}
export default Article
