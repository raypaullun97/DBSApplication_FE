import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  // first argument of useState() will be the default state (of tasks in this case)

  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
