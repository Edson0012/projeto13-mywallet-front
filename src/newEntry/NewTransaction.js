import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function NewTransaction (){
    const navigate = useNavigate();

    return (
        <Main>
            <h2>Nova entrada</h2>
            <form>
                <input placeholder="Valor" ></input>
                <input placeholder="Descrição" ></input>
                <button onClick={() => navigate('/transaction')} >Salvar entrada</button>
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
        }
    }

`