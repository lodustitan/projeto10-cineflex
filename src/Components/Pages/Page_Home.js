import React from "react";
import styled from "styled-components";
import axios from "axios";

import FilmCard from "../FilmCard/FilmCard";

import { CONSTANTS } from "../Constants/constants";
const { BASE_URL } = CONSTANTS.API; 

export default function Home(){

    const [filmList, setFilmList] = React.useState([]);

    React.useEffect(() =>{
        axios.get(`${BASE_URL}/movies`)
        .then((res)=>{
            setFilmList(res.data);
        })
    }, [filmList])

    function link(id){
        window.location.href = `/filme/${id}`;
    }

    return (
        <Style>
            <div className="title">Selecione o filme</div>
            <div className="filmList">
                {filmList.map((data, keyID) =>{
                    return <FilmCard DrivenIdentifier="movie-outdoor" src={data.posterURL} key={keyID} onClick={() => { link(data.id) }} />
                })}
            </div>
        </Style>
    )
}

const Style = styled.div`
    display: flex; justify-content: flex-start; align-items: center;
    flex-direction: column;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    .title{
        display: flex; justify-content: center; align-items: center;
        height: 4em;
        font-size: 1.5rem;
    }
    .filmList{
        display: flex;
        flex-wrap: wrap;
        width: 95%;
    }
`;

