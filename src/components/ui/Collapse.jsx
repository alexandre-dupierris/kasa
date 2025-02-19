import { useState } from "react";

export default function Collapse(props) {
    const [active, setActive] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const toggleState = () => {
        setActive(!active);
        setHasInteracted(true);
    }
    return (
        <div className="collapse">
            <div className="collapse_header">
                <p className="collapse_header_title" >{props.title}</p>
                <button onClick={toggleState} className="collapse_header_button">
                    <i className={`fa-solid fa-chevron-up collapse_header_button_image rotate_${active}`} />
                </button>
            </div>
            <p className={`collapse_text ${hasInteracted && `active_${active}`}`}>{props.text}</p>
        </div>
    )
}