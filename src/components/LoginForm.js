import { useState } from "react"
import toast from "react-hot-toast";
import { IoMdEye,IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {

    let navigate = useNavigate()

    const [formData, setFormData] = useState( {
        email : "", password : ""
    })

    const [showPassword, setShowPassword] = useState(false)

    const changeHandler = (event) => {
        const {name, value} = event.target
        setFormData( (prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        toast.success("Logged In")
        setIsLoggedIn(true)
        navigate("/dashboard")
        let credentials = {...formData}
        console.log(credentials)
    }
    

    return (
        <div>
            <form onSubmit={submitHandler}
                className="flex flex-col w-full gap-y-4 mt-6">
                <label className="w-full">
                    <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5">  
                        Email Address<sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]"
                        required
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        onChange={changeHandler}
                        value={formData.email}
                    />
                </label>

                <label className="w-full relative">
                    <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5">
                        Password<sup className="text-pink-200">*</sup> 
                    </p>
                    <input
                        className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]"
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter Password"
                        onChange={changeHandler}
                        value={formData.password}
                    /> 
                    <span 
                    className="absolute right-3 top-[38px] cursor-pointer"
                    onClick={ () => setShowPassword(!showPassword)}>
                        {
                            showPassword ? 
                            <IoMdEyeOff fontSize={24} fill="#AFB2BF"/> : 
                            <IoMdEye font-size={24} fill="#AFB2BF"/>
                        }
                    </span>

                    <Link to="#">
                        <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                            Forgot Password
                        </p>
                    </Link>
                </label>
                
                
                <button className="bg-yellow-50 text-richblack-900 rounded-[8px] font-medium py-[8px] px-[12px] mt-6">
                        <p>Sign In</p>  
                </button>
                
                
            </form>
        </div>
    )

    
}

export default LoginForm