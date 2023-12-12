// import {useUsersForm} from "./useUsersForm"



export function Form({user, handleUser, handleSubmit}) {
    // const {user, handleUser, handleSubmit} = useUsersForm()
    return (
        <form action="" className="flex flex-col gap-2 px-4 py-3 border rounded-md justify-center items-center bg-white shadow" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 w-full">
                <label htmlFor="name">Nome: </label>
                <input type="text"  className="outline-none border border-black rounded px-2 py-1" placeholder="" name="name" id="name" onChange={handleUser} value={user.name} />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label htmlFor="lastName">Sobrenome: </label>
                <input type="text" className="outline-none border border-black rounded px-2 py-1" placeholder="" name="lastName" id="lastName" onChange={handleUser} value={user.lastName}/>
            </div>
            <button className="w-full h-10 flex justify-center items-center text-white bg-sky-950 rounded-md shadow">Enviar</button>
        </form>
    )
}