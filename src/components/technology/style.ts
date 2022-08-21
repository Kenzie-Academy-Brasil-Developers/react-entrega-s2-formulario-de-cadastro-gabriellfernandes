import styled from "styled-components";

export const TechnologyWrapper = styled.div`
    width: 100vw;
    background: #000000;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 0;
    margin-top: 20px;

    .header-tech{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 20px;
        padding: 0px 0px;
        
        h2{
            color: #fff;
            font-size: 2.5rem;
            font-weight: 700;
        }

        .button-add{
            transform: matrix(1.8, 0, 0, 1.8, 0, 0);
            color: #868E96;
        }

        .button-add:hover{
            color: #fff;
        }
    }

    .conteiner-tech{
        display: flex;
        width: 55.5%;
        height: 70vh;
        padding: 0 0;
        margin-bottom: 20px;
        justify-content: center;
        background-color: #212529;
        overflow-y: auto;

        ul{
            width: 85%;
            margin-top: 20px;
            list-style: none;
           
            li{
                display: flex;
                width: 100%;
                justify-content: space-around;
                background-color: #121214;
                border-radius: 6px;
                margin-bottom: 15px;

                .remove-tech{
                    margin-top: 10px;
                    transform: matrix(1.2, 0, 0, 1.2, 0, 0);
                    color: #868E96;
                }

                .remove-tech:hover{
                    color: #fff;
                }

                button{
                    width: 95%;
                    height: 50px;
                    border: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0px 20px;
                    background-color: #121214;
    
                    h3{
                        font-size: 2rem;
                        font-weight: 700;
                        color: #fff;
                    }
    
                    span{
                        font-size: 1.4rem;
                        font-weight: 400;
                        color: #868E96;
                    }
                }
            }

            li:hover{
                background-color: #343B41;

                button{
                    background-color: #343B41;
                }

                span{
                    color: #F8F9FA;
                }
            }
        }

        div{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            
            h2{
                font-size: 2rem;
                font-weight: 700;
                color: #fff;
            }
            
            span{
                    font-size: 1.4rem;
                    font-weight: 400;
                    color: #868E96;
                }
        }
    }

    .animate__backInLeft{
        animation: backInLeft 0.5s;
        animation-duration: 1s;
    }

    .animate__backInUp{
        animation: backInUp 0.5s;
        animation-duration: 0.8s;
        
    }
   
    .animate__backInRight{
        animation: backInRight 0.5s;
        animation-duration: 1s;
    }

    .animate__fadeInDown{
        animation: pulse 0.5s;
        animation-duration: 5s;
        animation-iteration-count: infinite;
    }

    @media only screen and (max-width: 768px) {

        .conteiner-tech{
            width: 90%;
        }

        .header-tech{
            justify-content: space-between; 
            width: 89%;
        }

        .remove-tech{
            display: none;
        }

        h3{
            font-size: 2rem;
            font-weight: 700;
            color: #fff;
            width: auto;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        span{
            font-size: 1.2rem;
            font-weight: 400;
            color: #868E96;
            width: auto;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
`