import {Link} from "react-router-dom";

export default function Accomodations({accomodations}) {
    return (
        <section className="section_accomodations">
            {accomodations.map((accomodation) => (
                <article className="section_accomodations_article" key={accomodation.id}>
                    <Link to={`/accomodation/${accomodation.id}`}>
                        <img className="section_accomodations_article_img" src={accomodation.cover} alt={accomodation.title}></img>
                        <div className="section_accomodations_article_gradient"></div>
                        <p className="section_accomodations_article_title">{accomodation.title}</p>
                    </Link>
                </article>
            ))}
        </section>
    )
}