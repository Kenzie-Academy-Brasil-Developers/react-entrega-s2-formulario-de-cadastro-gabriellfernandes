import { Link, Redirect } from "react-router-dom"
import logo from "../../assets/img/Logo.png"
import CardName from "../../components/cardName"
function Dashboard(){
    const token = window.localStorage.getItem("token")


    return(
        <>
            {token === null ? <Redirect to={"/login"} /> :  
            <div>
                <header>
                    <img src={logo} alt="logo da kenziehub"/>
                    <Link onClick={() => window.localStorage.clear()} to={"/login"}>Sair</Link>
                </header>
                <CardName />
            </div>}
        </>
    )
    
}

export default Dashboard