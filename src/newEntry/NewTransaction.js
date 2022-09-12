import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import axios from "axios";
import ContextApi from "../contextApi/ContextApi";

export default function NewTransaction (){
    const { userEmail } = useContext(ContextApi)
    const navigate = useNavigate();
    const [deposit, setDeposit] = useState({
        value: '',
        description: '',
    })
    const [block, setBlock] = useState(false)
    const [blockButton, setBlockButton] = useState(false)

    function sendChange(event) {
        event.preventDefault();

        setDeposit({
            ...deposit,
            [event.target.name]: event.target.value,
        });

        console.log(deposit)
    }

    const body = {
        ...deposit,
        email: userEmail,
    };

    function handleSubmit(event) {
        event.preventDefault();

        if(deposit.value === '' || deposit.value <= 0){
            return alert('um valor não foi atribuido ')
        } else if (deposit.description === ''){
            return alert('deve conter uma descrição')
        } else {
        }

        console.log(body)

        axios.post('http://localhost:5000/new-entry', body).then((res)=> {
            setBlock(true)
            console.log(res)
            setBlockButton(true)
        }).catch((err) => {
            setBlock(true)
            setBlockButton(true)
            console.log(err)
            setBlock(false)
            setBlockButton(false)
        })

    }


    return (
        <Main>
            <h2>Nova entrada</h2>
            <form onSubmit={handleSubmit} >
                <input type='number' name="value" placeholder="Valor" 
                value={deposit.value} disabled={block} onChange={sendChange}>
                </input>
                <input type='text' placeholder="Descrição" name="description"
                value={deposit.description} disabled={block} onChange={sendChange}>
                </input>
                <button onClick={() => navigate('/transaction')} disabled={blockButton} >Salvar entrada</button>
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