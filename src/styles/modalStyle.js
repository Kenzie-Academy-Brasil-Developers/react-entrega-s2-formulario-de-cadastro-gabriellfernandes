import styled from "styled-components";
import seta from "../assets/img/seta.png";

export const ModalConteiner = styled.div`
    z-index: 1;
    width: 100vw;
    height: 100vh;
    top: 0%;
    left: 0%;
    position: fixed;
    background-color: #2125299d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0;

        .conteiner-modal{
            width: 28%;
            border-radius: 6px;
            background-color: #1d1f20;
            padding: 10px;
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            div{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0px;
            }

            form{
            display: flex;
            flex-direction: column;
            width: 80%;

            label{
                font-size: 1.3rem;
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
                margin-bottom: 6px;
                font-family: 'Inter', sans-serif;
            }

            input::placeholder{
                font-family: 'Inter', sans-serif;
            }

            button{
                width: 100%;
                font-size: 1.5rem;
                font-weight: 700;
                border-radius: 6px;
                height: 40px;
                color: #fff;
                background-color: #FF577F;
                border: none;
                margin-bottom: 10px;
            }

            button:hover{
                filter: opacity(0.6);
            }
            
            select {
                width: 100%;
                height: 40px;
                border: 1px solid #F8F9FA;
                font-size: 1.4rem;
                border-radius: 6px;
                padding-left: 5px;
                background-color: #343B41;
                color: white;
                margin-bottom: 20px;
                -webkit-appearance: none;
                background-position: 95% center;
                background-repeat: no-repeat;
                background-image: url(${seta})
            } 

            span{
                color: #5b636a;
                font-size: 1.4rem;
                margin-bottom: 15px;
                margin-left: 2%;
            }

        }
        
        .conteiner-modal-header{
            display: flex;
            flex-direction: row;
            width: 80%;
            justify-content: space-between;
            margin-top: 10px;
            margin-bottom: 10px;
            h2{
                color: #fff;
                font-size: 2rem;
                margin-top: 5px;
                font-weight: 700;
                margin-bottom: 15px;
            }
    
            .button-back{
                transform: matrix(1.5, 0, 0, 1.5, 0, 0);
                margin-bottom: 15px;
            }
        }

        .button-back:hover{
            color: #fff;
        }

        .button-delete{
            color: #F8F9FA;
            background-color: #868E96;
        }
    }

    @media only screen and (max-width: 1062px) {
        .conteiner-modal{
            width: 40%;
        }
    }

    @media only screen and (max-width: 768px) {
        .conteiner-modal{
            width: 60%;
        }
    }


    @media only screen and (max-width:  541px) {
        .conteiner-modal{
            width: 80%;
        }
    }
   
`