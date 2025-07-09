import { useNavigate } from "react-router-dom"

function Home(){
    const navigator = useNavigate()

    const back = (e) => {
        e.preventDefault()
        navigator("/")
    }
    return (
        <>
        <div className="home">
            <h1>🎉Welcome To Our Page</h1>
            <p>
                We're truly excited to see you again!<br /> Your presence makes a difference, and today is another opportunity to move forward, grow, and achieve great things.<br />
                Remember, every small step counts — and you're already on the right track just by showing up.<br />
                Let’s make today meaningful, stay focused on your goals, and never forget how capable you are.<br />You’ve got this! 💪✨
                <br />Let the journey continue. 🚀
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button className="back" onClick={back}>Back To Register</button>
        </div>
        </>
    )

}

export default Home