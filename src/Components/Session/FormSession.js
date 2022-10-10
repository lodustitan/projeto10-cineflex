import React from "react";
import styled from "styled-components";

export default function FormSession({buyers, currentSeat}){

    const [seat] = React.useState(currentSeat);
    const [input_name, setInput_name] = React.useState("");
    const [input_cpf, setInput_cpf] = React.useState("");

    const {buyersInfo, setBuyersInfo} = buyers;

    function changeHandler(value, campo, setstate){
        setstate(value);

        const updateBuyer = [...buyersInfo];
        updateBuyer.some((st) =>{
            if(st.seatID === seat){ 
                st[campo] = value;
            }
        })

        setBuyersInfo(updateBuyer);
    }

    return(
        <Style> 
            <span>Assento {seat}</span>
            <div className="block">
                <label>Nome do comprador:</label>
                <input data-identifier="buyer-name-input" type="text" placeholder="Digite seu nome..." onChange={(e)=>changeHandler(e.target.value, 'name', setInput_name)} />
            </div>

            <div className="block">
                <label>CPF do comprador:</label>
                <input data-identifier="buyer-cpf-input" type="text" placeholder="Digite seu CPF..." onChange={(e)=>changeHandler(e.target.value, 'cpf', setInput_cpf)} />
            </div>
        </Style>
    )
}

const Style = styled.div`
    display: flex; flex-direction: column; align-items: center;
    & {box-sizing: border-box};
    width: 85%;
    border-radius: 6px;
    margin: 1rem 0;
    padding: 1rem 0;
    box-shadow: 1px 2px 5px 1px #00000045;
    .block{
        width: 90%;
        display: flex; flex-direction: column;
        label{
            margin: 1rem 0;
        }
        input{
            height: 46px;
            font-size: 1rem;
            width: 100%;
            outline: none;
            border: 2px solid gray;
            box-sizing: border-box;
        }
    }
`;