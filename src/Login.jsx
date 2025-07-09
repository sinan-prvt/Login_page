import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
    const navigator = useNavigate()
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const logining = (e) => {
        e.preventDefault()

        const storedName = localStorage.getItem("userName")
        const storedPass = localStorage.getItem("userPassword")

        if(storedName === username && storedPass === password){
            alert("😁 Login Successfully !")
            navigator("/Home")
        } else {
            alert("🤨 Incorrect username or password !")
        }
    }

    return(
        <>
            <form onSubmit={logining}>
            <div className="login">
                <h1>Please Login</h1>
                <br></br>
                
                <label>User Name : &nbsp;
                    <input className="inputlogin" value={username} type="text" placeholder=" Enter Your User Name" onChange={(e) => setUsername(e.target.value)} required></input>
                </label>
                <br></br>
                <br></br>
                <br></br>

                
                <label>Password : &nbsp;&nbsp;&nbsp;&nbsp;  
                    <input className="inputlogin" value={password} type="password" placeholder=" Enter Your Password" onChange={(e) => setPassword(e.target.value)} required ></input>
                </label>
                <br></br>
                <br></br>
                <br></br>


                <button className="submit" type="submit">Login</button>
            </div>
            </form>
        </>
    )
}

export default Login