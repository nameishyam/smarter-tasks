import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

interface State {}

class TaskList extends React.Component<Props, State> {
  render() {
    return (
      <div className="space-y-3">
        {this.props.tasks.map((task, idx) => (
          <Task
            key={idx}
            title={task.title}
            duedate={task.duedate}
            description={task.description}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
