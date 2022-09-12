import styled from "styled-components"
import {RiLogoutBoxRLine as Logout} from "react-icons/ri"
import Board from "../transactions/Transaction.js"
import {IoMdAddCircleOutline as Add} from "react-icons/io"
import { MdOutlineRemoveCircleOutline  as Remove} from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react"
import ContextApi from "../contextApi/ContextApi.js"
import axios from "axios"


export default function Perfil(){
    const { name } = useContext(ContextApi);
    const navigate = useNavigate();
    
    return (
        <Main>
            <div>
                <h1>Ola, {name}</h1>
                <Logout size={25} color='#FFFFFF' onClick={() => navigate('/sign-in')} />
            </div>
            <Board />
            <footer>
                <button onClick={() => navigate('/new-entry')}>
                    <Add size={25} color="#FFFFFF"/>
                    <p>Nova entrada</p>
                </button>
                <button onClick={() => navigate('/new-exit')}>
                    <Remove size={25} color='#FFFFFF' />
                    <p>Nova saída</p>
                </button>
            </footer>
        </Main>
    )
}

const Main = styled.main`
background-color: #8C11BE;
font-family: 'Raleway';
width: 100%;
height: 66.7rem;
display: flex;
flex-direction: column;
padding: 1.6rem 2.5rem;
gap: 1.3rem;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 4.1rem;

        h1{
            
            font-style: normal;
            font-weight: 700;
            font-size: 2.6rem;
            line-height: 3.1rem;
            color: #FFFFFF;
        }
    }

    footer{
        width: 100%;
        height: 11.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            width: 15.5rem;
            height: 11.4rem;

            background-color: #A328D6;
            border-radius: 0.5rem;
            border: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0.9rem;

            p {
                width: 6.4rem;
                height: 4rem;
                font-style: normal;
                font-weight: 700;
                font-size: 1.7rem;
                line-height: 2rem;

                color: #FFFFFF;
            }
        }
    }
    

`