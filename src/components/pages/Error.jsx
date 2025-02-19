import { Link } from "react-router-dom";

export default function Error() {
    return (
      <div className="error">
        <p className="error_404">404</p>
        <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
        <p className="error_retour"><Link to="/">Retourner sur la page d'accueil</Link></p>
      </div>
    )
}