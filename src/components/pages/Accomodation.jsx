import Rating from "../ui/Rating";
import Carousel from "../ui/Carousel";
import Collapse from "../ui/Collapse";
import { Navigate, useParams } from "react-router-dom";

export default function Accomodation({ jsonData }) {
    const { id } = useParams();
    const accomodation = jsonData.find(item => item.id === id);
    return (
        <>
        {!accomodation ? <Navigate to="/*" /> : (
            <div className="accomodation">
                <Carousel accomodation={accomodation}/>
                <div className="accomodation_descriptive">
                    <div className="accomodation_descriptive_line1">
                        <div className="accomodation_descriptive_line1_titles">
                            <p className="accomodation_descriptive_line1_titles_title">{accomodation.title}</p>
                            <p className="accomodation_descriptive_line1_titles_location">{accomodation.location}</p>
                            <div className="accomodation_descriptive_line1_titles_tags">
                                {accomodation.tags.map((tag, index) => (
                                <p key={index} className="accomodation_descriptive_line1_titles_tags_tag">{tag}</p>
                                ))}
                            </div>
                        </div>
                        <div className="accomodation_descriptive_line1_host">
                            <div className="accomodation_descriptive_line1_host_host">
                                <p className="accomodation_descriptive_line1_host_host_name">{accomodation.host.name}</p>
                                <img className="accomodation_descriptive_line1_host_host_img" src={accomodation.host.picture}/>
                            </div>
                            <Rating accomodation={accomodation}/>
                        </div>
                    </div>
                    <div className="accomodation_descriptive_line2">
                        <div className="accomodation_descriptive_line2_description">
                            <Collapse
                                title= "Description"
                                text={accomodation.description}
                            />
                        </div>
                        <div className="accomodation_descriptive_line2_equipments">
                        <Collapse
                                title= "Equipements"
                                text={accomodation.equipments.map((item, index) => 
                                    <span key={index}>{item}<br/></span>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
        }
        </>
    )
}