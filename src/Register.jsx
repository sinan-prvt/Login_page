import { useState } from "react";
import { useNavigate } from "react-router-dom"
 
function Register(){
    const navigator = useNavigate();
    const[name,setName] = useState("");
    const[password,setPassword] = useState("");

    const clicking = (e) => {
        e.preventDefault()

        localStorage.setItem("userName", name);
        localStorage.setItem("userPassword", password);

        alert("😁Registration Successful!")
        navigator("/Login")
    }

    return(
        <>
            <form onSubmit={clicking}>
            <div className="regibox">
                <h1>Register Here ⬇</h1>
                <br></br>

                <label> Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="inputregi" type="text" placeholder=" Enter Your Name " onChange={(e) => setName(e.target.value)} required></input> 
                </label>
                <br></br>
                <br></br>

                <label> Phone : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="inputregi" type="number" placeholder=" Enter Your Phone Number " onChange={(e) => (e.target.value)}></input> 
                </label>
                <br></br>
                <br></br>


                <label> Email :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="inputregi" type="email" placeholder=" Enter Your Email Id " onChange={(e) => (e.target.value)}></input> 
                </label>
                <br></br>
                <br></br>   

                <label> Password : &nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="inputregi" type="password" placeholder=" Enter a Strong Password " onChange={(e) => setPassword(e.target.value)} required></input> 
                </label>
                <br></br>
                <br></br>

                <button className="submit" type="submit" >Submit</button>
            </div>
            </form>
        </>
    )
}

export default Register