import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthAmericas} from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return(
        <header>
            <FontAwesomeIcon icon={faEarthAmericas} size="2x" />
            <h2 className="header-title">my travel journal.</h2>
        </header>
    )
}