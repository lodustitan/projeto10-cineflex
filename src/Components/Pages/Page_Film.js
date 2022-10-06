import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

import FilmHours from "../FilmCard/FilmHours";
import Footer from "../FixedLayout/Footer";

export default function Film(){

    const [hoursList, setHoursList] = React.useState([]);
    const {id} = useParams();

    React.useEffect(() =>{
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)
        .then((res)=>{
            setHoursList(res.data);
        })
    }, [])

    return (
        <Style>
            <div className="title">Selecione o horário</div>
            <div className="hoursList">
                <FilmHours datainfo={hoursList} />
            </div>
            <Footer srcImg={hoursList.posterURL} title={hoursList.title}/>
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
    .hoursList{
        display: flex;
        flex-direction: column;
        width: 95%;
    }
`;

