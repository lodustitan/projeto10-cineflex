import React from "react";
import styled from "styled-components";

export default function FilmCard({src, size, onClick}){

    return(
        <Style size={size} onClick={onClick}>
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
    ${props => {
        if(props.size === "small") return "width: 48px; height: 72px;"
        else return "width: 129px; height: 193px;" 
    }}
`;