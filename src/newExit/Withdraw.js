import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import axios from "axios"
import ContextApi from "../contextApi/ContextApi";

export default function Withdraw() {
    const { userEmail, token } = useContext(ContextApi)
    const navigate = useNavigate();
    const [withdrawal, setWithdrawal] = useState({
        value: '',
        description: '',
    })
    const [block, setBlock] = useState(false)
    const [blockbutton, setBlockButton] = useState(false)

    function sendChange(event) {
        event.preventDefault();

        setWithdrawal({
            ...withdrawal,
            [event.target.name]: event.target.value,
        });

    }

    const body = {
        ...withdrawal,
        email: userEmail,
        type: 'exit',
    };

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if(withdrawal.value === '' || withdrawal.value <= 0){
            return alert('um valor não foi atribuido ')
        } else if (withdrawal.description === ''){
            return alert('deve conter uma descrição')
        } else {
        }

        axios.post('http://localhost:5000/transaction', body, config).then((res)=> {
            setBlock(true)
            setBlockButton(true)
            navigate('/transaction')
        }).catch((err) => {
            setBlock(true)
            setBlockButton(true)
            setBlock(false)
            setBlockButton(false)
        })

    }

    return (
        <Main>
            <h2>Nova saída</h2>
            <form onSubmit={handleSubmit} >
                <input type='number' min='1' name="value" value={withdrawal.value} placeholder="Valor" 
                onChange={sendChange} disabled={block}
                ></input>
                <input type='text' name="description" value={withdrawal.description} placeholder="Descrição"
                onChange={sendChange} disabled={block}
                ></input>
                <button type="submit" >Salvar saída</button>
            </form>
        </Main>
    )
}

const Main = styled.main`
font-family: 'Raleway';
width: 100%;
height: 66.7rem;
background-color: #8C11BE;
display: flex;
flex-direction: column;
gap: 3rem;
padding: 2.4rem;

    h2{
        
        font-style: normal;
        font-weight: 700;
        font-size: 2.6rem;
        line-height: 3.1rem;
        color: #FFFFFF;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1.3rem;

        input{
            
            font-style: normal;
            font-weight: 400;
            font-size: 2rem;
            line-height: 2.3rem;
            
            padding: 1.5rem;
            width: 32.6rem;
            height: 5.8rem;

            border-radius: 0.5rem;
            border: none;

            ::placeholder {
                color: #000000;
            }

        }

        button {
            width: 32.6rem;
            height: 4.6rem;

            background: #A328D6;
            border-radius: 0.5rem;
            border: none;

            font-weight: 700;
            font-size: 2rem;
            line-height: 2.3rem;

            color: #FFFFFF;
            cursor: pointer;
        }
    }

`