
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"

const PrivateRoute = ({isLoggedIn}) => {
    if(isLoggedIn) {
        return <Dashboard/>
    }
    else {
        return <Login/>
    }
}

export default PrivateRoute