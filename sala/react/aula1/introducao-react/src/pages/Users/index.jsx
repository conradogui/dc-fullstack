import { Form } from "../../components/pages/Users/Form"
import { UsersTable } from "../../components/pages/Users/Table"
import { useUsersContext } from "../../context/UsersContext"
import { useUsers } from "../../hooks/useUsers"

export default function UsersPage() {
    const {user, users, deleteUser, handleSubmit, handleUser} = useUsers()
    const { name } = useUsersContext()
    return (
        <>
        <h1>Página de Usuarios</h1>
        <p>Usuário: {name}</p>
        <Form />
        <UsersTable />
        </>
    )
}