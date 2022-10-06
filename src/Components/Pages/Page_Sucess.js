import React from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../Buttons/Button";

export default function Sucess({globalTicket}){

    const [sessionState, setSessionState] = React.useState( JSON.parse(sessionStorage.current) );
    
    function link(id){
        window.location.href = `/`;
    }
    function formataCPF(cpf){
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    return (
        <Style>
            <div className="title">Pedido feito com sucesso!</div>
            <div className="infoList">
            {sessionState.film_name && <>
                <div className="row">
                    <p>Filme e sessão</p>
                    <span>{sessionState.film_name}</span>
                    <span>{sessionState.film_date}</span>
                </div>
                <div className="row">
                    <p>Ingressos</p>
                    {sessionState.seats.map(a=> {
                        return <span>Assento {a}</span>
                    })}
                </div>
                <div className="row">
                    <p>Comprador</p>
                    <span>Nome: {sessionState.user_name}</span>
                    <span>CPF: {formataCPF(sessionState.user_cpf)}</span>
                </div>
            </>}
            </div>
            <Button onClick={link}>Voltar pra Home</Button>
        </Style>
    )
}

const Style = styled.div`
    display: flex; justify-content: flex-start; align-items: center;
    flex-direction: column;

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

