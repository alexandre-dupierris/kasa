import {Link, useLocation} from "react-router-dom";

export default function Nav() {
    const location = useLocation();
    return (
    <nav className="header_nav">
        <ul className="header_nav_ul">
            <li className="header_nav_ul_li"><Link to="/" className={location.pathname === '/' ? 'active': undefined}>Accueil</Link></li>
            <li className="header_nav_ul_li"><Link to="/about" className={location.pathname === '/about' ? 'active' : undefined}>A Propos</Link></li>
        </ul>
    </nav>
    )
}