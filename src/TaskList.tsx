import Task from "./Task";
import { TaskItem } from "./types";
import { useState } from "react";

interface Props {
  tasks: TaskItem[];
}

const TaskList = (props: Props) => {
  const [taskList, setTaskList] = useState(props.tasks);

  const removeTask = (task: TaskItem) => {
    const newTasks = taskList.filter((t) => t.id !== task.id);
    setTaskList(newTasks);
  };

  const list = taskList.map((task) => (
    <Task key={task.id} item={task} removeTask={removeTask} />
  ));

  return <>{list}</>;
};

export default TaskList;
