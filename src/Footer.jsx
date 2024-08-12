import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faGithub, faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons"
export default function footer(){
    return(
        <div className="footer">
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
    )
}