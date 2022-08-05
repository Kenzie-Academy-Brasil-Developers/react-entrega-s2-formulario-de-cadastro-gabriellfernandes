import { Link, Navigate} from "react-router-dom"
import logo from "../../assets/img/Logo.png"
import CardName from "../../components/cardName"
import { ConteinerHeader, ConteinerItens } from "./style"
import { motion } from "framer-motion"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toastStyle } from "../../styles/styleToast"
function Dashboard(){
    const token = window.localStorage.getItem("token")


    return(
        <motion.div
            initial={{opacity: 0.7}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.3}}}
        >
            {token === null ? <Navigate to={"/login"}/> 
            :  
                <>
                    <ConteinerHeader>
                        <img src={logo} alt="logo da kenziehub" className="animate__backInLeft"/>
                        <Link onClick={() => {
                            window.localStorage.clear()
                            toast.success("Deslogado com sucesso", toastStyle)
                        }} to={"/login"} className="logout animate__backInRight">Sair</Link>
                    </ConteinerHeader>
                    <ConteinerItens>
                        <CardName />
                    </ConteinerItens>
                </>}
             
            
        </motion.div>
    )
    
}

export default Dashboard