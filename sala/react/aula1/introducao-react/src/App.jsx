import Lista from "./components/Lista"

function App() {
const convidados = ["Guilherme", "Mariana", "Vitor"]
  return (
    <div className="App">
      <Lista nome="Convidados" items={convidados}/>
    </div>
  )
}

export default App


/*
*Tarefa de casa:
- Refazer a pagina inicial do projeto do CRUD com REACT e Tailwind
*/