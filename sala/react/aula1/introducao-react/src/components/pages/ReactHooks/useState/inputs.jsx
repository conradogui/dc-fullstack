import { useState } from "react"

export function Inputs() {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birth, setBirth] = useState("")
    const [height, setHeight] = useState("")
    const [age, setAge] = useState("")
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        birth: "",
        height: "",
        age: "",
    })

    function handleInput(e) {
        const date = new Date(e.target.value)
        const hour = new Date(date.getTime() + 3)
        setUser((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    return (
        <>
        <h2>Lidando com Inputs no React com useState</h2>
        <div className="flex flex-col gap-2">
            <input value={user.name} onChange={handleInput} name="name" type="text" className="border border-black rounded px-2 py-1 outline-none"/>
            <input type="text" value={user.lastName} name="lastName" onChange={handleInput} className="border border-black rounded px-2 py-1 outline-none" />
            <input type="date" value={user.birth} name="birth" onChange={handleInput} className="border border-black rounded px-2 py-1 outline-none" />
            <input type="number" value={user.height} name="height" onChange={handleInput} className="border border-black rounded px-2 py-1 outline-none" />
            <input type="number" value={user.age} name="age" onChange={handleInput} className="border border-black rounded px-2 py-1 outline-none" />
        </div>
        <div>
            <p>{user.name} {user.lastName} {new Date(user.birth).toLocaleDateString("pt-br", {hour12:false, timeZone:'UTC'})} {user.height} {user.age}</p>
        </div>
        </>
    )
}