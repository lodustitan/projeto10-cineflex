import React from "react";
import styled from "styled-components";

import HoursSelection from "./HoursSelection";

export default function FilmHours({datainfo}){
    
    return(
        <Style>
            {(datainfo.days) && datainfo.days.map((data, keyId) => <HoursSelection key={keyId} data={data}/>)
            }
        </Style>
    )
}

const Style = styled.div`
    display: flex;
    flex-direction: column;
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