
import { Link } from "react-router-dom"
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast"

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {

    return (
        <div className="flex justify-center">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" width={160} height={20} />
                </Link>
            </div>

            <nav>
                <ul className="flex gap-3">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex ml-5 mr-3 gap-3">
                { !isLoggedIn &&  
                    <Link to="/login" >
                        <button onClick={ () => {
                            setIsLoggedIn(true)
                        }}>
                            Login
                        </button>
                    </Link>
                }
                { !isLoggedIn &&  
                    <Link to="/signup" >
                        <button>
                            Signup
                        </button>
                    </Link>
                }
                { isLoggedIn &&    
                    <Link to="/login" onClick={ () => {
                        setIsLoggedIn(false)
                        toast.success("Logged Out")
                    }}>
                        <button>
                            Logout
                        </button>
                    </Link>
                }
                { isLoggedIn &&    
                    <Link to="/dashboard" >
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar