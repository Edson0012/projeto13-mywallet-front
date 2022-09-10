import styled from "styled-components"

export default function Transaction(){
    return (
        <Board>
            <p>Não há registros de entrada ou saída</p>
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

`