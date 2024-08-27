import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

export default function Content(props){
    console.log("props")
    return(
        <section>
            <div className="image-div">
                <img className="place-img" src={props.imageUrl} alt=""/>
            </div>
            <div className="description-div">
                <div className="description-location">
                    <FontAwesomeIcon className="map-icon" icon={faMapMarkerAlt} size="xs"/>
                    <span className="location">{props.location}</span>
                    <a target="_blank" href={props.googleMapsUrl}>Visit on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="desc-text">{props.description}</p>
            </div>
        </section>
    )
}