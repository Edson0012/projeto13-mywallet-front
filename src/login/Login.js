import styled from "styled-components"
import axios from "axios"
import ContextApi from "../contextApi/ContextApi"
import { useNavigate } from "react-router-dom"
import { useContext , useState } from "react"
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
    const { setUserEmail, setToken, setName, setBalance } = useContext(ContextApi);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState("Entrar");
    const [block, setBlock] = useState(false);


    function handleSubmit(event) {
        event.preventDefault();

        if(email === ""){
           return alert('campo de email vazio')
        } else if (password === ''){
           return alert('campo de senha vazio')
        } else {   
        }


        setLoading(<ThreeDots color="white" />);
        const body = {
            email,
            password,
        };
        axios
            .post(
                "http://localhost:5000/",
                body
            )
            .then((res) => {
                setBlock(true)
                setToken(res.data.token);
                setName(res.data.name);
                setUserEmail(res.data.email);
                setBalance(res.data.balance)
                navigate('/transaction')
            }).catch((err) => {
                alert('Email ou senha incorretos')
                setBlock(true)
                setLoading('Entrar')
                setBlock(false)
            });
    }

    return (
        <Main>
            <h1>MyWallet</h1>
            <form onSubmit={handleSubmit}>
                <input
                type='email' placeholder="E-mail" name="email" 
                value={email}  onChange={(e) => setEmail(e.target.value)} disabled={block}>
                </input>
                <input
                type="password" placeholder="Senha" name="password" 
                value={password} onChange={(e) => setPassword(e.target.value)} disabled={block}>
                </input>
                <button>{loading}</button>
            </form> 
            <h3 onClick={() => navigate('/sign-up')} >Primeira vez? Cadastre-se!</h3>
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
        font-style: normal;
        font-weight: 400;
        font-size: 3.1rem;
        line-height: 5rem;

        color: #FFFFFF;

        text-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
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