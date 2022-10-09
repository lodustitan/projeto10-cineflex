import React from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";

import { IoIosArrowDropleft } from "react-icons/io";

export default function Header(){

    const [backPageVisibility, setBPV] = React.useState("hidden");
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(window.location.pathname === "/") setBPV("hidden");
        else setBPV("");
    }, [])

    return(
        <Style>
            <div className={backPageVisibility}>
                <IoIosArrowDropleft onClick={()=> navigate(-1)} />
            </div>
                
            <Link to="/">
                <span>CINEFLEX</span>
            </Link>
        </Style>
    )
}


const Style = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 70px;
    width: 100%;
    font-weight: 400;
    font-size: 34px;
    background: #C3CFD9;
    color: #E8833A;
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    div{
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-size: 1.2em;
        &.hidden{ display: none }
    }
    a{
        text-decoration: none;
    }
`;