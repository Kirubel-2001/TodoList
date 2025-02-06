import { useEffect, useState } from "react";
import { BsCircleFill, BsFillTrashFill } from "react-icons/bs";
import Create from "./Create";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleEdit = () => {}
  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Todo Found</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <div className="task">
              <div className="task-content" onClick='handleEdit'>
                <BsCircleFill className="icon" />
                {todo.task}
              </div>
              <BsFillTrashFill className="icon" />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
