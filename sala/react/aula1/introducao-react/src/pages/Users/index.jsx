import { Form } from "../../components/pages/Users/Form"
import { UsersTable } from "../../components/pages/Users/Table"
import { useUsers } from "../../hooks/useUsers"

export default function UsersPage() {
    const {user, users, deleteUser, handleSubmit, handleUser} = useUsers()
    return (
        <>
        <h1>Página de Usuarios</h1>
        <Form handleSubmit={handleSubmit} handleUser={handleUser} user={user}/>
        <UsersTable deleteUser={deleteUser} users={users}/>
        </>
    )
}