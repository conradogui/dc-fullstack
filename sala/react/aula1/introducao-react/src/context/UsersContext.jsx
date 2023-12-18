import { createContext, useEffect, useContext, useState} from "react";
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

const UsersContext = createContext(null)

function UsersProvider({children}) {

    const [name, setName] = useState("")
    const [user, setUser] = useState({
        name: "",
        lastName: "",
    })
    const [users, setUsers] = useState([])
    
    function handleUser(e) {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    async function createUser() {
        await axios.post(
            "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users",
            user
        )
    }

    function clearFields() {
        user.name = ""
        user.lastName = ""
    }
    

    function handleSubmit(e) {
        e.preventDefault()
        if(user.name.length > 2 && user.lastName.length >= 3) {
            createUser()
            clearFields()
            toast.success('Usuário criado com sucesso!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
                });
            
        }
    }


    

    async function fetchUsers() {
        const response = await axios.get("https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users")
        setUsers(response.data)
    }

    async function deleteUser(id) {
        await axios.delete(`https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users/${id}`)
        await fetchUsers()
        toast.success('Usuário deletado com sucesso!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    const values = {
        user,
        users,
        deleteUser,
        handleSubmit,
        handleUser,
    }
    return (
        <UsersContext.Provider value={values}>
            {children}
        </UsersContext.Provider>
    )
}

function useUsersContext() {
    const context = useContext(UsersContext)
    return context
}

export { UsersProvider, useUsersContext }