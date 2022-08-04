import {Route, Switch, Redirect} from "react-router-dom"
import Dashboard from "../pages/dashboard"
import Login from "../pages/login/login"
import Register from "../pages/registro"

function RoutesMap(){
    const token = window.localStorage.getItem("token")
    return(
        <Switch> 
            <Route path={"/register"} ><Register /></Route>
            <Route path={"/dashboard"}><Dashboard /></Route>
            <Route path={"/login"}><Login/></Route>
            <Route path={"*"} >{token === null ? <Redirect to={"/login"} /> : <Redirect to={"/dashboard"} />}</Route>
        </Switch>
    )
}

export default RoutesMap