import React from "react";
import styled from "styled-components";

import FilmCard from "../FilmCard/FilmCard";

export default function Footer({srcImg, title, date}){
    return (
        <Style>
            <FilmCard DrivenIdentifier="movie-img-preview" src={srcImg} size="small" />
            <div className="titles">
                <p data-identifier="movie-and-session-infos-preview">{title}</p>
                <p data-identifier="movie-and-session-infos-preview">{date}</p>
            </div>
        </Style>
    );
}

const Style = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    border-top: 1px solid #9EADBA;
    background-color: #DFE6ED;
    height: 117px;
    width: 100%;

    position: fixed;
    bottom: 0;
`;