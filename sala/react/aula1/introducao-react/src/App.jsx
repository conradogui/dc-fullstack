import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"

function App() {
  return (
    <RouterProvider router={routes}/> //provedor de rotas -> cria todas as rotas que nós informamos para ele
  )
}

export default App


/*
*Tarefa de casa:
- Refazer a pagina inicial do projeto do CRUD com REACT e Tailwind
*/