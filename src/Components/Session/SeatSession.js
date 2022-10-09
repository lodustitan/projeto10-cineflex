import React from "react";
import styled from "styled-components";
import axios from "axios";

import SeatButton from "./SeatButton";
import CreateRow from "./SeatList";

import { CONSTANTS } from "../Constants/constants";
const { BASE_URL } = CONSTANTS.API; 

export default function SeatSession({seats, id, dadInfos}){

    const {seatsList, setSeatsList} = seats;

    React.useEffect(() =>{
        axios.get(`${BASE_URL}/showtimes/${id}/seats`)
        .then((res)=>{ 
            const reconfiguredResponse = (res.data.seats).map( m => {
                return {id: m.id, name: m.name, isAvailable: m.isAvailable, isSelected: false}
            });
            const oldResponseUpdated = res.data;
            oldResponseUpdated.seats = reconfiguredResponse;
            setSeatsList(oldResponseUpdated); 
        })
    }, [])


    return(
        <Style>
            <div className="title">Selecione o(s) assento(s)</div>
            <div className="seatsList">
                {(seatsList.seats) && <CreateRow dadInfos={dadInfos} dataInfo={seatsList} />}
            </div>
            <div className="glossario">
                <div>
                    <SeatButton DrivenIdentifier="seat-selected-subtitle" theme={"selected"} noCanClick={true}></SeatButton>
                    <span>Selecionado</span>
                </div>
                <div>
                    <SeatButton DrivenIdentifier="seat-available-subtitle" theme={"available"} noCanClick={true}></SeatButton>
                    <span>Disponível</span>
                </div>
                <div>
                    <SeatButton DrivenIdentifier="seat-unavailable-subtitle" theme={"unavailable"} noCanClick={true}></SeatButton>
                    <span>Indisponível</span>
                </div>
            </div>
        </Style>
    )
}


const Style = styled.div`
    .title{
        display: flex; justify-content: center; align-items: center;
        height: 4em;
        font-size: 1.5rem;
    }
    .seatsList{
        display: flex;
        flex-direction: column;
        div{
            display: flex;
        }
    }
    .glossario{
        display: flex;
        justify-content: space-evenly;
        width: 90%;
        margin-top: 26px;
        div{
            flex-direction: column;
            display: flex;
            align-items: center;
            font-size: .8rem;
        }
    }
`;