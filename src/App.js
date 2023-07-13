import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import {AiOutlineInstagram} from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <TodoWrapper  />
      <a
        className="Shivam"
        href="https://www.instagram.com/shivam_raskonda/"
        target="-blank"
      >
        <AiOutlineInstagram />
        Shivam Raskonda
      </a>
    </div>
  );
}

export default App;
