// import logo from "./logo.svg";
// import "./App.css";

import Header from "./Header.js";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import userEvent from "@testing-library/user-event";
import NavigationBar from "./NavBar";

const TasksPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  const [showAddTask, setshowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food shopping",
      day: "Feb 5th @ 230PM",
      reminder: false,
    },
    {
      id: 2,
      text: "Pet grooming",
      day: "Feb 10th @ 730PM",
      reminder: true,
    },
  ]);

  // const name = "Brad";
  // const x = true;

  // add task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // logout
  const logout = async () => {
    console.log("Sign out in progress");
    await signOut(auth);
    console.log("Sign out successful");
  };

  return (
    <div className="container">
      <NavigationBar />
      <Header
        onAdd={() => setshowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* - if showAddTask is true, show the AddTask component. - onAdd is a parameter/function to be parsed into AddTask */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}

      {/* below shows how react can handle dynamic input */}
      {/* <h1>Hello from React</h1>
      <h2>Hello {x ? "Yes" : "No"}</h2>
      <h2>Hello {name}</h2> */}
    </div>
  );
};

export default TasksPage;
