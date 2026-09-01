import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import LoginToggle from "./components/LoginToggle";
import LiveSearch from "./components/LiveSearch";
import Stopwatch from "./components/Stopwatch";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Frontend Practical Test</h1>
      <p>React Solutions - Q1 to Q5</p>

      <Counter />

      <TodoList />

      <LoginToggle />

      <LiveSearch />

      <Stopwatch />
    </div>
  );
}

export default App;