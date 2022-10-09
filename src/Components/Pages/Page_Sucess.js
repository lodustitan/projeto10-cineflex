import React from "react";
import styled from "styled-components";
import axios from "axios";

import FinalTicket from "../Session/FinalTicket";
import Button from "../Buttons/Button";

import { useNavigate } from "react-router-dom";

export default function Sucess(){

    const navigate = useNavigate();
    const [sessionState] = React.useState( JSON.parse(sessionStorage.current) );

    return (
        <Style>
            <div className="title">Pedido feito com sucesso!</div>
            <div className="infoList">
                <div className="row" data-identifier="movie-session-infos-reserve-finished">
                    <p>Filme e sessão</p>
                    <span>{sessionState && sessionState.film_name}</span>
                    <span>{sessionState && sessionState.film_date}</span>
                </div>
                { sessionState && sessionState.tickets.map( (data, keyID) => <FinalTicket key={keyID} name={data.nome} cpf={data.cpf} assento={data.idAssento} /> ) }
            </div>
            <Button DrivenIdentifier="back-to-home-btn" onClick={() => navigate("/")}>Voltar pra Home</Button>
        </Style>
    )
}

const Style = styled.div`
    display: flex; justify-content: flex-start; align-items: center;
    flex-direction: column;
    margin-top: 70px;

    * {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}
    
    .title{
        display: flex; justify-content: center; align-items: center;
        color: #247A6B;
        height: 4em;
        width: 65%;
        font-size: 1.5rem;
        text-align: center;
        letter-spacing: -1px;
        margin-bottom: 2rem;
    }
    .infoList{
        display: flex;
        flex-direction: column;
        width: 85%;
        .row{
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            width: 100%;
            p{
                font-weight: 700;
                font-size: 24px;
                margin-bottom: .7rem;
            }
            span{
                color: #293845;
                font-weight: 400;
                font-size: 22px;
            }
        }
    }
`;

