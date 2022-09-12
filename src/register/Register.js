import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ContextApi from "../contextApi/ContextApi";
import { ThreeDots } from "react-loader-spinner";



export default function Register () {
    const {setToken} = useContext(ContextApi);
    const navigate = useNavigate();
    const [loading, setLoading] = useState("Cadastrar");
    const [password2, setPassword2] = useState('')
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [block, setBlock] = useState(false)


    function changeSubmit(event) {
        event.preventDefault();

        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
       
        if(
            form.name === '' ||
            form.email === "" ||
            form.password === "" ||
            password2 === "" 
        ){
            alert('preencha todos os campos')
            return
        } else if (form.password.length <= 6 ) {
            alert('a senha deve ter pelomenos 6 digitos')
            return
        } else {
        } 

        if(form.password === password2){
            setLoading(<ThreeDots color="white" />);

            const body = {
                name: form.name,
                email: form.email,
                password: form.password
            };
    

            axios.post(
                "http://localhost:5000/sign-up",
                body
            ).then((res) => {
                setBlock(true);
                navigate("/sign-in");
            }).catch((err) => {
                setBlock(true);
                setLoading('Cadastrar');
                setBlock(false);
            });
        } else {
            alert('as senhas devem coincidirem')
            return
        }
       
    }

    return (
        <Main>
            <h1>MyWallet</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={changeSubmit}
                    disabled={block}
                ></input>
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={changeSubmit}
                    disabled={block}
                ></input>
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={changeSubmit}
                    disabled={block}
                ></input>
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    name="password2"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    disabled={block}
                ></input>
                <button>{loading}</button>
            </form>
            <h3 onClick={() => navigate('/sign-in')} >Já tem uma conta? Entre agora!</h3>
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