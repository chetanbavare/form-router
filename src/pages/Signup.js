import Template from "../components/Template";
import signImg from "../assets/signup.png"

function Signup({ setIsLoggedIn }) {
    return (
        <Template
        title = "Join the millions learning to code with StudyNotion for free"
        desc1 = "Build skills for today, tomorrow, and beyond."
        desc2 = "Education to future-proof your career."
        formtype = "signup"
        image = {signImg}
        setIsLoggedIn = {setIsLoggedIn}
    />
    )
   
}

export default Signup;
