import React from "react";
import styled from "styled-components";

export default function Header(){
    return(
        <Style onClick={() => window.location.href = "/"}>
            <span>CINEFLEX</span>
        </Style>
    )
}

const Style = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 70px;
    font-weight: 400;
    font-size: 34px;
    background: #C3CFD9;
    color: #E8833A;
    display: flex;
    justify-content: center;
    align-items: center;

    position: sticky;
    top: 0;
`;