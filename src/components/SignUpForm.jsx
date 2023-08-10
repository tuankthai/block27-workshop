import { useState } from "react"
const SIGNUP_URL = "https://fsa-jwt-practice.herokuapp.com/signup"

export default function SignUpForm({ setToken }) {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("hello")
        if (username.length !== 8) {

            alert("username must have length of eight characters")
            return
        }

        try {
            const response = await fetch(SIGNUP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });


            const result = await (response.json())
            console.log(result)
            setToken(result.token)

        } catch (error) {
            setError(error.message)

        }

    }

    return (

        <div className="cardClass">
            <h2>Sign Up !</h2>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input value={username} onChange={(e) => { setUserName(e.target.value) }} />
                    {/* <input value={ username} onChange={handleChange}/> */}
                </label>
                <br />
                <br />
                <label>
                    Password:
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <br/>
                <br/>
                <button >submit</button>

            </form>
        </div>
    )

}