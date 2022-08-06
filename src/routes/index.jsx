import {Route, Navigate, Routes} from "react-router-dom"
import Dashboard from "../pages/dashboard"
import Login from "../pages/login/login"
import Register from "../pages/registro"
import { AnimatePresence } from "framer-motion"
import NewTechnology from "../components/newTechnology"
import EditTechnology from "../components/editTechnology"

function RoutesMap(){
    const token = window.localStorage.getItem("token")
    return(
        <AnimatePresence>
            <Routes> 
                <Route path={"/register"} element={<Register />} />
                <Route path={"/dashboard"} element={<Dashboard />}>
                    <Route path="tech">
                        <Route path="new" element={<NewTechnology />}></Route>
                        <Route path="edit" element={<EditTechnology />}></Route>
                    </Route>
                </Route>
                <Route path={"/login"} element={<Login/>} />
                <Route path={"*"} element={token === null ? <Navigate to={"/login"}/> : <Navigate to={"/dashboard"}/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default RoutesMap