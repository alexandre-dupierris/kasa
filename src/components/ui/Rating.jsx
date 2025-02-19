export default function Rating({accomodation}) {
    return (
        <div className="rating">
            {[...Array(5)].map((_, index) => (
                <i key={index} className={`fa-solid fa-star ${index < accomodation.rating ? "rating-coloredStar" : "rating-grayStar"}`}></i>
            ))}
        </div>
    )
}