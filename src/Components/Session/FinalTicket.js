import React from "react";
import styled from "styled-components";

import cardBackground from "../Imagens/CardBackground.png";

export default function FinalTicket({name, cpf, assento}){
    
    function formataCPF(cpf){
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    return (
        <Style>
            <div className="rowInside" DrivenIdentifier>
                <p className="ticketTitle">Ingressos</p>
                <p data-identifier="seat-infos-reserve-finished">Assento {assento}</p>
            </div>
            <div className="rowInside">
                <p className="ticketTitle">Comprador</p>
                <p data-identifier="buyer-infos-reserve-finished">Nome: {name}</p>
                <p data-identifier="buyer-infos-reserve-finished">CPF: {formataCPF(cpf)}</p>
            </div>
        </Style>
    )
}

const Style = styled.div`
    display: flex; flex-direction: column; align-items: center; justify-content: space-evenly;
    width: 100%;
    margin: 1rem 0;
    background-image: url(${cardBackground});
    background-repeat: no-repeat;
    background-clip: border-box;
    background-size: contain;
    box-sizing: border-box;
    -webkit-filter: drop-shadow(2px 2px 2px #222);
    

    height: 180px;
    .rowInside{
        width: 75%;
    }
    p{
        &.ticketTitle{
            font-size: 1.4rem;
        }
        color: white;
        text-shadow: 1px 2px 5px rgba(0,0,0,0.37);
        font-weight: 700;
    }
`;


