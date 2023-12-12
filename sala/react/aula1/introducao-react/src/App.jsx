import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
    <RouterProvider router={routes}/> //provedor de rotas -> cria todas as rotas que nós informamos para ele

    <ToastContainer/>
    
    </>
  )
}

export default App


/*
*Tarefa de casa:
- Refazer a pagina inicial do projeto do CRUD com REACT e Tailwind
*/