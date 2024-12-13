import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      duedate={task.duedate}
      description={task.description}
    />
  ));

  return <>{list}</>;
};

export default TaskList;
