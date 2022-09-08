import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Register () {
    const navigate = useNavigate();


    return (
        <Main>
            <h1>MyWallet</h1>
            <form>
                <input type='text' placeholder="Nome"></input>
                <input type='text' placeholder="E-mail"></input>
                <input type='text' placeholder="Senha"></input>
                <input type='text' placeholder="Confirme a senha"></input>
                <button>Cadastrar</button>
            </form>
            <h3 onClick={() => navigate('/login')} >Já tem uma conta? Entre agora!</h3>
        </Main>
    )
}

const Main = styled.main`
font-family: 'Saira Stencil One', cursive;
width: 100%;
height: 66.7rem;
background: #8C11BE;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 3.6rem;

    h1 {
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;

        color: #FFFFFF;
    }

    h3 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.8rem;

        color: #FFFFFF;
        cursor: pointer;
    }

    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1.3rem;

        input {
            width: 32.6rem;
            height: 5.8rem;
            padding: 1.8rem 1.5rem;
            border-radius: 0.5rem;
            border: none;
            
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            line-height: 2.3rem;
            font-size: 2rem;
            
            ::placeholder {
                color: #000000;
            }

        }

        button {
            width: 32.6rem;
            height: 4.6rem;

            background: #A328D6;
            border: none;
            border-radius: 0.5rem;

            display: flex;
            align-items: center;
            justify-content: center;

            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 2rem;
            line-height: 2.3rem;

            color: #FFFFFF;
        }

    }

`