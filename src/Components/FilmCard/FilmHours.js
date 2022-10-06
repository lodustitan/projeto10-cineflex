import React from "react";
import styled from "styled-components";

import Button from "../Buttons/Button";

export default function FilmHours({datainfo}){

    function link(id){
        window.location.href = `/session/${id}`;
    }

    return(
        <Style>
            {(datainfo.days) && datainfo.days.map((data, keyId) =>{ 
                return(<>
                    <div>
                        <span>{data.weekday}</span>
                        {" - "}
                        <span>{data.date}</span>
                    </div>
                    <div>
                        {data.showtimes.map((a, akey)=>{
                            return <Button onClick={()=> link(a.id)} key={akey} margin="6px 12px 12px 0">{a.name}</Button>
                        })}
                    </div>
                </>)
                })
            }
        </Style>
    )
}

const Style = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem .8rem;
    padding: 8px;
    background: #FFF;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
`;
const ImageFilm = styled.img`
    ${props => {
        if(props.size === "small") return "width: 48px; height: 72px;"
        else return "width: 129px; height: 193px;" 
    }}
`;