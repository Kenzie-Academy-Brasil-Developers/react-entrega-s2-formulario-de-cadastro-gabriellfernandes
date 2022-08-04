import {Route, Switch} from "react-router-dom"
import Login from "../pages/login/login"
import Register from "../pages/registro"

function RoutesMap(){

    return(
        <Switch> 
            <Route exact path={"/"}><Login/></Route>
            <Route path={"/register"} ><Register/></Route>
        </Switch>
    )
}

export default RoutesMap