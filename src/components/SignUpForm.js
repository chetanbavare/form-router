import { useState } from "react"
import toast from "react-hot-toast";
import { IoMdEye,IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({setIsLoggedIn}) => {

    let navigate = useNavigate()

    const [formData, setFormData] = useState( {
        firstname : "",
        lastname : "",
        email : "",
        password : "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    const [showConfiPassword, setConfiShowPassword] = useState(false)

    const [accountType, setaccountType] = useState("student")

    const changeHandler = (event) => {
        const {name,value} = event.target
        setFormData( (prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if(formData.password !== formData.confirmPassword) {
            toast.error("Password don't match")
     //this makes submithandler false
        }
        else {
            toast.success("Account Created")
            setIsLoggedIn(true)
            console.log(formData)
            navigate("/dashboard")
            let credentials = {...formData,accountType}
            console.log(credentials)
        }
        
    }

    return (
        <div>
            <form className="flex flex-col w-full gap-y-4 mt-1" onSubmit={submitHandler}>
                <div className="flex bg-richblack-800 gap-x-1 my-6 rounded-full max-w-max p-1">
                    <button 
                    className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={ () => setaccountType("student")}>
                        Student
                    </button>
                    <button
                    className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} 
                    onClick={ () => setaccountType("instructor")}>
                        Instructor
                    </button>
                </div>

                <div className="flex gap-x-4 mt-[-20px]"> 
                    <label className="w-full">
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5">First Name<sup className="text-pink-200">*</sup></p>
                        <input 
                            className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]"
                            required
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            placeholder="Enter first name"
                            onChange={changeHandler}
                        />
                    </label>
                    <label className="w-full">
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5">Last Name<sup className="text-pink-200">*</sup></p>
                        <input
                            className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]" 
                            required
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            placeholder="Enter last name"
                            onChange={changeHandler}
                        />
                    </label>
                </div>

                <label className="w-full">
                    <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5">Email Address<sup className="text-pink-200">*</sup></p>
                    <input
                        className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]" 
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter email address"
                        onChange={changeHandler}
                    />
                </label>

                <div className="flex gap-x-4">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5">Create Password<sup className="text-pink-200">*</sup> </p>
                            <input
                                className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]"
                                required
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter Password"
                                onChange={changeHandler}
                                value={formData.password}
                            /> 
                            <span className="absolute right-3 top-[38px] cursor-pointer" onClick={ (prev) => setShowPassword(!showPassword)}>
                                {
                                    showPassword ?  
                                    <IoMdEyeOff fontSize={24} fill="#AFB2BF"/> : 
                                    <IoMdEye fontSize={24} fill="#AFB2BF"/>
                                }
                            </span>
                        </label>
                    <label className="w-full relative">
                    <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5">Confirm Password<sup>*</sup> </p>
                        <input
                            className="bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]"
                            required
                            type={showConfiPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                        /> 
                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={ (prev) => setConfiShowPassword(!showConfiPassword)}>
                            {
                                showConfiPassword ? 
                                <IoMdEyeOff fontSize={24} fill="#AFB2BF"/> :
                                <IoMdEye fontSize={24} fill="#AFB2BF"/>
                            }
                        </span>
                    </label>
                </div>
                
                <button className="bg-yellow-50 text-richblack-900 rounded-[8px] font-medium py-[8px] px-[12px] mt-6">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignUpForm