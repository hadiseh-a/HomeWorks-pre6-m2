import { useEffect, useState } from "react";
import "./TodoList.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5"
      );
      const data = await result.json();
      setTasks(data);
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target[0].value &&
      setTasks([
        ...tasks,
        {
          userId: 1,
          id: tasks[tasks.length - 1].id + 1,
          title: e.target[0].value,
          completed: false,
        },
      ]);
  };

  const handleCheckbox = (e) => {
    // const checkedTask = tasks.find((task) => parseInt(e.target.id) === task.id);
    // setTasks([
    //   ...tasks.filter((task) => task.id < checkedTask.id),
    //   {
    //     userId: checkedTask.userId,
    //     id: checkedTask.id,
    //     title: checkedTask.title,
    //     completed: checkedTask.completed ? false : true,
    //   },
    //   ...tasks.filter((task) => task.id > checkedTask.id),
    // ]);
    setTasks(
      tasks.map((task) =>
        task.id === parseInt(e.target.id)
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  function handleDeleteButton(e) {
    setTasks(
      tasks.filter((task) => task.id !== parseInt(e.target.parentElement.id))
    );
  }

  return (
    <div className="container ">
      <h1>ToDoList</h1>
      <form className="d-flex mb-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="New Task" className="form-control" />
        <button className="btn btn-primary">Add</button>
      </form>
      <ul className="list-group container gap-0">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between form-control"
            >
              <input
                type="checkbox"
                onChange={handleCheckbox}
                checked={task.completed ? "checked" : ""}
                id={task.id}
              />
              <div
                className={task.completed ? "text-decoration-line-through" : ""}
              >
                {task.title}
              </div>
              <button
                className="bg-danger border-0 rounded-3 p-2"
                onClick={handleDeleteButton}
                id={task.id}
              >
                <i className="bi bi-trash text-light"></i>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
