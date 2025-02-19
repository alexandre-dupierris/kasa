import { useState } from "react";

export default function Carousel({accomodation}) {
    const [currentImage, setCurrentImage] = useState(0);
    const previewImage = () => {
        setCurrentImage((prev) => (prev === 0 ? accomodation.pictures.length - 1 : prev - 1));
    };
    const nextImage = () => {
        setCurrentImage((next) => (next === accomodation.pictures.length - 1 ? 0 : next + 1));
    };

    return (
        <div className="carousel">
            {accomodation.pictures.length > 1 && (
            <>
                <i className="fa-solid fa-chevron-left carousel_preview" onClick={previewImage}/>
                <i className="fa-solid fa-chevron-right carousel_next" onClick={nextImage}/>
                <p className="carousel_counter">{currentImage + 1} / {accomodation.pictures.length}</p>
            </>)}
            <img className="carousel_img" src = {accomodation.pictures[currentImage]} alt={accomodation.title}/>
        </div>
    )
}