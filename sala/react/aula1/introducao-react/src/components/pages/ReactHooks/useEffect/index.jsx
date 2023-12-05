import { useEffect, useState } from "react"
import axios from "axios"


export function UseEffectComponent() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({
        name: "",
        lastName: "",
    })

    function handleUser(e) {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }


    async function fetchAllUsers() {
        const response = await axios.get("https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users")
        setUsers(response.data)
    }

    async function createUser() {
        const response = await axios.post(
            "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users",
            user
        )
    }

    function handleSubmit(e) {
        e.preventDefault()
        createUser()
    }

    useEffect(() => {
        fetchAllUsers()
    }, [])

    useEffect(() => {
        fetchAllUsers()
    }, [])


    return (
        <div className="border-t p-2 mt-2">
        <h2>Lidando com useEffect</h2>
        </div>
    )
}
