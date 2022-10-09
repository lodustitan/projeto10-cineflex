import React, { startTransition } from "react";
import styled from "styled-components";

import Button from "../Buttons/Button";

export default function WindowModal({title, message, onConfirm, onCancel}){



    return (
        <Style>
            <StyleWindowModal>
                <div className="windowModal_title">
                    {title}
                </div>
                <div className="windowModal_message">
                    {message}
                </div>
                <div className="windowModal_buttons">
                    <Button customColor="#eb4034" margin="0 1rem 0 0" onClick={onCancel}>Cancelar</Button>
                    <Button customColor="#3f87f2" margin="0 1rem 0 0" onClick={onConfirm}>Confirmar</Button>
                </div>
            </StyleWindowModal>
        </Style>
    )
}

const Style = styled.div`
    position: fixed;
    top: 0; left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: #00000050;

    display: flex; justify-content: center; align-items: center;
`;
const StyleWindowModal = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 8px;
    background-color: white;

    .windowModal_title{
        height: 20%;
        font-size: 1.5rem;
        border-radius: 8px 8px 0 0;
        background-color: #2cc3de;
        color: white;
        padding: 0 0 0 .5rem;
    }
    .windowModal_message{
        box-sizing: border-box;
        height: 55%;
        padding: 1rem;
    }
    .windowModal_buttons{
        display: flex; justify-content: flex-end;
        height: 20%;
    }
`;