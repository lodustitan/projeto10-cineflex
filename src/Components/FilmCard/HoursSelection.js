import React from "react";
import styled from "styled-components";

import Button from "../Buttons/Button";

import { useNavigate } from "react-router-dom";

export default function HoursSelection({data}){

    const navigate = useNavigate();

    return (
        <Style>
            <div data-identifier="session-date">
                <span>{data.weekday}</span>
                {" - "}
                <span>{data.date}</span>
            </div>
            <div>
                {data.showtimes.map((a, akey)=>{
                    return <Button DrivenIdentifier="hour-minute-btn" onClick={()=> navigate(`/session/${a.id}`)} key={akey} margin="6px 12px 12px 0">{a.name}</Button>
                })}
            </div>
        </Style>
    )
}

const Style = styled.div`

`;