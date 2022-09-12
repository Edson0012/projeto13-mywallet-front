import styled from "styled-components"
import {RiLogoutBoxRLine as Logout} from "react-icons/ri"
import {IoMdAddCircleOutline as Add} from "react-icons/io"
import { MdOutlineRemoveCircleOutline  as Remove} from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState} from "react"
import ContextApi from "../contextApi/ContextApi.js"
import axios from "axios"

export default function Perfil(){
    const { name, token, balance } = useContext(ContextApi);
    const [arrayData, setArrayData] = useState([]);
    const navigate = useNavigate();

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

        const promise = axios.get('http://localhost:5000/transaction' , config)
        promise.then((res) => {
            setArrayData(res.data)
        }).catch((err) => {
            console.log(err)
        })
     
    }, []);
    

    return (
        <Main>
            <div className="profile">
                <h1>Ola, {name}</h1>
                <Logout size={25} color='#FFFFFF' onClick={() => navigate('/')} />
            </div>
            <section>
                    {arrayData.length !== 0 ? (
                     <div className="board-transactions">   
                        {arrayData.map((res) => {
                        return <div className="transaction"> 
                                <div className="box"> 
                                    <p className="date">
                                        {res.date}
                                    </p>
                                    <p className='description'>{res.description}</p>
                                </div>
                                <p className={res.type}>{res.value}</p>
                            </div>

                        })}
                    </div>
                    ) 
                    : ( <div className="noTransactions" >
                                 <p>Não há registros de entrada ou saída</p>
                            </div> )}
                {arrayData.length !== 0 && (<footer>
                    <strong>SALDO</strong>
                    <p className="entry">{balance}</p>
                </footer>)}
            </section>
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

    .profile {
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

    section{
        width: 100%;
        height: 44.6rem;
        background-color: #FFFFFF;
        border-radius: 0.5rem;
        border: none;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        padding: 1rem;

            footer{
            display: flex;
            width: 100%;
            height: 2.5rem;

            strong {
                font-weight: 900;

                font-size: 1.7rem;
                line-height: 2rem;
            }
        }

        .entry{
                color: #03AC00;
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 1.9rem;
                text-align: right;
            }

        .exit{
                color: #C70000;
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 1.9rem;
                text-align: right;
            }


            .noTransactions {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

                p{
                    font-family: 'Raleway';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 23px;
                    text-align: center;

                    color: #868686;

                    width: 18rem;
                    height: 4.6rem;
                }

            }    

        .board-transactions{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 85%;

            

            .transactions {
                width: 100%;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
        
                    
                .box {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 1rem;
        
                }

            }

           

            
        }

        .date {
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 1.9rem;
        
                color: #C6C6C6;
        }
        
        .description {
                        font-weight: 400;
                        font-size: 1.6rem;
                        line-height: 1.9rem;
        
                        color: #000000;
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
