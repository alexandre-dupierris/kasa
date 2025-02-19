import { useLocation } from "react-router-dom";

export default function Banner({image}) {
    const location = useLocation();
    return (
    <div className="banner">
        <img className="banner_img" src={image} alt="bannière affichant un paysage"/>
        <h1 className={`banner_h1 ${location.pathname === '/' ? 'active': undefined}`}>Chez vous, partout et ailleurs</h1>
    </div>
    )
}