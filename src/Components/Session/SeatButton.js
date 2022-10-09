import React from "react";
import styled from "styled-components";

export default function SeatButton({valueProp, theme, onClick, noCanClick, dadInfos, dataInfo, DrivenIdentifier}){

    const [selected, setSelected] = React.useState(false);
    const [value] = React.useState(valueProp);

    React.useEffect( () => {
        if(dataInfo){
            dataInfo.seats.some( someone => {
                if(someone.name === value){
                    setSelected(someone.isSelected);
                }
            })
        }
    }, [dataInfo]);


    return (
        <Style data-identifier={DrivenIdentifier} noCanClick={noCanClick} theme={theme} selected={selected} onClick={() => { 
            if(noCanClick || theme === "unavailable") return;
            dadInfos.selectSeat(value);
        }}>
            {value}
        </Style>
    )
}

const Style = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex; justify-content: center; align-items: center;
    margin: 0 .2rem .4rem .2rem;
    font-size: .8rem;
    border: 2px solid ${props =>{
        if(props.selected === true) return "#1AAE9E";
        if(props.theme === "available") return "#7B8B99";
        if(props.theme === "unavailable") return "#F7C52B";
        if(props.theme === "selected") return "#1AAE9E";
    }};
    background-color: ${props =>{
        if(props.selected === true) return "#8DD7CF";
        if(props.theme === "available") return "#C3CFD9";
        if(props.theme === "unavailable") return "#FBE192";
        if(props.theme === "selected") return "#8DD7CF";
    }}
`;