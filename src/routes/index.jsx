import {Route, Switch, Redirect} from "react-router-dom"
import Dashboard from "../pages/dashboard"
import Login from "../pages/login/login"
import Register from "../pages/registro"
import { AnimatePresence } from "framer-motion"

function RoutesMap(){
    const token = window.localStorage.getItem("token")
    return(
        <AnimatePresence>
            <Switch> 
                <Route path={"/register"} ><Register /></Route>
                <Route path={"/dashboard"}><Dashboard /></Route>
                <Route path={"/login"}><Login/></Route>
                <Route path={"*"} >{token === null ? <Redirect to={"/login"} /> : <Redirect to={"/dashboard"} />}</Route>
            </Switch>
        </AnimatePresence>
    )
}

export default RoutesMap