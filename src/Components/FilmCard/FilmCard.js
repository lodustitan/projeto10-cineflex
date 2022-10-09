import React from "react";
import styled from "styled-components";

import { CONSTANTS } from "../Constants/constants";
const {FILMCARD_SMALLHEIGHT, FILMCARD_SMALLWIDTH, FILMCARD_HEIGHT, FILMCARD_WIDTH} = CONSTANTS.MEDIDAS;

export default function FilmCard({src, size, onClick, DrivenIdentifier}){

    return(
        <Style size={size} onClick={onClick} data-identifier={DrivenIdentifier}>
            <ImageFilm src={src} size={size}/>
        </Style>
    )
}

const Style = styled.div`
    margin: 1rem .8rem;
    padding: 8px;
    background: #FFF;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
`;
const ImageFilm = styled.img`
    width: ${({size}) => (size === "small")? FILMCARD_SMALLWIDTH: FILMCARD_WIDTH };
    height: ${({size}) => (size === "small")? FILMCARD_SMALLHEIGHT: FILMCARD_HEIGHT };
`;