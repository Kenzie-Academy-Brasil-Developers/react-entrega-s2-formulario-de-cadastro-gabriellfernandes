import styled from "styled-components";

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
        width: 30%;
        border-radius: 6px;
        background-color: #212529;
        padding: 20px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h3{
        color: #fff;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 30px;
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
            height: 40px;
            border: 1px solid #F8F9FA;
            border-radius: 6px;
            padding-left: 10px;
            background-color: #343B41;
            color: white;
            margin-bottom: 20px;
        }

        button{
            width: 100%;
            border-radius: 6px;
            height: 48px;
            color: #fff;
            background-color: #FF577F;
            border: none;
            margin-bottom: 10px;
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
            color: #FF577F;
            font-size: 1.2rem;
            font-weight: 700;
            text-align: center;
            text-decoration: none;
            margin-bottom: 10px;
            width: 100%;
            border-radius: 6px;
            height: 48px;
            color: #fff;
            background-color: #FF577F;
            border: none;
            margin-bottom: 10px;
       }
    }


`