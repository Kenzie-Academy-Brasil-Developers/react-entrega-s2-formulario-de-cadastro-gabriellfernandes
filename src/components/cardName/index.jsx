import { useEffect, useState } from "react"
import Api from "../../services/api"

function CardName(){
    const id = window.localStorage.getItem("idUser")
    const [user, SetUser] = useState({})
    
    useEffect(() => {
        Api.get(`/users/${id}`).then(res => SetUser(res.data)).catch(res => console.log(res.data))
    },
    [])    
    return(
        <div>
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module}</p>
        </div>

    )
}

export default CardName