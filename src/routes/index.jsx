import {Route, Navigate, Routes} from "react-router-dom"
import Dashboard from "../pages/dashboard"
import Login from "../pages/login/login"
import Register from "../pages/registro"
import { AnimatePresence } from "framer-motion"

function RoutesMap(){
    const token = window.localStorage.getItem("token")
    return(
        <AnimatePresence>
            <Routes> 
                <Route path={"/register"} element={<Register />} />
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/login"} element={<Login/>} />
                <Route path={"*"} element={token === null ? <Navigate to={"/login"}/> : <Navigate to={"/dashboard"}/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default RoutesMap