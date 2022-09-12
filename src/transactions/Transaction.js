import styled from "styled-components"
import {useState} from "react"

export default function Transaction(){
    const [r, setR] = useState(true)
    return (
        <Board>
            {/* <div className="noTransactions" >
                <p>Não há registros de entrada ou saída</p>
            </div> */}
            <div className="board-transactions">
                <div className="transactions">
                    <div className="box">
                        <p className="date">
                            30/11: 
                        </p>
                        <p className="description">Almoço mãe</p>
                    </div>
                    <p className="entry">3999,90</p>
                </div>
                <div className="transactions">
                    <div className="box">
                        <p className="date">
                            30/11: 
                        </p>
                        <p className="description">Almoço mãe</p>
                    </div>
                    <p className="exit">3999,90</p>
                </div>
                <div className="transactions">
                    <div className="box">
                        <p className="date">
                            30/11: 
                        </p>
                        <p className="description">Almoço mãe</p>
                    </div>
                    <p className="entry">3999,90</p>
                </div>
                <div className="transactions">
                    <div className="box">
                        <p className="date">
                            30/11: 
                        </p>
                        <p className="description">Almoço mãe</p>
                    </div>
                    <p className="exit">3999,90</p>
                </div>
            </div>
            <footer>
                <strong>SALDO</strong>
                <p className="entry">2890,00</p>
            </footer>
        </Board>
    )
}

const Board = styled.section`
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
        height: auto;
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
        .transactions {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
    
            .box {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 1rem;
    
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

        }

        
    }

`