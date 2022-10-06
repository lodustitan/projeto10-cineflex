import React from "react";
import styled from "styled-components";

export default function Button({children, width, margin, onClick}){
    return(
        <Style width={width} margin={margin} onClick={()=> onClick()}>
            {children}
        </Style>
    )
}

const Style = styled.button`
    margin: ${props => props.margin};
    padding: .7em 1.2em;
    background: #E8833A;
    border-radius: 3px;
    font-size: 1rem;
    color: white;
    border: none;
    outline: none;
    width: ${ props => props.width };
`;