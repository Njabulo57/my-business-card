import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"

 export default function Info(){
    return(
        <>
            <div className="profile"></div>
            <h1 className="name">Njabulo Kumalo</h1>
            <p className="role">Frontend Developer</p>
            <p className="website">njabulokumalo.com</p>
            <div className="buttons">
                <a href="mailto:njabulokumalo57@gmail.com" className="email"><FontAwesomeIcon icon={faEnvelope} className="email-icon" />Email</a>
                <a href="#" className="linkedin" ><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/>LinkedIn</a>
            </div>
        </>
    )
}