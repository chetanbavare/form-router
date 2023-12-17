
import { Link } from "react-router-dom"
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast"

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {

    return (
        <div className="flex justify-between items-center w-11/12 py-4 mx-auto max-w-[1160px]">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" width={160} height={20} loading="lazy"/>
                </Link>
            </div>

            <nav>
                <ul className="flex gap-x-6 text-[17px] mr-[5px] text-richblack-25">
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

            <div className="flex gap-4 text-[17px]">
                { !isLoggedIn &&  
                    <Link to="/login" >
                        <button className="text-richblack-100 
                          bg-richblack-800 py-[8px] px-[12px] border rounded-[8px] border-richblack-700">
                            Log in
                        </button>
                    </Link>
                }
                { !isLoggedIn &&  
                    <Link to="/signup">
                        <button className=" text-richblack-100 
                          bg-richblack-800 py-[8px] px-[12px] border rounded-[8px] border-richblack-700">
                            Sign up
                        </button>
                    </Link>
                }
                { isLoggedIn &&    
                    <Link to="/login" onClick={ () => {
                        setIsLoggedIn(false)
                        toast.success("Logged Out")
                    }}>
                        <button className=" text-richblack-100 
                          bg-richblack-800 py-[8px] px-[12px] border rounded-[8px] border-richblack-700">
                            Log out
                        </button>
                    </Link>
                }
                { isLoggedIn &&    
                    <Link to="/dashboard" >
                        <button className=" text-richblack-100 
                          bg-richblack-800 py-[8px] px-[12px] border rounded-[8px] border-richblack-700">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar