import { useState } from "react"
const AUTHENTICATE_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate"

export default function Authenticate({ token }) {
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [username, setUsername] = useState(null)

    function handleClear() {

        setError(null)
        setSuccessMessage(null)
        setUsername(null)
    }

    async function handleClick() {
        console.log("handleClick")
        try {
            const response = await fetch(AUTHENTICATE_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });


            const result = await (response.json())
            console.log(result)
            setSuccessMessage(result.message)
            setUsername(result.data.username)


        } catch (error) {
            setError(error.message)
        }

    }

    return (
        <div className="cardClass">
            <h2>Authenticate!</h2>
            {error && <p>{error}</p>}
            {successMessage && <p>{successMessage}</p>}
            {username && <p>username: {username}</p>}

            <button onClick={handleClick}>Authenticate Token</button>
            <br/>
            
            <button onClick={handleClear}>Clear Token</button>
        </div>
    )
}