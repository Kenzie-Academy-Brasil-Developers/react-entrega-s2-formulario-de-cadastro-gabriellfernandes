import styled from "styled-components";
import seta from "../assets/img/seta.png"

export const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0;
    
    .conteiner-login{
        width: 26%;
        border-radius: 6px;
        background-color: #212529;
        padding: 10px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
     
    @media only screen and (max-width: 1024px) {
        .conteiner-login{
            width: 50%;
        }
    }

    @media only screen and (max-width: 560px) {
        .conteiner-login{
            width: 90%;
        }
    }


    h3{
        color: #fff;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 15px;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 80%;

        label{
            font-size: 1rem;
            color: #F8F9FA;
            text-align: left;
            margin-bottom: 5px;
        }

        input{
            width: 100%;
            height: 30px;
            border: 1px solid #F8F9FA;
            border-radius: 6px;
            padding-left: 10px;
            background-color: #343B41;
            color: white;
            margin-bottom: 5px;
        }

        button{
            width: 100%;
            font-size: 1.3rem;
            font-weight: 700;
            border-radius: 6px;
            height: 30px;
            color: #fff;
            background-color: #FF577F;
            border: none;
            margin-bottom: 10px;
        }

        button:hover{
            filter: opacity(0.6);
        }
    }

    div{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span{
            margin-bottom: 10px;
            color: #868E96;
            font-size: 1.2rem;
            font-weight: 400;
        }

       .register{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FF577F;
            font-size: 1.3rem;
            font-weight: 700;
            text-decoration: none;
            margin-bottom: 10px;
            width: 100%;
            border-radius: 6px;
            height: 30px;
            color: #F8F9FA;
            background-color: #868E96;
            border: none;
            margin-bottom: 10px;
       }

       .register:hover{
            filter: opacity(0.6);
       }

       .h3-register{
            margin-bottom: 5px;
       }

       .span-register{
            margin-bottom: 15px;
       }

    

       select {
            width: 100%;
            height: 30px;
            border: 1px solid #F8F9FA;
            font-size: 1.3rem;
            border-radius: 6px;
            padding-left: 5px;
            background-color: #343B41;
            color: white;
            margin-bottom: 12px;
            -webkit-appearance: none;
            background-position: 95% center;
            background-repeat: no-repeat;
            background-image: url(${seta})
        } 
    }


`