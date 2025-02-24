import {useState} from "react";
import image from "../../assets/photos/crique.png";
import Banner from "../ui/Banner";
import Accomodations from "../ui/Accomodations";

export default function Home({ jsonData }) {
    const [accomodations, setAccomodations] = useState(jsonData);
    return (
    <>
        <Banner image={image}/>
        <Accomodations accomodations={accomodations}/>
    </>
    )
}