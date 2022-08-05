import styled from "styled-components";
import 'animate.css';

export const ConteinerHeader = styled.div`
    width: 100vw;
    height: 60px;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 0;
    border-bottom: 0.5px solid #121214;

    .logout{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
            width: 50px;
            border-radius: 6px;
            height: 25px;
            background-color: #212529;
            border: none;
        }

    .logout:hover{
        background-color: #343B41;
    }

    .animate__backInLeft{
            animation: backInLeft 0.5s;
            animation-duration: 1s;
        }
        
    .animate__backInRight{
        animation: backInRight 0.5s;
        animation-duration: 1s;
    }
`

export const ConteinerItens = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000000;
    padding: 0 0;

    .conteiner-user{
        display: flex;
        width: 100%;
        height: 80px;
        align-items: center;
        justify-content: space-around;
        padding: 0 0;
        border-bottom: 0.5px solid #121214;

        h2{
            color: #fff;
            font-size: 2.5rem;
            font-weight: 700;
        }

        P{
            color: #868E96;
            font-size: 1.4rem;
            font-weight: 400;
        }

        .animate__backInLeft{
            animation: backInLeft 0.5s;
            animation-duration: 1s;
        }
        .animate__backInRight{
            animation: backInRight 0.5s;
            animation-duration: 1s;
        }
    }
`