import { useEffect, useState } from "react"
import Api from "../../services/api"
import 'animate.css';

function CardName(){
    const id = window.localStorage.getItem("idUser")
    const [user, SetUser] = useState({})
    useEffect(() => {
        Api.get(`/users/${id}`).then(res => SetUser(res.data))
    },
    [])    
    return(
        <div className="conteiner-user">
            <h2 className="animate__backInLeft">Olá, {user.name}</h2>
            <p className="animate__backInRight">{user.course_module}</p>
        </div>
    )
}

export default CardName