// import logo from './logo.svg';
// import './App.css';

import { useEffect } from "react";


const App = () => {
   const [todos, setTodos] = useState([]);

   useEffect(() => {
    console.log("Componente construído!");
    const existingTodos
   })
}

function addTodo(evento)

return (
  <div>
    <ul>
      {todos.map(todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
    <form onSubmit={addTodo}>
      <input type="text" placeholder="Escreva o seu TODO" />
      <input type="submit" value="Novo TODO" />

    </form>
  </div>
)

export default App;
