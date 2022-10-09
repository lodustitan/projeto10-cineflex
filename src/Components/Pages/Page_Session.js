import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../Buttons/Button";
import Footer from "../FixedLayout/Footer";
import WindowModal from "../Modal/WindowModal";
import FormSession from "../Session/FormSession";
import SeatSession from "../Session/SeatSession";

import { CONSTANTS } from "../Constants/constants";
const { BASE_URL } = CONSTANTS.API; 

export default function Session(){

    const [showModal, setShowModal] = React.useState(false);
    const [modalLastSeatId, setModalLastSeatId] = React.useState(-1);

    const [seatsList, setSeatsList] = React.useState({});
    const [buyersInfo, setBuyersInfo] = React.useState([]);

    const navigate = useNavigate();
    const {id} = useParams();

    function finish(){
        if(buyersInfo.name === "") return;
        if(buyersInfo.cpf === "") return;
        if(buyersInfo.length === 0) return;

        // Ids
        const idList = buyersInfo.map((a)=> a.seatID );
        const b_List = buyersInfo.map((a)=> { return {idAssento: a.seatID, nome: a.name, cpf: a.cpf } });
        
        axios.post(
            `${BASE_URL}/seats/book-many`,
            {ids: idList, compradores: [...b_List]})
        .then(() => { 
            sessionStorage.current = JSON.stringify({
                film_name: seatsList.movie.title,
                film_date: seatsList.day.date + " - " + seatsList.day.weekday,
                tickets: b_List
            });
            navigate(`/sucesso`);
        })
    }

    function setSelected(seatID, boolean){
        const updateSeatList = [...seatsList.seats];
        updateSeatList.some( someSeat => {
            if(someSeat.name == seatID) return someSeat.isSelected = boolean;
        } )
        const finalSeatList = {id: seatsList.id, day: seatsList.day, movie: seatsList.movie, name: seatsList.name, seats: updateSeatList}
        setSeatsList(finalSeatList);
    }

    function selectSeat(value){
        let haveSome = false;
        buyersInfo.some(obj => {
            if(obj.seatID === value){
                haveSome = true;
                setModalLastSeatId(value);
                return setShowModal(true);
            } 
        })
        if(haveSome) return;
        setSelected(value, true);
        setBuyersInfo([...buyersInfo, {seatID: value, name: "", cpf: ""}]);
    }

    function confirmModal(){
        setShowModal(false);
        setSelected(modalLastSeatId, false);
        setBuyersInfo(buyersInfo.filter(fill => fill.seatID !== modalLastSeatId));
    }

    function cancelModal(){
        setShowModal(false);
    }
    
    return (
        <Style>
            {showModal && <WindowModal onCancel={cancelModal} onConfirm={confirmModal} title="Aviso" 
                message="Você perderá todas as informações do assento, deseja continuar?" 
            />}
            <SeatSession dadInfos={{buyersInfo, setBuyersInfo, setModalLastSeatId, setShowModal, selectSeat, confirmModal}} seats={{seatsList, setSeatsList}} id={id} />
            {buyersInfo && buyersInfo.map((data, keyID) => 
            <FormSession key={data.seatID} buyers={{buyersInfo, setBuyersInfo}} currentSeat={data.seatID} /> )}
            <div className="buttonArea">
                <Button DrivenIdentifier="reservation-btn" onClick={finish}>Reservar assento(s)</Button>
            </div>
            <Footer srcImg={(seatsList.movie)? seatsList.movie.posterURL: ""} title={(seatsList.movie)? seatsList.movie.title: ""} date={(seatsList.movie)? seatsList.day.weekday + " - " + seatsList.name: ""} />
        </Style>
    )
}

const Style = styled.div`
    display: flex; justify-content: flex-start; align-items: center;
    flex-direction: column;
    margin-bottom: 117px;
    margin-top: 70px;


    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    .buttonArea{
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 26px;
    }
`;

