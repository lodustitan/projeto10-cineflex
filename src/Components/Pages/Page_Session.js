import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

import FilmCard from "../FilmCard/FilmCard";
import FilmHours from "../FilmCard/FilmHours";
import SeatButton from "../Seats/SeatButton";
import Button from "../Buttons/Button";
import Footer from "../FixedLayout/Footer";

export default function Session({globalTicket}){

    const [seatsList, setSeatsList] = React.useState({});
    const {id} = useParams();

    const [nameBuyer, setNameBuyer] = React.useState();
    const [cpfBuyer, setCpfBuyer] = React.useState();
    const [seatsBuyer, setSeatsBuyer] = React.useState([]);

    React.useEffect(() =>{
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)
        .then((res)=>{ setSeatsList(res.data) })
    }, [])

    function finish(){
        if(nameBuyer === "") return;
        if(cpfBuyer === "") return;
        if(seatsBuyer.length === 0) return;

        console.log("eu vou pro cabaré")
        axios.post(
            "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
            {ids: seatsBuyer, name: nameBuyer, cpf: cpfBuyer})
        .then(res => { 
            console.log(res.data);
            sessionStorage.current = JSON.stringify({
                film_name: seatsList.movie.title,
                film_date: seatsList.day.date + " - " + seatsList.day.weekday,
                seats: seatsBuyer, 
                user_name: nameBuyer, 
                user_cpf: cpfBuyer,
            });
            window.location.href = `/sucesso`;
        })
    }

    function selectSeat(idSeat){
        if(seatsBuyer.includes(idSeat)) return setSeatsBuyer(seatsBuyer.filter(fill => fill !== idSeat))
        if(Array.isArray(seatsBuyer)) return setSeatsBuyer([...seatsBuyer, idSeat]);
        return setSeatsBuyer([idSeat]);
    }

    return (
        <Style>
            <div className="title">Selecione o(s) assento(s)</div>
            <div className="seatsList">
                {(seatsList.seats) && <CreateRow callback={selectSeat} dataInfo={seatsList.seats} />}
            </div>
            <div className="glossario">
                <div>
                    <SeatButton theme={"selected"} noCanClick={true}></SeatButton>
                    <span>Selecionado</span>
                </div>
                <div>
                    <SeatButton theme={"available"} noCanClick={true}></SeatButton>
                    <span>Disponível</span>
                </div>
                <div>
                    <SeatButton theme={"unavailable"} noCanClick={true}></SeatButton>
                    <span>Indisponível</span>
                </div>
            </div>
            <div className="formSession">
                <label>Nome do comprador:</label>
                <input type="text" placeholder="Digite seu nome..." onChange={(e)=>setNameBuyer(e.target.value)} />

                <label>CPF do comprador:</label>
                <input type="text" placeholder="Digite seu CPF..." onChange={(e)=>setCpfBuyer(e.target.value)} />
            </div>
            <div className="buttonArea">
                <Button onClick={finish}>Reservar assento(s)</Button>
            </div>
            <Footer srcImg={(seatsList.movie)? seatsList.movie.posterURL: ""} title={(seatsList.movie)? seatsList.movie.title: ""} date={(seatsList.movie)? seatsList.day.weekday + " - " + seatsList.name: ""} />
        </Style>
    )
}

function CreateRow({dataInfo, callback}){
    const [row_1, setRow_1] = React.useState([]);
    const [row_2, setRow_2] = React.useState([]);
    const [row_3, setRow_3] = React.useState([]);
    const [row_4, setRow_4] = React.useState([]);
    const [row_5, setRow_5] = React.useState([]);

    React.useEffect(() => {
        const provisoreRow1 = row_1;
        const provisoreRow2 = row_2;
        const provisoreRow3 = row_3;
        const provisoreRow4 = row_4;
        const provisoreRow5 = row_5;
        function forRow(start, end, arrInsert, callback){
            for(let i=start;  i<end;  i++){
                arrInsert = [...arrInsert, {
                    id: i+1,
                    theme: dataInfo[i].isAvailable,
                    name: dataInfo[i].name
                }];
            }
            callback(arrInsert);    
        }
        forRow(0, 10, provisoreRow1, setRow_1);
        forRow(10, 20, provisoreRow2, setRow_2);
        forRow(20, 30, provisoreRow3, setRow_3);
        forRow(30, 40, provisoreRow4, setRow_4);
        forRow(40, 50, provisoreRow5, setRow_5);
    }, [])
    return (<>
        <div>{row_1.map(dataMap => <SeatButton noCanClick={false} onClick={() => callback(dataMap.id)} theme={dataMap.theme? "available": "unavailable"} key={dataMap.id}>{dataMap.name}</SeatButton>)}</div>
        <div>{row_2.map(dataMap => <SeatButton noCanClick={false} onClick={() => callback(dataMap.id)} theme={dataMap.theme? "available": "unavailable"} key={dataMap.id}>{dataMap.name}</SeatButton>)}</div>
        <div>{row_3.map(dataMap => <SeatButton noCanClick={false} onClick={() => callback(dataMap.id)} theme={dataMap.theme? "available": "unavailable"} key={dataMap.id}>{dataMap.name}</SeatButton>)}</div>
        <div>{row_4.map(dataMap => <SeatButton noCanClick={false} onClick={() => callback(dataMap.id)} theme={dataMap.theme? "available": "unavailable"} key={dataMap.id}>{dataMap.name}</SeatButton>)}</div>
        <div>{row_5.map(dataMap => <SeatButton noCanClick={false} onClick={() => callback(dataMap.id)} theme={dataMap.theme? "available": "unavailable"} key={dataMap.id}>{dataMap.name}</SeatButton>)}</div>
    </>);
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
    .formSession{
        display: flex;
        flex-direction: column;
        width: 90%;
        label{
            margin-top: 2rem;
        }
        input{
            height: 32px;
            width: 100%;
            outline: none;
            border: 2px solid gray;
        }
    }
    .buttonArea{
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 26px;
    }
`;

