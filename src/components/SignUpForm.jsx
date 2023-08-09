import { useState } from "react"
const SIGNUP_URL ="https://fsa-jwt-practice.herokuapp.com/signup"

export default function SignUpForm({setToken}) {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("hello")
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
        <>
            <h2>Sign Up !!!</h2>
            { error && <p>{ error}</p>  }

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input value={ username} onChange={(e)=>{setUserName(e.target.value) }}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input value={password} onChange={(e)=>{setPassword(e.target.value) }}/>
                </label>
                <br />
                <button >submit</button>

            </form>
        </>
    )

}