import React from "react";
import styled from "styled-components";

export default function Button({children, width, margin, onClick, customColor, DrivenIdentifier}){
    return(
        <Style customColor={customColor} 
            data-identifier={DrivenIdentifier}
            width={width} 
            margin={margin} 
            onClick={()=> onClick()}
        >
            {children}
        </Style>
    )
}

const Style = styled.button`
    margin: ${props => props.margin};   
    padding: .7em 1.2em;
    background-color: ${({customColor}) => customColor? customColor: "#E8833A"} !important;
    color: white;
    border-radius: 3px;
    font-size: 1rem;
    border: none;
    outline: none;
    width: ${ props => props.width };
`;