import React from "react";
import Task from "./Task";

type Props = object;

interface TaskItem {
  title: string;
}

interface State {
  tasks: TaskItem[];
}

class TaskList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tasks: [
        { title: "Task 1" },
        { title: "Task 2" },
        { title: "Task 3" },
        { title: "Task 4" },
        { title: "Task 5" },
        { title: "Task 6" },
        { title: "Task 7" },
        { title: "Task 8" },
        { title: "Task 9" },
        { title: "Task 10" },
      ],
    };
  }
  render() {
    return (
      <>
        {this.state.tasks.map((task) => (
          <Task title={task.title} />
        ))}
      </>
    );
  }
}

export default TaskList;
