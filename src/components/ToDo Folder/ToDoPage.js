import { useEffect, useState } from "react";
import EditComponent from "./EditComponent";
// import { v4 as uuidv4 } from "uuid";
export default function ToDoPage() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList"))
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  );
  const [task, setTask] = useState({
    name: "",
    date: "",
    status: false,
  });

  const onChangeToDo = (key) => (e) => {
    setTask({ ...task, [key]: e.target.value });
  };

  const onClickAddData = () => {
    const newTask = { ...task, id: Math.random() };
    setTodoList([...todoList, newTask]);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  console.log(todoList);

  const onClickComplited = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          task.status = !task.status;
        }
        return task;
      })
    );
  };

  const onRemoveData = (id) => {
    setTodoList((todoList) =>
      todoList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const onUpdateTodo = (id, newName, newDate) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, name: newName, date: newDate };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="todo_list_box">
      <div className="todo_heading">
        <h1>ToDo List</h1>
      </div>
      <div className="todo_list_form">
        <input
          className="todo_list_name"
          type="text"
          placeholder="type data"
          onChange={onChangeToDo("name")}
        ></input>
        <input
          className="todo_list_date"
          type="date"
          onChange={onChangeToDo("date")}
        ></input>

        <svg
          onClick={onClickAddData}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(173, 46, 173)"
          className="bi bi-plus-square-fill add_data"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
        </svg>
      </div>
      <div className="added_data_box">
        {todoList.map((item) => {
          return (
            <div className="added_data" key={item.id}>
              <div className="added_data_completed">
                <a onClick={() => onClickComplited(item.id)}>
                  {item.status ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="rgb(173, 46, 173)"
                      class="bi bi-check-all complete_data"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="rgb(173, 46, 173)"
                      className="bi bi-check complete_data"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                  )}
                </a>
                <div>
                  <p className="added_data_name">{item.name}</p> <br></br>
                  <p className="added_data_date">Deadline: {item.date}</p>
                </div>
              </div>
              <div className="edit_remove_box">
                <svg
                  onClick={() => onRemoveData(item.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3-fill remove_data"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                </svg>
                <EditComponent props={{ item, onUpdateTodo }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
